module.exports = {
  env: {
    es6: true,
    jest: true,
    browser: true
  },
  extends: ["airbnb"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
    __DEV__: true
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["react", "jsx-a11y", "import", "import-helpers", "react-hooks"],
  rules: {
    "linebreak-style": "off",
    "quotes": "off",
    "comma-dangle": "off",
    "implicit-arrow-linebreak": "off",
    "react/no-unescaped-entities": "off",
    "react/button-has-type": "off",
    "react/jsx-no-constructed-context-values": "off",
    "jsx-a11y/label-has-associated-control": "off",
    "react/jsx-filename-extension": ["error", { extensions: [".js", ".jsx"] }],
    "import/prefer-default-export": "off",
    "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "react/jsx-one-expression-per-line": "off",
    "global-require": "off",
    "react-native/no-raw-text": "off",
    "no-param-reassign": "off",
    "no-underscore-dangle": "off",
    "react/prop-types": "off",
    "react/react-in-jsx-mode": "off",
    "object-curly-newline": "off",
    "react/jsx-curly-newline": "off",
    "react/function-component-definition": "off",
    "max-len": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "no-console": "off",
    "react/jsx-props-no-spreading": "off",
    "import-helpers/order-imports": [
      "warn",
      {
        newlinesBetween: "always",
        groups: [
          "module",
          "/^~/",
          ["parent", "sibling", "index"],
        ],
        alphabetize: { order: "asc", ignoreCase: true }
      }
    ],
  },
};
