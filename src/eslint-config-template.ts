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
// @ts-expect-error -- No .d.ts file available, pending https://github.com/nickdeis/eslint-plugin-notice/issues/32.
import notice from "eslint-plugin-notice";
import tseslint, { type ConfigArray } from "typescript-eslint";

export const esLintConfigLegReq: ConfigArray = tseslint.config(
    {
        ignores: ["eslint.config.js", "dist"]
    },
    js.configs.recommended,
    ...tseslint.configs.strictTypeChecked,
    stylistic.configs["recommended-flat"],
    jsdoc.configs["flat/recommended-typescript"],
    esLintConfigLove,
    {
        languageOptions: {
            parserOptions: {
                projectService: true
            }
        },

        linterOptions: {
            reportUnusedDisableDirectives: "error"
        },

        plugins: {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment -- No .d.ts file available, pending https://github.com/nickdeis/eslint-plugin-notice/issues/32.
            notice
        },

        rules: {
            "complexity": "off",
            "max-depth": ["error", 10],
            "max-lines": "off",
            "no-dupe-class-members": "off",
            "no-redeclare": "off",
            "no-unused-vars": "off",

            "@typescript-eslint/class-literal-property-style": "off",
            "@typescript-eslint/class-methods-use-this": "off",
            "@typescript-eslint/init-declarations": "off",
            "@typescript-eslint/max-params": "off",
            "@typescript-eslint/no-empty-function": "off",
            "@typescript-eslint/no-empty-object-type": "off",
            "@typescript-eslint/no-magic-numbers": "off",
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
            "@typescript-eslint/unbound-method": ["error", {
                ignoreStatic: true
            }],

            "@stylistic/array-bracket-newline": ["error", "consistent"],
            "@stylistic/brace-style": ["error", "1tbs", {
                allowSingleLine: false
            }],
            "@stylistic/comma-dangle": ["error", "never"],
            "@stylistic/indent": ["error", 4],
            "@stylistic/member-delimiter-style": ["error", {
                multiline: {
                    delimiter: "semi",
                    requireLast: true
                },
                singleline: {
                    delimiter: "semi"
                }
            }],
            "@stylistic/no-trailing-spaces": ["off"],
            "@stylistic/operator-linebreak": ["error", "after"],
            "@stylistic/quotes": ["error", "double"],
            "@stylistic/semi": ["error", "always"],
            "@stylistic/object-curly-newline": ["error", {
                ObjectExpression: {
                    multiline: true,
                    minProperties: 1
                },
                ObjectPattern: {
                    multiline: true,
                    minProperties: 1
                }
            }],
            "@stylistic/object-property-newline": "error",

            "jsdoc/require-description": ["warn", {
                contexts: ["ClassDeclaration", "ClassProperty", "FunctionDeclaration", "MethodDefinition", "TSEnumDeclaration", "TSInterfaceDeclaration", "TSModuleDeclaration", "TSTypeAliasDeclaration"]
            }],
            "jsdoc/require-jsdoc": ["warn", {
                contexts: ["ClassDeclaration", "ClassProperty", "FunctionDeclaration", "MethodDefinition", "TSEnumDeclaration", "TSInterfaceDeclaration", "TSModuleDeclaration", "TSTypeAliasDeclaration"]
            }],
            "jsdoc/require-returns": ["warn", {
                checkGetters: false
            }],
            "jsdoc/tag-lines": ["warn", "any", {
                count: 1,
                startLines: 1
            }],

            "notice/notice": ["error", {
                templateFile: "node_modules/@legreq/tsdev/src/copyright.ts"
            }]
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
            "@typescript-eslint/no-unsafe-type-assertion": "off"
        }
    }
);
