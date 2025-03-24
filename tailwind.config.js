/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Si vous utilisez `src`
  ],

  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#000000",

      // ✅ Gris
      "gray-50": "#fafafa",
      "gray-100": "#f3f4f6",
      "gray-300": "#d1d5db",
      "gray-400": "#9ca3af",
      "gray-600": "#4b5563",
      "gray-700": "#374151",
      "gray-900": "#111827",
      "grey-500": "#ECECEC",
      lightgrey: "#AEC7E4",
      darkgray: "#90A3B4",

      // ✅ Bleu
      "blue-100": "#dbeafe",
      "blue-200": "#bfdbfe",
      "blue-300": "#93c5fd",
      "blue-400": "#60a5fa",
      "blue-500": "#0075FF",
      "blue-600": "#2563eb",
      "blue-700": "#1d4ed8",
      lightblue: "#DAEBFF",
      babyblue: "#E2F3F9",
      bluegray: "#7D82A1",
      bluegrey: "#7C8F9E",
      midblue: "#00276F",
      bluebg: "rgba(47, 184, 227, 0.2)",
      navyblue: "#002834",
      darkblue: "#000321",
      midnightblue: "#183B56",

      // ✅ Vert
      "green-100": "#dcfce7",
      "green-200": "#bbf7d0",
      "green-300": "#86efac",
      "green-400": "#4ade80",
      "green-500": "#22c55e",
      "green-600": "#16a34a",
      "green-700": "#15803d",
      "green-800": "#166534",
      "green-900": "#14532d",

      // ✅ Rouge
      "red-100": "#fee2e2",
      "red-200": "#fecaca",
      "red-300": "#f87171",
      "red-400": "#f87171",
      "red-500": "#ef4444",
      "red-600": "#dc2626",
      "red-700": "#b91c1c",
      "red-800": "#991b1b",
      "red-900": "#7f1d1d",

      // ✅ Violet
      purple: "#800080",
      "purple-50": "#fcfcff",
      "purple-100": "#faf5ff",
      "purple-200": "#e9d5ff",
      "purple-300": "#d6bcfa",
      "purple-400": "#a779e9",
      "purple-500": "#8a3ffc",
      "purple-600": "#6d28d9",

      // ✅ Jaune
      "yellow-50": "#fefce8",
      "yellow-100": "#fef9c3",
      "yellow-200": "#fef08a",
      "yellow-300": "#fde047",
      "yellow-400": "#facc15",
      "yellow-500": "#eab308",
      "yellow-600": "#ca8a04",
      "yellow-700": "#a16207",
      "yellow-800": "#854d0e",
      "yellow-900": "#713f12",

      // ✅ Rose
      "rose-50": "#fff1f2",
      "rose-100": "#ffe4e6",
      "rose-300": "#fda4af",
      "rose-400": "#fb7185",
      "rose-500": "#f43f5e",
      "rose-600": "#e11d48",
      "rose-700": "#be123c",
      "rose-800": "#9f1239",
      "rose-900": "#881337",
      "rose-1000": "#570d31",
      "rose-1100": "#4c0924",
      "rose-1200": "#2f0624",
      "rose-1300": "#1e001f",

      // ✅ Divers
      customGray: "#e7ecef",
      beach: "#8EA9C1",
      offwhite: "rgba(255, 255, 255, 0.75)",
      circlebg: "rgba(77, 213, 143, 0.25)",
      bordertop: "rgba(196, 196, 196, 0.5)",
      border: "rgba(128, 135, 137, 0.35)",
    },

    fontFamily: {
      sans: ["Inter", "Arial", "sans-serif"],
      serif: ["Merriweather", "serif"],
      mono: ["Courier New", "monospace"],
      poppins: ["Poppins", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
    },

    fontWeight: {
      thin: "100",
      extralight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      black: "900",
    },

    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      },
    },
  },

  plugins: [require("tailwindcss-animate")],
};
