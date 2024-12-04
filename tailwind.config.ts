import type { Config } from "tailwindcss";
import { content, plugin } from "flowbite-react/tailwind";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    content(),
  ],
  theme: {
    extend: {
      fontFamily: {
        parkinsans: ["parkinsans", "serif"],
        "parkinsans-normal": ["parkinsans-regular", "serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [plugin()],
} satisfies Config;
