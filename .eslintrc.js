module.exports = {
  plugins: ["@typescript-eslint", "eslint-comments", "promise"],
  extends: [
    "airbnb-typescript/base",
    "plugin:@typescript-eslint/recommended",
    "plugin:eslint-comments/recommended",
    "plugin:promise/recommended",
    "import",
    "prettier",
  ],
  parserOptions: {
    project: "./tsconfig.json",
  },
  env: {
    node: true,
    browser: true,
  },
  "settings": {
    "import/resolver": {
      "typescript": {}
    }
  },
  rules: {
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "ts": "never"
      }
    ],
    "import/no-default-export": "warn",
    "import/no-extraneous-dependencies": "error",
    "no-prototype-builtins": "off",
    "import/prefer-default-export": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-use-before-define": [
      "error",
      { functions: false, classes: true, variables: true, typedefs: true },
    ],
  },
}
