import tseslint from "typescript-eslint";
import { esLintConfigLegReq } from "./dist/index.js";

export default tseslint.config(
    ...esLintConfigLegReq,
    {
        rules: {
            "notice/notice": ["error", {
                templateFile: "src/copyright.ts"
            }]
        }
    },
    {
        files: [
            "src/copyright.ts"
        ],
        rules: {
            "notice/notice": "off"
        }
    }
);
