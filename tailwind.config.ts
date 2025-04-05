import type { Config } from "tailwindcss";
import { withUt } from "uploadthing/tw";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "4rem",
        "2xl": "6rem",
      },
      center: true,
    },
    extend: {
      fontFamily: {
        Dana: "Dana",
        DanaDemiBold: "Dana DemiBold",
        DanaMedium: "Dana Medium",
        MorabbaLight: "Morabba Light",
        MorabbaMedium: "Morabba Medium",
        MorabbaBold: "Morabba Bold",
      },
      colors: {
        green: {
          9500: "#6eaa00",
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    function ({ addVariant }: any) {
      addVariant("child", "&>*");
      addVariant("child-hover", "&>*:hover");
    },
  ],
} satisfies Config;
