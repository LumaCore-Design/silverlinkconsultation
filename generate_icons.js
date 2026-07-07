const fs = require('fs');
const { execSync } = require('child_process');

try {
  require.resolve('sharp');
} catch (e) {
  console.log("Installing sharp...");
  execSync('npm install sharp --no-save', { stdio: 'inherit' });
}

const sharp = require('sharp');

const svgData = fs.readFileSync('public/images/logo.svg', 'utf8');

async function generate() {
  // Apple Touch Icon (180x180, white logo on slate-900 background)
  const appleSvg = svgData.replace('<svg ', '<svg width="180" height="180" ').replace(/fill="#ffffff"/g, 'fill="#ffffff"');
  await sharp(Buffer.from(appleSvg))
    .resize(180, 180, { fit: 'contain', background: { r: 15, g: 23, b: 42, alpha: 1 } }) // bg-slate-900 is #0f172a
    .flatten({ background: { r: 15, g: 23, b: 42 } })
    .png()
    .toFile('public/apple-touch-icon.png');
    
  // Android 192 (transparent background, white logo)
  await sharp(Buffer.from(svgData))
    .resize(192, 192, { fit: 'contain' })
    .png()
    .toFile('public/android-chrome-192x192.png');
    
  // Android 512 (transparent background, white logo)
  await sharp(Buffer.from(svgData))
    .resize(512, 512, { fit: 'contain' })
    .png()
    .toFile('public/android-chrome-512x512.png');
    
  // Favicon 32x32 (transparent background, slate-900 logo for light mode fallback)
  const darkSvg = svgData.replace(/fill="#ffffff"/g, 'fill="#0f172a"');
  await sharp(Buffer.from(darkSvg))
    .resize(32, 32, { fit: 'contain' })
    .png()
    .toFile('public/favicon-32x32.png');
    
  // Favicon 16x16
  await sharp(Buffer.from(darkSvg))
    .resize(16, 16, { fit: 'contain' })
    .png()
    .toFile('public/favicon-16x16.png');
    
  console.log("All PNG icons generated!");
}

generate().catch(console.error);
