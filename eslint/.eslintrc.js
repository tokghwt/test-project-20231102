module.exports = {
  // https://eslint.org/docs/latest/use/configure/
  root: true,
  env: {
    node: true,
    es2022: true,
  },
  extends: [
    "eslint:recommended",
  ],
  parserOptions: {
    sourceType: "module",
  },
};
