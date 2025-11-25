#!/usr/bin/env node
import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';

const SRC = path.resolve('public/assets/images-src');
const BACKUP = path.resolve('public/assets/images-src-originals');
const OUT = path.resolve('public/assets/images');
const SIZES = [320, 720, 1280];

async function ensureDir(dir){
  await fs.mkdir(dir, { recursive: true });
}

async function processFile(file){
  const ext = path.extname(file).toLowerCase();
  const name = path.basename(file, ext);
  const infile = path.join(SRC, file);

  // backup original
  await fs.copyFile(infile, path.join(BACKUP, file));

  const image = sharp(infile).rotate(); // treat EXIF

  for (const w of SIZES){
    // avif
    await image.clone().resize({ width: w }).avif({ quality: 60 }).toFile(path.join(OUT, `${name}-${w}.avif`));
    // webp
    await image.clone().resize({ width: w }).webp({ quality: 70 }).toFile(path.join(OUT, `${name}-${w}.webp`));
    // jpg
    await image.clone().resize({ width: w }).jpeg({ quality: 75 }).toFile(path.join(OUT, `${name}-${w}.jpg`));
  }
}

async function main(){
  await ensureDir(SRC);
  await ensureDir(BACKUP);
  await ensureDir(OUT);

  const files = await fs.readdir(SRC).catch(()=>[]);
  if (!files.length){
    console.log('No files found in', SRC);
    process.exit(0);
  }

  let before = 0, after = 0;
  for (const f of files){
    const stat = await fs.stat(path.join(SRC, f));
    before += stat.size;
    await processFile(f);
    // sum generated outputs
    for (const w of SIZES){
      for (const ext of ['.avif','.webp','.jpg']){
        const outFile = path.join(OUT, `${path.basename(f, path.extname(f))}-${w}${ext}`);
        const s = await fs.stat(outFile);
        after += s.size;
      }
    }
  }

  console.log(`Processed ${files.length} files`);
  console.log(`Size before: ${(before/1024).toFixed(1)} KiB`);
  console.log(`Size after (generated variants): ${(after/1024).toFixed(1)} KiB`);
  console.log(`Saved approximately: ${((before - after)/1024).toFixed(1)} KiB (note: after counts all variants)`);
}

main().catch(err=>{
  console.error(err);
  process.exit(1);
});
