import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "neon-glow": {
          "0%, 100%": {
            boxShadow: "0 0 2px #34d399, 0 0 2px #34d399, 0 0 10px #34d399",
          },
          "50%": {
            boxShadow: "0 0 2px #6ee7b7, 0 0 2px #6ee7b7, 0 0 20px #6ee7b7",
          },
        },
      },
      animation: {
        "neon-glow": "neon-glow 2.5s ease-in-out infinite alternate",
      },

      // --- ADDED THIS SECTION ---
      boxShadow: {
        "neon-outer": "0 0 20px theme(colors.green.500/0.5)",
        "neon-inner": "inset 0 0 15px theme(colors.green.500/0.4)",
      },
      backgroundImage: {
        "radial-glow":
          "radial-gradient(circle at center, theme(colors.green.800/0.3) 0%, transparent 80%)",
      },
      // --- END OF NEW SECTION ---
    },
  },
  plugins: [
    // This plugin should be installed from your shadcn setup
    require("tailwindcss-animate"),
  ],
};
export default config;
