/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        studio: {
          bg: "#080c14",
          surface: "#0e1422",
          elevated: "#141c2e",
          card: "rgba(14, 20, 34, 0.8)",
          border: "rgba(255, 255, 255, 0.08)",
          borderHover: "rgba(99, 102, 241, 0.35)",
        },
        slate: {
          850: "#101726",
          950: "#080c14",
        }
      },
      fontFamily: {
        sans: ["'Plus Jakarta Sans'", "system-ui", "-apple-system", "sans-serif"],
        display: ["'Space Grotesk'", "'Plus Jakarta Sans'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      boxShadow: {
        studio: "0 10px 40px -10px rgba(0, 0, 0, 0.6)",
        glowIndigo: "0 0 50px -10px rgba(99, 102, 241, 0.25)",
        glowEmerald: "0 0 50px -10px rgba(16, 185, 129, 0.2)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        }
      },
      animation: {
        marquee: "marquee 32s linear infinite",
        float: "float 6s ease-in-out infinite",
      }
    }
  },
  plugins: []
};
