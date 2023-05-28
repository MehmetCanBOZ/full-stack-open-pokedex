module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react", "jest"],
  rules: {
    indent: 0,
    "linebreak-style": 0,
    quotes: 0,
    semi: 0,
    eqeqeq: 0,
    "no-trailing-spaces": 0,
    "object-curly-spacing": 0,
    "arrow-spacing": 0,
    "no-console": 0,
    "react/prop-types": 0,
    "no-console": 0,
    "no-undef": 0,
  },
};
