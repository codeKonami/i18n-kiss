const vsprintf = require('sprintf-js').vsprintf;

module.exports = (opt = {}) => (key, args = []) => {
  const lang = opt.lang || 'en';
  const locales = opt.locales || {};

  return vsprintf(key.split('.').reduce((prev, curr) => {
    return prev ? prev[curr] : '';
  }, locales[lang]), args);
};
