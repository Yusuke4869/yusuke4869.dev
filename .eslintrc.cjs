module.exports = {
  env: {
    browser: true,
    node: true,
  },
  plugins: ["@typescript-eslint"],
  extends: ["plugin:astro/recommended", "plugin:@typescript-eslint/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
  },
  overrides: [
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
    },
  ],
  parserOptions: {
    sourceType: "module",
    ecmaVersion: "latest",
  },
};
