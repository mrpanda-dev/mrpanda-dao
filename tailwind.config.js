/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        siyuan: ["思源黑体"],
        pingfang: ["PingFang SC"],
      },
    },
  },
  plugins: [],
};
