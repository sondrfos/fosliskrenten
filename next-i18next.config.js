const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'nb-NO',
    locales: ['nb-NO'],
    localeDetection: false,
    localePath: path.resolve('./public/locales'),
  },
};
