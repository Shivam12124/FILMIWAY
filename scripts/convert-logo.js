const sharp = require('sharp');
const path = require('path');

const svgPath = path.join(__dirname, '..', 'public', 'filmiway-logo.svg');
const webpPath = path.join(__dirname, '..', 'public', 'filmiway-logo.webp');
const pngPath = path.join(__dirname, '..', 'public', 'filmiway-logo.png');

async function convertLogo() {
  try {
    console.log('⏳ Converting logo SVG to WebP & PNG...');
    
    // ⚡ WebP Conversion (256x256 for 2x retina sharpness, transparent background)
    await sharp(svgPath)
      .resize(256, 256)
      .webp({ quality: 90 })
      .toFile(webpPath);
    console.log('✅ WebP Logo Created!');

    // ⚡ PNG Conversion as a fallback
    await sharp(svgPath)
      .resize(256, 256)
      .png({ compressionLevel: 9 })
      .toFile(pngPath);
    console.log('✅ PNG Logo Created!');
    
    const fs = require('fs');
    console.log('📦 Output WebP Size:', (fs.statSync(webpPath).size / 1024).toFixed(2), 'KB');
    console.log('📦 Output PNG Size:', (fs.statSync(pngPath).size / 1024).toFixed(2), 'KB');

  } catch (err) {
    console.error('❌ Error during logo conversion:', err);
  }
}

convertLogo();
