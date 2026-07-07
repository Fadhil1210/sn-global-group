/**
 * Utility for escaping special HTML characters to prevent XSS (Cross-Site Scripting).
 * @param {string} str - The string to escape.
 * @returns {string} The escaped safe string.
 */
export function escapeHTML(str) {
  if (typeof str !== 'string') return str;
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
