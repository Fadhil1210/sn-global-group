// Lightweight internationalization store
export let currentLang = localStorage.getItem('sn_lang') || 'en';

export function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('sn_lang', lang);
  document.documentElement.lang = lang;
  
  // Dispatch a custom event to notify all components to re-render
  window.dispatchEvent(new Event('languagechange'));
}

export function toggleLang() {
  setLang(currentLang === 'en' ? 'fr' : 'en');
}

/**
 * Translates an object based on the current active language.
 * @param {Object|string} contentObj - An object with keys 'en' and 'fr', or a simple string.
 * @returns {string} The translated string.
 */
export function t(contentObj) {
  if (!contentObj) return '';
  if (typeof contentObj === 'string') return contentObj;
  return contentObj[currentLang] || contentObj['en'] || '';
}
