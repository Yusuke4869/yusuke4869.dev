/** @type {import("prettier").Config} */
export default {
  printWidth: 120,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  trailingComma: "all",
  endOfLine: "lf",
  plugins: ["@trivago/prettier-plugin-sort-imports", "prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  importOrder: ["<THIRD_PARTY_MODULES>", "^[./]"],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
