module.exports = {
  "extends": "airbnb-base",
  "plugins": [
    "import"
  ],
  "rules": {
    "semi": "off",
    "comma-dangle": "off",
    "curly": "off",
    "no-plusplus": "off",
    "global-require": "off",
    "import/no-dynamic-require": "off",
    "import/prefer-default-export": "off",
    "arrow-body-style": "off",
    "no-path-concat": ["warn"],
    "eqeqeq": ["warn"],
    "eol-last": ["warn"],
    "no-empty": ["warn"],
    "no-unused-vars": ["warn"],
    "no-return-assign": ["warn"],
    "no-return-await": ["warn"],
    "quotes": ["error", "single"],
    "indent": ["error", 2],
    "camelcase": ["error"],
    "no-await-in-loop": ["error"],
    "space-before-function-paren": ["error", "always"]
  }
}