/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        container: {
            center: true,
        },
        extend: {
            keyframes: {
                wiggle: {
                    '0%, 100%': { transform: 'rotate(-3deg)' },
                    '50%': { transform: 'rotate(3deg)' },
                },
                wiggleReverse: {
                    '0%, 100%': { transform: 'rotate(3deg)' },
                    '50%': { transform: 'rotate(-3deg)' },
                },
                background: {
                    '0%': {},
                    '100%': { backgroundPosition: '0% 50%', },
                    '50%': { backgroundPosition: '100% 50%' },
                },
                bob: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                bobReverse: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(10px)' },
                }
            },
            animation: {
                'bounce-slow': 'bounce 2s linear infinite',
                'wiggle': 'wiggle 1s ease-in-out infinite',
                'wiggleReverse': 'wiggleReverse 1s ease-in-out infinite',
                'wiggle-slow': 'wiggle 2s linear infinite',
                'background-fast': 'background 0.1s linear infinite',
                'bob': 'bob 2s ease-in-out infinite',
                'bob-reverse': 'bobReverse 2s ease-in-out infinite',
            },
            fontFamily: {
                sans: ["InterVariable", "Inter", ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [require("@tailwindcss/typography")],
};