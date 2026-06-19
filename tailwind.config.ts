import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "var(--color-cream)",
        mint: "var(--color-mint)",
        sage: "var(--color-sage)",
        "sage-hover": "var(--color-sage-hover)",
        tan: "var(--color-tan)",
        "deep-sage": "var(--color-deep-sage)",
        "text-primary": "var(--color-text-primary)",
        "text-secondary": "var(--color-text-secondary)",
        "text-muted": "var(--color-text-muted)",
        border: "var(--color-border)",
        "success-bg": "var(--color-success-bg)",
        "success-text": "var(--color-success-text)",
        "warning-bg": "var(--color-warning-bg)",
        "warning-text": "var(--color-warning-text)",
        "error-bg": "var(--color-error-bg)",
        "error-text": "var(--color-error-text)",
        "disabled-bg": "var(--color-disabled-bg)",
        "disabled-text": "var(--color-disabled-text)",
      },
    },
  },
  plugins: [],
};
export default config;
