module.exports = {
  node: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class",
  variants: {
    extend: {
      display: ["dark"],
      textColor: ["dark"],
      cursor: ["disabled"],
      opacity: ["disabled"],
      borderColor: ["dark", "active", "focus"],
    }
  },
  theme: {
    extend: {
      animation: ["motion-safe"],
      inset: {
        "1/5": "45%"
      },
      screens: {
        ml: "800px",
        mxl: "880px",
      },
      maxHeight: {
        "100": "90%",
      },
      spacing: {
       2.5: "0.57rem",
       avatar: "0.09rem",
        "4.5" : "1.125rem",
        26: "6.5rem",
        30: "7.5rem"
      },
      fontSize: {
        "xxs": ".65rem",
      },
      colors: {
        dark: {
          100: "#3A3B3C",
          200: "#242526",
          300: "#18191A",
          400: "#323436",
        },
        green: {
          1100: "#42b72a",
          1200: "#3da927"
        },
        pastel: {
          100: "#CAEDF9"
        },
        whiteWhite: "#FFF",
        thunder: {
          100: "#2D88FF",
          200: "#1877F2"
        },
        smoke: {
          100: "#b8b9b9",
          200: "#f0f2f5"
        }
      },
      maxWidth: {
        "xxs": "15rem",
        "12/12": "98%"
      }
    },
    borderWidth: {
      DEFAULT: "1px",
      "0": "0",
      "2": "1.5px",
      "3": "3px",
      "4": "4px",
     "6": "6px",
     "8": "8px",
    },
    backgroundColor: theme => ({
      ...theme("colors"),
      "ghost-white": "#F7F8FA",
      "white-white": "#FFFFFF"
     }),
     textColor: theme => ({
      ...theme("colors"),
      "ghost-white": "#F7F8FA"
     })
  },
  plugins: [
    require("tailwind-scrollbar-hide")
  ],
}