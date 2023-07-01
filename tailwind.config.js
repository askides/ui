/** @type {import('tailwindcss').Config} */

import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/_comp/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [forms, typography],
};
