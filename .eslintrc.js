module.exports = {
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    sourceType: "module",
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    node: true
  },
  globals: {
    AE: true
  },
  plugins: [
    "import",
    "unused-imports"
  ],
  extends: [
    "plugin:vue/vue3-recommended",
    "plugin:jest/recommended",
    "prettier",
    "plugin:storybook/recommended"
  ],
  ignorePatterns: "public/**/*.d.ts",
  rules: {
    // TODO
    "vue/html-indent": "off",
    "vue/attribute-hyphenation": "off",
    "import/order": ["error", {
      "alphabetize": {
        "order": "asc",
        "caseInsensitive": true
      }
    }],
    "@typescript-eslint/no-unused-vars": "off",
    "unused-imports/no-unused-imports-ts": "error",
    "unused-imports/no-unused-vars-ts": [
      "off" // TODO: 誤検知のため一旦 off
    ]
  }
}
