import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: ["next/core-web-vitals", "next/typescript"],
    rules: {
  "react/no-unescaped-entities": "0",
  "@typescript-eslint/no-unused-expressions": "off",
  "@typescript-eslint/no-explicit-any": 0,

   // Disable a specific rule completely
   "no-console": "off",

   // Change a rule to a warning instead of an error
   "react/no-unescaped-entities": "warn",

   // Disable the core no-unused-vars if you're relying on the TypeScript version
   "no-unused-vars": "off",

   // Disable the TypeScript-specific no-unused-vars
   // (Commonly, you might configure it with options here instead of just 'off')
   "@typescript-eslint/no-unused-vars": "off",

   // Disable a Next.js specific rule if you don't need it
   "@next/next/no-img-element": "off",
  
    }
  })
];

export default eslintConfig;
