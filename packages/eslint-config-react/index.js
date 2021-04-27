"use strict";

module.exports = {
  parser: "babel-eslint",
  extends: [
    "plugin:react/recommended",
    "plugin:react-hooks/recommended"
  ],

  env: {
    node: true
  },

  overrides: [
    {
      "files": [ "*.jsx", "*.js" ]
    }
  ],

  rules: {

    // JSX
    "react/jsx-boolean-value": "warn",
    "react/jsx-child-element-spacing": "warn",
    "react/jsx-closing-bracket-location": [ "warn", "line-aligned" ],
    "react/jsx-closing-tag-location": "off",
    "react/jsx-curly-newline": "warn",
    "react/jsx-curly-spacing": [ "warn", { when: "always", children: true } ],
    "react/jsx-equals-spacing": [ "warn", "never" ],
    "react/jsx-filename-extension": "warn",
    "react/jsx-first-prop-new-line": [ "warn", "multiline" ],
    "react/jsx-fragments": [ "warn", "syntax" ],
    "react/jsx-handler-names": "warn",
    "react/jsx-indent": [ "warn", 2 ],
    "react/jsx-indent-props": [ "warn", 2 ],
    "react/jsx-key": "warn",
    "react/jsx-newline": "off",
    "react/jsx-no-bind": [ "warn", { ignoreRefs: true, allowArrowFunctions: true } ],
    "react/jsx-no-comment-textnodes": "warn",
    "react/jsx-no-constructed-context-values": "warn",
    "react/jsx-no-duplicate-props": "warn",
    "react/jsx-no-script-url": "error",
    "react/jsx-no-target-blank": "warn",
    "react/jsx-no-undef": [ "warn", { allowGlobals: true } ],
    "react/jsx-no-useless-fragment": "warn",
    "react/jsx-props-no-multi-spaces": "warn",
    "react/jsx-tag-spacing": [
      "warn", {
        "closingSlash": "never",
        "beforeSelfClosing": "always",
        "afterOpening": "never",
        "beforeClosing": "never"
      }
    ],
    "react/jsx-uses-vars": "warn",

    // React
    "react/button-has-type": "error",
    "react/default-props-match-prop-types": "warn",
    "react/destructuring-assignment": [ "warn", "always", { "ignoreClassFields": true } ],
    "react/forbid-dom-props": "error",
    "react/forbid-foreign-prop-types": "warn",
    "react/no-access-state-in-setstate": "warn",
    "react/no-array-index-key": "error",
    "react/no-deprecated": "warn",
    "react/no-did-mount-set-state": "error",
    "react/no-did-update-set-state": "error",
    "react/no-direct-mutation-state": "error",
    "react/no-find-dom-node": "error",
    "react/no-is-mounted": "error",
    "react/no-redundant-should-component-update": "error",
    "react/no-render-return-value": "error",
    "react/no-string-refs": "error",
    "react/no-this-in-sfc": "error",
    "react/no-typos": "warn",
    "react/no-unknown-property": "error",
    "react/no-unsafe": "error",
    "react/no-unused-prop-types": "warn",
    "react/no-unused-state": "warn",
    "react/no-will-update-set-state": "error",
    "react/prefer-es6-class": "error",
    "react/prop-types": "warn",
    "react/require-render-return": "error",
    "react/self-closing-comp": "warn",
    "react/sort-comp": "warn",
    "react/style-prop-object": "error",
    "react/void-dom-elements-no-children": "error"
  }
};
