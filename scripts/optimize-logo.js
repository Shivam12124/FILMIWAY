const fs = require('fs');
const path = require('path');

const logoPath = path.join(__dirname, '..', 'public', 'logo.svg');
const filmiwayLogoPath = path.join(__dirname, '..', 'public', 'filmiway-logo.svg');

let svg = fs.readFileSync(logoPath, 'utf8');

// Strip out Inkscape & Sodipodi editor bloat
svg = svg.replace(/<sodipodi:namedview[\s\S]*?\/>/gi, '');
svg = svg.replace(/xmlns:inkscape="[^"]*"/gi, '');
svg = svg.replace(/xmlns:sodipodi="[^"]*"/gi, '');
svg = svg.replace(/inkscape:[a-z0-9_-]+="[^"]*"/gi, '');
svg = svg.replace(/sodipodi:[a-z0-9_-]+="[^"]*"/gi, '');
svg = svg.replace(/<defs[\s\S]*?\/>/gi, '');
svg = svg.replace(/>\s+</g, '><').trim();

fs.writeFileSync(filmiwayLogoPath, svg, 'utf8');
console.log('✅ Successfully optimized filmiway-logo.svg! New size:', svg.length, 'bytes');
