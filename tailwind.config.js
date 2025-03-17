/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      customGray: '#e7ecef',
      // Basic Colors
      white: "#ffffff",
      black: "#000000",

      //green
      "green-700": "#15803d",
      "green-100": "#dcfce7",
      "green-600": "#16a34a",
      "green-500": "#22c55e",

      // Blues
      blue: "#0075FF",
      "blue-100": "#dbeafe",
      blue100: "#93C5FD",
      "blue-200": "#bfdbfe",
      "blue-300": "#93c5fd",
      "blue-400": "#60a5fa",
      "blue-500": "#0075FF", // Duplicated - Remove one if necessary
      "blue-600": "#2563eb",
      "blue-700": "#1d4ed8",
      lightblue: "#DAEBFF",
      babyblue: "#E2F3F9",
      bluegray: "#7D82A1",
      bluegrey: "#7C8F9E",
      midblue: "#00276F",
      bluebg: "rgba(47, 184, 227, 0.2)",

      // Navy and Dark Blues
      navyblue: "#002834",
      darkblue: "#000321",
      midnightblue: "#183B56",

      // Greys
      "gray-900": "#111827",
      "gray-700": "#374151",
      "gray-100": "#f3f4f6",
      "gray-300": "#d1d5db",
      "gray-400": "#9ca3af",
      "gray-600": "#4b5563",
      grey500: "#ECECEC",
      darkgray: "#90A3B4",
      lightgrey: "#AEC7E4",

      // Reds
      "red-600": "#dc2626",
      "red-500": "#ef4444",
      "red-300": "#f87171",
      "red-100": "#fee2e2",
      "red-200": "#fecaca",
      "red-400": "#f87171",
      "red-700": "#b91c1c",
      "red-800": "#991b1b",
      "red-900": "#7f1d1d",
      // Purples
      "purple-200": "#e9d5ff",

      // Additional Colors
      beach: "#8EA9C1",
      offwhite: "rgba(255, 255, 255, 0.75)",
      circlebg: "rgba(77, 213, 143, 0.25)",
      bordertop: "rgba(196, 196, 196, 0.5)",
      border: "rgba(128, 135, 137, 0.35)",
    },

    fontSize: {
      xs: ["0.75rem", { lineHeight: "1rem" }],
      sm: ["0.875rem", { lineHeight: "1.25rem" }],
      base: ["1rem", { lineHeight: "1.5rem" }],
      lg: ["1.125rem", { lineHeight: "1.75rem" }],
      xl: ["1.25rem", { lineHeight: "1.75rem" }],
      "2xl": ["1.5rem", { lineHeight: "2rem" }],
      "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
      "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
      "5xl": ["3rem", { lineHeight: "1" }],
      "6xl": ["3.75rem", { lineHeight: "1" }],
      "7xl": ["4.5rem", { lineHeight: "1" }],
      "8xl": ["6rem", { lineHeight: "1" }],
      "9xl": ["8rem", { lineHeight: "1" }],
      "65xl": ["65px", { lineHeight: "1" }],
      "80xl": ["80px", { lineHeight: "6rem" }],
    },
    extend: {},
  },
  plugins: [],
};
