import globals from "globals";
import react from "eslint-plugin-react";
import eslint from "@eslint/js";
import stylistic from "@stylistic/eslint-plugin";
import tseslint from "typescript-eslint";
import jsxA11y from "eslint-plugin-jsx-a11y";
import eslintPluginAstro from "eslint-plugin-astro";
import json from "@eslint/json";
import markdown from "@eslint/markdown";

export default tseslint.config(
    {
        name: "eslint/recommended",
        ...eslint.configs.recommended,
    },
    ...tseslint.configs.strict,
    {
        name: "typescript-eslint/custom",
        files: ["**/*.{js,mjs,ts,tsx,}"],
        languageOptions: {
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
            globals: {
                ...globals.browser,
            },
        },
        rules: {
            "@typescript-eslint/no-explicit-any": "warn",
            "@typescript-eslint/no-unused-vars": "warn",
            "@typescript-eslint/ban-ts-comment": "off",
            "@typescript-eslint/triple-slash-reference": "off",
        },
    },
    ...eslintPluginAstro.configs.recommended,
    {
        rules: {
            "astro/semi": [
                "error",
                "always",
                {
                    omitLastInOneLineBlock: true,
                },
            ],
        },
    },
    {
        name: "eslint-plugin-react/recommended",
        ...react.configs.flat.recommended,
        rules: {
            "react/react-in-jsx-scope": "off",
        },
    },
    {
        name: "stylistic/custom",
        ...stylistic.configs.customize({
            indent: 4,
            quotes: "double",
            semi: true,
            jsx: true,
            arrowParens: true,
            commaDangle: "always-multiline",
            blockSpacing: true,
        }),
    },
    {
        ...jsxA11y.flatConfigs.recommended,
    },
    {
        name: "json/recommended",
        files: ["**/*.json"],
        ...json.configs.recommended,
        language: "json/json",
    },
    ...markdown.configs.recommended,
);
