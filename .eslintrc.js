module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        "alloy",
        "alloy/react",
        "alloy/typescript",
        "plugin:@typescript-eslint/recommended",
        "plugin:storybook/recommended"
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: "module",
    },
    plugins: ["react", "@typescript-eslint", "prettier"],
    rules: {
        "arrow-body-style": 0,
        "jsx-a11y/label-has-for": 0,
        "max-lines-per-function": [
            2,
            { max: 320, skipComments: true, skipBlankLines: true },
        ],
        "no-confusing-arrow": 0,
        "no-nested-ternary": 0,
        "no-console": 2,
        "no-param-reassign": [
            2,
            { props: true, ignorePropertyModificationsFor: ["draft"] },
        ],
        "react/no-this-in-sfc": 0,
        "prettier/prettier": "error"
    },
};
