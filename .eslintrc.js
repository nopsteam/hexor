module.exports = {
  extends: [
    'react-app',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    "indent": ["error", 2],
    "@typescript-eslint/indent": ["error", 2],
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    },
    useJSXTextNode: true,
    project: "./tsconfig.json",
    extraFileExtensions: [".vue"]
  },
  plugins: [
    "@typescript-eslint",
    "react"
  ],
};
