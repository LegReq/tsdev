/*!
 * Copyright © 2025 Legendary Requirements
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import js from "@eslint/js";
import stylistic from "@stylistic/eslint-plugin";
import esLintConfigLove from "eslint-config-love";
import jsdoc from "eslint-plugin-jsdoc";
import notice from "eslint-plugin-notice";
import tseslint, { type ConfigArray } from "typescript-eslint";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export const esLintConfigLegReq: ConfigArray = tseslint.config(
    {
        ignores: ["dist"]
    },
    js.configs.recommended,
    ...tseslint.configs.strictTypeChecked,
    stylistic.configs.recommended,
    jsdoc.configs["flat/recommended-typescript"],
    esLintConfigLove,
    {
        languageOptions: {
            parserOptions: {
                projectService: true
            },
            globals: globals.browser
        },

        linterOptions: {
            reportUnusedDisableDirectives: "error"
        },

        plugins: {
            "react-hooks": reactHooks,
            "react-refresh": reactRefresh,
            notice
        },

        rules: {
            ...reactHooks.configs.recommended.rules,

            "complexity": "off",
            "max-depth": ["error", 10],
            "max-lines": "off",

            // Handled by @typescript-eslint/no-unused-vars.
            "no-unused-vars": "off",

            "@typescript-eslint/class-literal-property-style": "off",
            "@typescript-eslint/class-methods-use-this": "off",
            "@typescript-eslint/init-declarations": "off",
            "@typescript-eslint/max-params": "off",
            "@typescript-eslint/no-empty-function": "off",
            "@typescript-eslint/no-empty-object-type": "off",
            "@typescript-eslint/no-magic-numbers": [
                "error",
                {
                    ignore: [0, 1, -1, 2, 4],
                    ignoreReadonlyClassProperties: true
                }
            ],
            "@typescript-eslint/no-unnecessary-type-parameters": "off",
            "@typescript-eslint/no-unused-vars": [
                "error",
                {
                    argsIgnorePattern: "^_",
                    varsIgnorePattern: "^_",
                    caughtErrorsIgnorePattern: "^_"
                }
            ],
            "@typescript-eslint/prefer-destructuring": "off",
            "@typescript-eslint/unbound-method": [
                "error",
                {
                    ignoreStatic: true
                }
            ],

            "react-refresh/only-export-components": [
                "warn",
                {
                    allowConstantExport: true
                }
            ],

            "@stylistic/array-bracket-newline": ["error", "consistent"],
            "@stylistic/brace-style": [
                "error",
                "1tbs",
                {
                    allowSingleLine: false
                }
            ],
            "@stylistic/comma-dangle": ["error", "never"],
            "@stylistic/indent": ["error", 4],
            "@stylistic/jsx-closing-bracket-location": "off",
            "@stylistic/jsx-closing-tag-location": "off",
            "@stylistic/jsx-curly-spacing": [
                "error",
                {
                    when: "never",
                    children: true
                }
            ],
            "@stylistic/jsx-indent-props": ["error", 4],
            "@stylistic/jsx-wrap-multilines": "off",
            "@stylistic/member-delimiter-style": [
                "error",
                {
                    multiline: {
                        delimiter: "semi",
                        requireLast: true
                    },
                    singleline: {
                        delimiter: "semi"
                    }
                }
            ],
            "@stylistic/no-trailing-spaces": ["off"],
            "@stylistic/operator-linebreak": ["error", "after"],
            "@stylistic/quotes": ["error", "double"],
            "@stylistic/semi": ["error", "always"],
            "@stylistic/object-curly-newline": [
                "error",
                {
                    ObjectExpression: {
                        multiline: true,
                        minProperties: 1
                    },
                    ObjectPattern: {
                        multiline: true,
                        minProperties: 1
                    }
                }
            ],
            "@stylistic/object-property-newline": "error",

            "jsdoc/require-description": [
                "warn",
                {
                    contexts: [
                        "ClassDeclaration",
                        "ClassProperty",
                        "FunctionDeclaration",
                        "MethodDefinition",
                        "TSEnumDeclaration",
                        "TSInterfaceDeclaration",
                        "TSModuleDeclaration",
                        "TSTypeAliasDeclaration"
                    ]
                }
            ],
            "jsdoc/require-jsdoc": [
                "warn",
                {
                    contexts: [
                        "ClassDeclaration",
                        "ClassProperty",
                        "FunctionDeclaration",
                        "MethodDefinition",
                        "TSEnumDeclaration",
                        "TSInterfaceDeclaration",
                        "TSModuleDeclaration",
                        "TSTypeAliasDeclaration"
                    ]
                }
            ],
            "jsdoc/require-returns": [
                "warn",
                {
                    checkGetters: false
                }
            ],
            "jsdoc/tag-lines": [
                "warn",
                "any",
                {
                    count: 1,
                    startLines: 1
                }
            ]
        }
    },
    {
        files: [
            "test/**/*"
        ],
        rules: {
            "max-nested-callbacks": "off",
            "jsdoc/require-jsdoc": "off",
            "@typescript-eslint/dot-notation": "off",
            "@typescript-eslint/no-magic-numbers": "off",
            "@typescript-eslint/no-unsafe-type-assertion": "off"
        }
    }
);
