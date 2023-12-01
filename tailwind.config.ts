import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-100": "var(--primary-100)",
        "primary-200": "var(--primary-200)",
        "primary-300": "var(--primary-300)",
        "primary-400": "var(--primary-400)",
        "primary-500": "var(--primary-500)",
        "primary-600": "var(--primary-600)",
        "primary-700": "var(--primary-700)",
        "primary-800": "var(--primary-800)",
        "primary-900": "var(--primary-900)",
        "secondary-100": "var(--secondary-100)",
        "secondary-200": "var(--secondary-200)",
        "secondary-300": "var(--secondary-300)",
        "secondary-400": "var(--secondary-400)",
        "secondary-500": "var(--secondary-500)",
        "secondary-600": "var(--secondary-600)",
        "secondary-700": "var(--secondary-700)",
        "secondary-800": "var(--secondary-800)",
        "secondary-900": "var(--secondary-900)",
        "accent-100": "var(--accent-100)",
        "accent-200": "var(--accent-200)",
        "accent-300": "var(--accent-300)",
        "accent-400": "var(--accent-400)",
        "accent-500": "var(--accent-500)",
        "accent-600": "var(--accent-600)",
        "accent-700": "var(--accent-700)",
        "accent-800": "var(--accent-800)",
        "accent-900": "var(--accent-900)",
        "background-100": "var(--background-100)",
        "background-200": "var(--background-200)",
        "background-300": "var(--background-300)",
        "background-400": "var(--background-400)",
        "background-500": "var(--background-500)",
        "background-600": "var(--background-600)",
        "background-700": "var(--background-700)",
        "background-800": "var(--background-800)",
        "background-900": "var(--background-900)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
}
export default config
