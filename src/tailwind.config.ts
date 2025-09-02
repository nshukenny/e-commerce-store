import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // THE DARK/WHITE COLOR
        primary: {
          light: "#ffffff",      // white
          DEFAULT: "#525f7f",    // main dark color (for text)
          contrast: "#32325d",   // dark color (for headings)
          dark: "#212229",       // dark color (for sidebar background)
        },
        // THE GRAY COLOR
        secondary: "#8898aa",
        // BACKGROUND COLOR (for body)
        background: "#f8f9fe",
        // ORANGE COLOR
        warning: "#ffd600",
        // BLUE COLOR
        info: "#11cdef",
        // RED COLOR
        error: "#f5365c",
        // GREEN COLOR
        success: "#2dce89",
        // BORDER COLOR
        divider: "rgba(0, 0, 0, 0.1)",
      },
      fontFamily: {
        sans: ['"Roboto"', '"Helvetica"', '"Arial"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
