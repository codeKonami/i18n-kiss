const locales = {
  en: {
    hello: 'Hello World today it is %s',
    howMuchLove: 'Between %s and %s',
    whoAmI: 'I am %s',
    nested: {
      hello: 'Nested Hello World',
    },
  },
  fr: {
    hello: 'Bonjour nous sommes le %s',
    howMuchLove: 'Entre %s et %s',
    whoAmI: 'Je suis %s',
    nested: {
      hello: 'Bonjour à partir d\'un sous-document',
    },
  }
};

const i18n = require('./index')({
  lang: 'en',
  locales,
});

console.log(i18n('hello', new Date()));
console.log(i18n('howMuchLove', [20, 100]));
console.log(i18n('whoAmI', 'codeKonami'));
console.log(i18n('nested.hello'));
