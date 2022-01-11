const colors = require("tailwindcss/colors");
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/**/*.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    fontFamily: {
      Karla: ["Karla", "sans-serif"],
      mono: ["Source Sans Pro", ...defaultTheme.fontFamily.mono],
    },
    letterSpacing: {
      tighter: "-.1em",
    },
    fontSize: {
      xm: ".55rem",
      sm: ".85rem",
      lg: "1rem",
      xl: "1.25rem",
      "2x1": "1.5rem",
      "3x1": "1.75rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
      "8xl": "6rem",
      "9xl": "7rem",
    },
    fill: (theme) => ({
      ...theme("colors"),
      DEFAULT: theme("colors.gray.300", "currentColor"),
      OrangeColor: "#F37821",
      PurpleColor: "#912C78",
    }),
    borderColor: (theme) => ({
      ...theme("colors"),
      DEFAULT: theme("colors.gray.300", "currentColor"),
      PrimaryColor: "#172b4d",
      PrimaryColorLight: "#273e65",
      PrimaryColorSelected: "#e2f1ff",
      SecondaryColor: "#ffffff",
      SecondaryColorDark: "#f2f6ff",
      ThreeColor: "#ff7e71",
      FourthColor: "#5887ff",
      FourthColorLight: "#f2f6ff",
      FifthColor: "#ffb648",
      FifthColorLight: "#fffcf9",
      SixthColor: "#2fb478",
      SixthColorLight: "#f9fdfb",
      SevenththColor: "#ff796b",
      SeventhColorLight: "#fff2f1",
      DeliveryColor: "#5887ff",
      DangerColor: "#ff4a57",
      WarningColor: "#ffb648",
      PaidColor: "#00a35a",
      ExpiredColor: "#d0b366",
      SelectedColor: "#ff9221",
      AvailableColor: "#ffcb2f",
      DefectiveColor: "#ff1eb0",
      HoldColor: "#000000",
      CancelledColor: "#ff4a57",
      OutColor: "#8b95a6",
      OutColorLight: "#f9fbfd",
      TitleColor: "#172b4d",
      LabelColor: "#9a9a9a",
      PlaceHolderColor: "#d6d7e3",
      InputColor: "#eff0f6",
      BorderColor: "#eff0f6",
      BorderColorSecondary: "#e0e1ea",
      BorderColorOpacity: "#eff0f62d",
      ButtonColor: "#f4f7fc",
      MarketColor: "#2b3551",
      greenColor: "#00a35a",
      blueishColor: "#5887ff",
      redColor: "#ff4a57",
      greyColor: "#9a9a9a",
      purpleColor: "#30295a",
      greenColorLight: "#00a35a10",
      blueishColorLight: "#5887ff10",
      redColorLight: "#ff4a5710",
      greyColorLight: "#9a9a9a10",
      redActionsColor: "#ff4a57",
      redActionsColorLight: "#fcf5f5",
      blueBorder: "#008EFF",
      limeColor: "#4D7C0F",
      lightLimeColor: "#4CAF50",
      // DarkModeColors patterns
      DarkModelight: "#27272C",
      DarkModeDark: "#1E1C22",
      //combinable color
      OrangeColor: "#F37821",
      PurpleColor: "#912C78",
    }),
    textColor: (theme) => ({
      ...theme("colors"),
      PrimaryColor: "#172b4d",
      PrimaryColorLight: "#273e65",
      PrimaryColorSelected: "#e2f1ff",
      SecondaryColor: "#ffffff",
      SecondaryColorDark: "#f2f6ff",
      ThreeColor: "#ff7e71",
      FourthColor: "#5887ff",
      FourthColorLight: "#f2f6ff",
      FifthColor: "#ffb648",
      FifthColorLight: "#fffcf9",
      SixthColor: "#2fb478",
      SixthColorLight: "#f9fdfb",
      SevenththColor: "#ff796b",
      SeventhColorLight: "#fff2f1",
      DeliveryColor: "#5887ff",
      DangerColor: "#ff4a57",
      WarningColor: "#ffb648",
      PaidColor: "#00a35a",
      ExpiredColor: "#d0b366",
      SelectedColor: "#ff9221",
      AvailableColor: "#ffcb2f",
      DefectiveColor: "#ff1eb0",
      HoldColor: "#000000",
      CancelledColor: "#ff4a57",
      OutColor: "#8b95a6",
      OutColorLight: "#f9fbfd",
      TitleColor: "#172b4d",
      LabelColor: "#9a9a9a",
      PlaceHolderColor: "#d6d7e3",
      InputColor: "#eff0f6",
      BorderColor: "#eff0f6",
      BorderColorSecondary: "#e0e1ea",
      BorderColorOpacity: "#eff0f62d",
      ButtonColor: "#f4f7fc",
      MarketColor: "#2b3551",
      greenColor: "#00a35a",
      blueishColor: "#5887ff",
      redColor: "#ff4a57",
      greyColor: "#9a9a9a",
      purpleColor: "#30295a",
      greenColorLight: "#00a35a10",
      blueishColorLight: "#5887ff10",
      redColorLight: "#ff4a5710",
      greyColorLight: "#9a9a9a10",
      redActionsColor: "#ff4a57",
      redActionsColorLight: "#fcf5f5",
      blueBorder: "#008EFF",
      limeColor: "#4D7C0F",
      lightLimeColor: "#4CAF50",
      // DarkModeColors patterns
      DarkModelight: "#27272C",
      DarkModeDark: "#1E1C22",
      //combinable color
      OrangeColor: "#F37821",
      PurpleColor: "#912C78",
    }),
    backgroundColor: (theme) => ({
      ...theme("colors"),
      PrimaryColor: "#172b4d",
      PrimaryColorLight: "#273e65",
      PrimaryColorSelected: "#e2f1ff",
      SecondaryColor: "#ffffff",
      SecondaryColorDark: "#f2f6ff",
      ThreeColor: "#ff7e71",
      FourthColor: "#5887ff",
      FourthColorLight: "#f2f6ff",
      FifthColor: "#ffb648",
      FifthColorLight: "#fffcf9",
      SixthColor: "#2fb478",
      SixthColorLight: "#f9fdfb",
      SevenththColor: "#ff796b",
      SeventhColorLight: "#fff2f1",
      DeliveryColor: "#5887ff",
      DangerColor: "#ff4a57",
      WarningColor: "#ffb648",
      PaidColor: "#00a35a",
      ExpiredColor: "#d0b366",
      SelectedColor: "#ff9221",
      AvailableColor: "#ffcb2f",
      DefectiveColor: "#ff1eb0",
      HoldColor: "#000000",
      CancelledColor: "#ff4a57",
      OutColor: "#8b95a6",
      OutColorLight: "#f9fbfd",
      TitleColor: "#172b4d",
      LabelColor: "#9a9a9a",
      PlaceHolderColor: "#d6d7e3",
      InputColor: "#eff0f6",
      BorderColor: "#eff0f6",
      BorderColorSecondary: "#e0e1ea",
      BorderColorOpacity: "#eff0f62d",
      ButtonColor: "#f4f7fc",
      MarketColor: "#2b3551",
      greenColor: "#00a35a",
      blueishColor: "#5887ff",
      redColor: "#ff4a57",
      greyColor: "#9a9a9a",
      purpleColor: "#30295a",
      greenColorLight: "#00a35a10",
      blueishColorLight: "#5887ff10",
      redColorLight: "#ff4a5710",
      greyColorLight: "#9a9a9a10",
      redActionsColor: "#ff4a57",
      redActionsColorLight: "#fcf5f5",
      blueBorder: "#008EFF",
      lightLimeColor: "#4CAF50",
      // DarkModeColors patterns
      DarkModelight: "#27272C",
      DarkModeDark: "#1E1C22",
      //combinable color
      OrangeColor: "#F37821",
      PurpleColor: "#912C78",
    }),
    extend: {
      animation: {
        wiggle: "rubberBand 1s both ",
      },
      keyframes: {
        rubberBand: {
          "0%": {
            transform: "scale3d(1, 1, 1)",
          },
          "30%": {
            transform: "scale3d(1.25, 0.75, 1)",
          },
          "40%": {
            transform: "scale3d(0.75, 1.25, 1)",
          },
          "50%": {
            transform: "scale3d(1.15, 0.85, 1)",
          },
          "65%": {
            transform: "scale3d(.95, 1.05, 1)",
          },
          "75%": {
            transform: "scale3d(1.05, .95, 1)",
          },
          "100%": {
            transform: "scale3d(1, 1, 1)",
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
