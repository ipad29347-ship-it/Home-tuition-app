const fs = require('fs');
const sharp = require('sharp');

async function fixImage() {
  try {
    const inputBuffer = fs.readFileSync('public/icons/logo.png');
    await sharp(inputBuffer)
      .png()
      .toFile('public/icons/logo_fixed.png');
    console.log('Image fixed successfully');
  } catch (error) {
    console.error('Error fixing image:', error);
  }
}

fixImage();
