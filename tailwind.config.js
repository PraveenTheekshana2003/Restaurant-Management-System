/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            colors: {
                brand: {
                    red: '#DC2626',
                    'red-dark': '#991B1B',
                    orange: '#F97316',
                    'orange-light': '#FB923C',
                },
            },
        },
    },
    plugins: [],
}
