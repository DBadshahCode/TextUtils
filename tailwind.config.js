/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        base: "var(--bg-base)",
        surface: "var(--bg-surface)",
        elevated: "var(--bg-elevated)",
        input: "var(--bg-input)",
        border: "var(--border)",
        "border-focus": "var(--border-focus)",
        accent: "var(--accent)",
        "accent-2": "var(--accent-2)",
        primary: "var(--text-primary)",
        secondary: "var(--text-secondary)",
        muted: "var(--text-muted)",
        success: "var(--success)",
        warning: "var(--warning)",
        danger: "var(--danger)",
      },
      fontFamily: {
        sans: ["Outfit", "sans-serif"],
        mono: ["DM Mono", "monospace"],
      },
      boxShadow: {
        glow: "0 0 16px var(--accent-glow)",
        "glow-ring": "0 0 0 3px var(--accent-glow)",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0, transform: "translateY(6px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in": "fadeIn 0.3s ease forwards",
      },
    },
  },
  plugins: [],
};
