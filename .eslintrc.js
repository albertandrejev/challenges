module.exports = {
  //https://codequs.com/p/rk7e07UBV/using-eslint-and-prettier-in-a-typescript-project
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2018,
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
  },
  plugins: ["@typescript-eslint", "react", "simple-import-sort"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "react-app",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
  ],
  rules: {
    "no-empty": "off",
    "no-param-reassign": "warn",
    "prefer-const": "warn",
    "sort-imports": "off",
    "spaced-comment": ["warn", "always", { line: { markers: ["/ <reference"] } }],
    "simple-import-sort/sort": "warn",
    "@typescript-eslint/explicit-function-return-type": [
      "error",
      {
        allowExpressions: true,
      },
    ],
    "@typescript-eslint/ban-ts-ignore": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unnecessary-type-assertion": "warn",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
  },
};
