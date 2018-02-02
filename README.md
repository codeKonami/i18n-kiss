i18n-kiss
=====

A simple Internationalization package.

```sh
npm install --save i18n-kiss
```

```js
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

const i18n = require('i18n-kiss')({
  lang: 'en',
  locales,
});

console.log(i18n('hello', new Date()));
// Hello World today it is Fri Feb 02 2018 16:44:56 GMT+0100 (CET)
console.log(i18n('howMuchLove', [20, 100]));
// Between 20 and 100
console.log(i18n('whoAmI', 'codeKonami'));
// I am codeKonami
console.log(i18n('nested.hello'));
// Nested Hello World
```
