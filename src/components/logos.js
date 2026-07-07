/**
 * Vector SVG Logos for SN Global Group, SN Global Travel, and SN Global Insurance.
 * Supports different color schemes: 'dark' (navy blue text), 'light' (white text), and 'gold' (entirely gold).
 */

const COLORS = {
  navy: '#0D1B2A',
  gold: '#D4AF37',
  white: '#F5F7FA',
  goldDark: '#B8860B'
};

/**
 * Returns the SN letters markup for reuse
 */
function getSNLetters(textColor, goldColor, scale = 1, xOffset = 0, yOffset = 0) {
  // We use standard Times New Roman / Georgia style serif letters for the SN monogram
  return `
    <text x="${165 + xOffset}" y="${95 + yOffset}" font-family="Georgia, 'Times New Roman', serif" font-size="75" font-weight="normal" fill="${textColor}" letter-spacing="-3">S</text>
    <text x="${200 + xOffset}" y="${105 + yOffset}" font-family="Georgia, 'Times New Roman', serif" font-size="75" font-weight="normal" fill="${textColor}">N</text>
  `;
}

export function getHoldingLogo(scheme = 'dark', width = '100%', height = 'auto') {
  const textColor = scheme === 'light' ? COLORS.white : COLORS.navy;
  const goldColor = COLORS.gold;
  const subtextColor = scheme === 'light' ? 'rgba(245, 247, 250, 0.7)' : 'rgba(13, 27, 42, 0.8)';
  
  return `
    <svg viewBox="0 0 400 170" width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%;">
      <!-- Serif Monogram SN -->
      ${getSNLetters(textColor, goldColor, 1, 0, -5)}
      
      <!-- Top Arc above SN -->
      <path d="M 180 35 C 220 20, 255 45, 260 70" fill="none" stroke="${goldColor}" stroke-width="2.5" stroke-linecap="round" />
      
      <!-- Logo Text -->
      <text x="200" y="125" font-family="'Poppins', sans-serif" font-size="16" font-weight="600" fill="${textColor}" letter-spacing="4" text-anchor="middle">SN GLOBAL GROUP</text>
      
      <!-- Divider lines & LLC -->
      <line x1="80" y1="138" x2="175" y2="138" stroke="${goldColor}" stroke-width="1" />
      <text x="200" y="142" font-family="'Poppins', sans-serif" font-size="11" font-weight="400" fill="${goldColor}" letter-spacing="3" text-anchor="middle">LLC</text>
      <line x1="225" y1="138" x2="320" y2="138" stroke="${goldColor}" stroke-width="1" />
      
      <!-- Slogan -->
      <text x="200" y="160" font-family="'Montserrat', sans-serif" font-size="8.5" font-weight="500" fill="${subtextColor}" letter-spacing="2.5" text-anchor="middle">YOUR WORLD, SECURED & EXPLORED.</text>
    </svg>
  `;
}

export function getTravelLogo(scheme = 'dark', width = '100%', height = 'auto') {
  const textColor = scheme === 'light' ? COLORS.white : COLORS.navy;
  const goldColor = COLORS.gold;
  const subtextColor = scheme === 'light' ? 'rgba(245, 247, 250, 0.7)' : 'rgba(13, 27, 42, 0.8)';
  
  return `
    <svg viewBox="0 0 400 170" width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%;">
      <!-- Serif Monogram SN -->
      ${getSNLetters(textColor, goldColor, 1, -10, -5)}
      
      <!-- Airplane path curving from bottom-left around SN to the right -->
      <path d="M 160 102 C 170 120, 210 128, 252 108" fill="none" stroke="${goldColor}" stroke-width="2" stroke-dasharray="1 0" />
      
      <!-- Airplane Icon at the end of path (rotated) -->
      <g transform="translate(254, 107) rotate(22)">
        <path d="M 0,0 L -8,-2 L -10,-8 L -8,-8 L -5,-3 L -1,-4 L -2,-9 L -0.5,-9 L 1,-4 C 3,-3.5 5,-2 6,0 C 5,2 3,3.5 1,4 L -0.5,9 L -2,9 L -1,4 L -5,3 L -8,8 L -10,8 L -8,2 Z" fill="${goldColor}" />
      </g>
      
      <!-- Logo Text -->
      <text x="200" y="125" font-family="'Poppins', sans-serif" font-size="16" font-weight="600" fill="${textColor}" letter-spacing="4" text-anchor="middle">
        SN GLOBAL <tspan fill="${goldColor}">TRAVEL</tspan>
      </text>
      
      <!-- Slogan -->
      <text x="200" y="150" font-family="'Montserrat', sans-serif" font-size="9" font-weight="500" fill="${subtextColor}" letter-spacing="2.5" text-anchor="middle">EXPLORER LE MONDE EN TOUTE LIBERTÉ.</text>
    </svg>
  `;
}

export function getInsuranceLogo(scheme = 'dark', width = '100%', height = 'auto') {
  const textColor = scheme === 'light' ? COLORS.white : COLORS.navy;
  const goldColor = COLORS.gold;
  const subtextColor = scheme === 'light' ? 'rgba(245, 247, 250, 0.7)' : 'rgba(13, 27, 42, 0.8)';
  
  return `
    <svg viewBox="0 0 400 170" width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%;">
      <!-- Serif Monogram SN -->
      ${getSNLetters(textColor, goldColor, 1, -20, -5)}
      
      <!-- Shield Icon to the right of SN -->
      <g transform="translate(245, 52) scale(1.1)">
        <!-- Outer shield -->
        <path d="M 5,2 C 12,2 18,0 18,0 C 18,0 24,2 31,2 C 31,10 31,18 18,28 C 5,18 5,10 5,2 Z" fill="none" stroke="${goldColor}" stroke-width="2" stroke-linejoin="round" />
        <!-- Small inner check or star for prestige -->
        <path d="M 13,13 L 16,16 L 23,10" fill="none" stroke="${goldColor}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      </g>
      
      <!-- Logo Text -->
      <text x="200" y="125" font-family="'Poppins', sans-serif" font-size="16" font-weight="600" fill="${textColor}" letter-spacing="4" text-anchor="middle">
        SN GLOBAL <tspan fill="${goldColor}">INSURANCE</tspan>
      </text>
      
      <!-- Slogan -->
      <text x="200" y="150" font-family="'Montserrat', sans-serif" font-size="9" font-weight="500" fill="${subtextColor}" letter-spacing="2.5" text-anchor="middle">PROTÉGER CE QUI COMPTE VRAIMENT.</text>
    </svg>
  `;
}
