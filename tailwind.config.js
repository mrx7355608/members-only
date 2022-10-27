/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./views/*.html", "./views/partials/*.html"],
    theme: {
        extend: {
            fontFamily: {
                inter: ["Inter", "sans-serif"],
                roboto: ["Roboto", "sans-serif"],
            },
        },
    },
    plugins: [],
};
