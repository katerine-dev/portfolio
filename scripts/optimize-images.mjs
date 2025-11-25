#!/usr/bin/env node
import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const SRC_DIR = path.resolve(__dirname, '../public/assets/images-src')
const BACKUP_DIR = path.resolve(__dirname, '../public/assets/images-src-originals')
const OUT_DIR = path.resolve(__dirname, '../public/assets/images')
const SIZES = [320, 720, 1280]
const QUALITY = {
  avif: 60,
  webp: 70,
  jpeg: 75
}

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true })
}

async function getFiles() {
  try {
    const entries = await fs.readdir(SRC_DIR, { withFileTypes: true })
    return entries.filter((e) => e.isFile()).map((e) => e.name)
  } catch (err) {
    if (err.code === 'ENOENT') return []
    throw err
  }
}

async function backupOriginal(file) {
  const srcPath = path.join(SRC_DIR, file)
  const backupPath = path.join(BACKUP_DIR, file)
  await fs.copyFile(srcPath, backupPath)
}

async function generateVariants(file) {
  const ext = path.extname(file)
  const name = path.basename(file, ext)
  const inputPath = path.join(SRC_DIR, file)

  const image = sharp(inputPath).rotate()

  for (const width of SIZES) {
    await image
      .clone()
      .resize({ width, withoutEnlargement: true })
      .avif({ quality: QUALITY.avif })
      .toFile(path.join(OUT_DIR, `${name}-${width}.avif`))

    await image
      .clone()
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: QUALITY.webp })
      .toFile(path.join(OUT_DIR, `${name}-${width}.webp`))

    await image
      .clone()
      .resize({ width, withoutEnlargement: true })
      .jpeg({ quality: QUALITY.jpeg })
      .toFile(path.join(OUT_DIR, `${name}-${width}.jpg`))
  }
}

async function summarize(files) {
  let originals = 0
  let outputs = 0

  for (const file of files) {
    const originalStat = await fs.stat(path.join(SRC_DIR, file))
    originals += originalStat.size

    for (const width of SIZES) {
      for (const ext of ['avif', 'webp', 'jpg']) {
        const outFile = path.join(OUT_DIR, `${path.basename(file, path.extname(file))}-${width}.${ext}`)
        const outStat = await fs.stat(outFile)
        outputs += outStat.size
      }
    }
  }

  const kb = (n) => (n / 1024).toFixed(1)
  const saving = originals - outputs

  console.log(`Processed ${files.length} file(s).`)
  console.log(`Originals total: ${kb(originals)} KiB`)
  console.log(`Generated variants total: ${kb(outputs)} KiB`)
  console.log(`Approx. delta (original vs generated set): ${kb(saving)} KiB`)
}

async function main() {
  await Promise.all([ensureDir(SRC_DIR), ensureDir(BACKUP_DIR), ensureDir(OUT_DIR)])

  const files = await getFiles()
  if (!files.length) {
    console.log(`No source images found in ${SRC_DIR}. Add files and re-run.`)
    return
  }

  for (const file of files) {
    await backupOriginal(file)
    await generateVariants(file)
  }

  await summarize(files)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})