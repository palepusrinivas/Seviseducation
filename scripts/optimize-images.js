/**
 * Image Optimization Script
 * Automatically optimizes all images in src/assest folder
 * 
 * Usage: node scripts/optimize-images.js
 */

const fs = require('fs');
const path = require('path');

console.log('🖼️  Image Optimization Script for Sevis Global Education\n');
console.log('========================================================\n');

const assetsDir = path.join(__dirname, '..', 'src', 'assest');
const outputDir = path.join(__dirname, '..', 'src', 'assest', 'optimized');

console.log('📁 Assets Directory:', assetsDir);
console.log('📁 Output Directory:', outputDir);
console.log('\n');

// Check if sharp is installed
try {
  const sharp = require('sharp');
  console.log('✅ Sharp library found!\n');
  
  // Create output directory if it doesn't exist
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
    console.log('✅ Created output directory\n');
  }

  // Read all files in assets directory
  fs.readdir(assetsDir, (err, files) => {
    if (err) {
      console.error('❌ Error reading directory:', err);
      return;
    }

    console.log(`📊 Found ${files.length} files in assets directory\n`);
    console.log('Starting optimization...\n');

    let processed = 0;
    let skipped = 0;
    let errors = 0;

    files.forEach((file, index) => {
      const ext = path.extname(file).toLowerCase();
      const inputPath = path.join(assetsDir, file);
      
      // Skip if not an image or already in optimized folder
      if (!['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) {
        return;
      }

      // Skip if it's a directory
      if (fs.statSync(inputPath).isDirectory()) {
        return;
      }

      const outputFilename = path.basename(file, ext) + ext;
      const outputPath = path.join(outputDir, outputFilename);
      const webpOutputPath = path.join(outputDir, path.basename(file, ext) + '.webp');

      console.log(`\n[${index + 1}/${files.length}] Processing: ${file}`);

      // Get original file size
      const originalSize = fs.statSync(inputPath).size;
      const originalSizeKB = (originalSize / 1024).toFixed(2);
      console.log(`   Original size: ${originalSizeKB} KB`);

      // Optimize based on file type
      if (['.jpg', '.jpeg'].includes(ext)) {
        // Optimize JPEG
        sharp(inputPath)
          .jpeg({ quality: 80, progressive: true, mozjpeg: true })
          .toFile(outputPath)
          .then(info => {
            const newSizeKB = (info.size / 1024).toFixed(2);
            const saved = ((1 - info.size / originalSize) * 100).toFixed(1);
            console.log(`   ✅ Optimized: ${newSizeKB} KB (${saved}% smaller)`);
            processed++;
          })
          .catch(err => {
            console.error(`   ❌ Error:`, err.message);
            errors++;
          });

        // Also create WebP version
        sharp(inputPath)
          .webp({ quality: 80 })
          .toFile(webpOutputPath)
          .then(info => {
            const newSizeKB = (info.size / 1024).toFixed(2);
            console.log(`   ✅ WebP created: ${newSizeKB} KB`);
          })
          .catch(err => {
            console.error(`   ❌ WebP error:`, err.message);
          });

      } else if (ext === '.png') {
        // Optimize PNG
        sharp(inputPath)
          .png({ quality: 80, compressionLevel: 9, progressive: true })
          .toFile(outputPath)
          .then(info => {
            const newSizeKB = (info.size / 1024).toFixed(2);
            const saved = ((1 - info.size / originalSize) * 100).toFixed(1);
            console.log(`   ✅ Optimized: ${newSizeKB} KB (${saved}% smaller)`);
            processed++;
          })
          .catch(err => {
            console.error(`   ❌ Error:`, err.message);
            errors++;
          });

        // Also create WebP version
        sharp(inputPath)
          .webp({ quality: 80 })
          .toFile(webpOutputPath)
          .then(info => {
            const newSizeKB = (info.size / 1024).toFixed(2);
            console.log(`   ✅ WebP created: ${newSizeKB} KB`);
          })
          .catch(err => {
            console.error(`   ❌ WebP error:`, err.message);
          });
      }
    });

    setTimeout(() => {
      console.log('\n\n========================================================');
      console.log('📊 Optimization Complete!\n');
      console.log(`✅ Processed: ${processed} images`);
      console.log(`⏭️  Skipped: ${skipped} files`);
      console.log(`❌ Errors: ${errors} files`);
      console.log('\n📁 Optimized images saved to:', outputDir);
      console.log('\n💡 Next steps:');
      console.log('1. Review optimized images in src/assest/optimized/');
      console.log('2. Replace original images with optimized versions');
      console.log('3. Update import paths in your components');
      console.log('4. Test website to ensure images load correctly');
      console.log('========================================================\n');
    }, 3000);
  });

} catch (error) {
  console.error('❌ Sharp library not found!');
  console.error('\n📦 Please install Sharp first:');
  console.error('   npm install sharp\n');
  console.error('Then run this script again:\n');
  console.error('   node scripts/optimize-images.js\n');
  console.error('========================================================\n');
}

