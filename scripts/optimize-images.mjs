import fs from 'fs/promises'
import path from 'path'
import sharp from 'sharp'

const SRC_DIR = path.join(process.cwd(), 'public', 'assets', 'images-src')
const OUTPUT_DIR = path.join(process.cwd(), 'public', 'assets', 'images')
const BACKUP_DIR = path.join(process.cwd(), 'public', 'assets', 'images-src-originals')
const WIDTHS = [320, 720, 1280]
const FORMATS = {
  avif: { quality: 60 },
  webp: { quality: 70 },
  jpg: { quality: 75 }
}
const SUPPORTED_EXTS = ['.png', '.jpg', '.jpeg', '.webp', '.avif']

const formatKiB = (bytes) => `${(bytes / 1024).toFixed(1)} KiB`

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true })
}

async function getImageFiles() {
  try {
    const entries = await fs.readdir(SRC_DIR)
    return entries.filter((file) => SUPPORTED_EXTS.includes(path.extname(file).toLowerCase()))
  } catch (error) {
    if (error.code === 'ENOENT') {
      await ensureDir(SRC_DIR)
      console.log(`📂 Pasta criada em ${SRC_DIR}. Mova as imagens originais para lá e reexecute.`)
      return []
    }
    throw error
  }
}

async function copyBackup(srcPath, fileName) {
  const backupPath = path.join(BACKUP_DIR, fileName)
  try {
    await fs.access(backupPath)
  } catch (error) {
    if (error.code === 'ENOENT') {
      await fs.copyFile(srcPath, backupPath)
    } else {
      throw error
    }
  }
}

async function generateOutputs(fileName) {
  const ext = path.extname(fileName)
  const baseName = path.basename(fileName, ext)
  const inputPath = path.join(SRC_DIR, fileName)
  const image = sharp(inputPath, { failOn: 'none' }).rotate()
  const metadata = await image.metadata()

  const generated = []

  for (const width of WIDTHS) {
    const resized = image.clone().resize({ width, withoutEnlargement: true })

    for (const [format, options] of Object.entries(FORMATS)) {
      const outputPath = path.join(OUTPUT_DIR, `${baseName}-${width}.${format}`)
      await resized.clone().toFormat(format, options).toFile(outputPath)
      const stats = await fs.stat(outputPath)
      generated.push({ outputPath, width, format, size: stats.size })
    }
  }

  return {
    fileName,
    width: metadata.width,
    height: metadata.height,
    originalSize: metadata.size,
    generated
  }
}

async function summarize(results) {
  const originalsTotal = results.reduce((sum, item) => sum + (item.originalSize ?? 0), 0)

  let optimizedTotal = 0
  for (const item of results) {
    const bestByWidth = new Map()
    for (const output of item.generated) {
      const key = `${output.width}`
      const current = bestByWidth.get(key)
      if (!current || output.size < current) {
        bestByWidth.set(key, output.size)
      }
    }
    optimizedTotal += Array.from(bestByWidth.values()).reduce((sum, value) => sum + value, 0)
  }

  const savings = Math.max(originalsTotal - optimizedTotal, 0)

  console.log('\nResumo:')
  console.log(`- Arquivos processados: ${results.length}`)
  console.log(`- Tamanho original total: ${formatKiB(originalsTotal)}`)
  console.log(`- Estimativa otimizada (melhor formato por largura): ${formatKiB(optimizedTotal)}`)
  console.log(`- Economia estimada: ${formatKiB(savings)}\n`)
}

async function main() {
  await Promise.all([ensureDir(SRC_DIR), ensureDir(OUTPUT_DIR), ensureDir(BACKUP_DIR)])
  const files = await getImageFiles()
  if (!files.length) {
    console.log('Nenhuma imagem encontrada em public/assets/images-src/.')
    return
  }

  const processed = []
  for (const file of files) {
    const srcPath = path.join(SRC_DIR, file)
    await copyBackup(srcPath, file)
    const result = await generateOutputs(file)
    processed.push(result)
    console.log(`✅ ${file} → ${WIDTHS.length * Object.keys(FORMATS).length} variações geradas.`)
  }

  await summarize(processed)
}

main().catch((error) => {
  console.error('Erro ao otimizar imagens:', error)
  process.exit(1)
})