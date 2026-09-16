import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imgDir = path.join(__dirname, 'public', 'img');

async function optimizeImages() {
  const files = fs.readdirSync(imgDir);
  const imageFiles = files.filter(file => file.match(/\.(jpg|jpeg|png)$/i));
  
  console.log(`Found ${imageFiles.length} images to process.`);

  for (const file of imageFiles) {
    const inputPath = path.join(imgDir, file);
    const parsed = path.parse(file);
    const outputPath = path.join(imgDir, `${parsed.name}.webp`);

    console.log(`Processing ${file}...`);
    try {
      await sharp(inputPath)
        .resize({ width: 1920, withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(outputPath);
      console.log(`  -> Optimized to ${parsed.name}.webp`);
    } catch (err) {
      console.error(`  Error processing ${file}:`, err);
    }
  }
  console.log('All images optimized!');
}

optimizeImages();
