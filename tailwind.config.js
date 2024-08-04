/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        "gray-300": "#d1d5db",
        "gray-500": "#6b7280",
        "blue-50": "#eff6ff",
        "blue-500": "#3b82f6",
        "blue-600": "#2563eb",
        "gray-700": "#374151",
        "gray-200": "#e5e7eb",
        "gray-50": "#f9fafb",
        "green-100": "#d1fae5",
        "green-300": "#6ee7b7",
        "green-800": "#065f46",
        "gray-100": "#f3f4f6",
        "gray-800": "#1f2937",
        "gray-900": "#111827",
        "red-400": "#f87171",
        "cyan-400": "#22d3ee",
        "purple-400": "#a78bfa",
        "red-100": "#fee2e2",
        "red-300": "#fca5a5",
        "red-800": "#991b1b",
        "pink-100": "#fce7f3",
        "pink-300": "#f9a8d4",
        "pink-800": "#9d174d",
        "yellow-100": "#fef3c7",
        "yellow-300": "#fcd34d",
        "yellow-800": "#92400e",
        "blue-100": "#dbeafe",
        "blue-300": "#93c5fd",
        "blue-800": "#1e40af",
        chocolate: "#db551b",
        coral: "#f56e36",
      },
      spacing: {},
      fontFamily: {
        "text-sm-leading-5-font-medium": "Inter",
        "body-caption-12": "'Inter V'",
      },
    },
    fontSize: {
      sm: "14px",
      xs: "12px",
      "5xl": "24px",
      base: "16px",
      "3xl": "22px",
      lg: "18px",
      inherit: "inherit",
    },
    screens: {
      mq1100: {
        raw: "screen and (max-width: 1100px)",
      },
      mq1025: {
        raw: "screen and (max-width: 1025px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  plugins: [],
}

