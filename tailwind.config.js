import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            colors: {
              base: {
                100: '#ffffff',
                150: '#fcfcfc',
                200: '#fafafa',
                300: '#f6f6f6',
                350: '#e3e3e3',
                400: '#e0e0e0',
                450: '#d4d4d4',
                500: '#bdbdbd',
                600: '#ababab',
                700: '#292929',
                800: '#1e1e1e',
                900: '#121212'
              }
            },
            fontFamily: {
              roboto: ['Roboto', 'sans-serif'],
              robotoMono: ['Roboto Mono', 'monospace']
            },
        },
    },

    plugins: [
        forms,
        require('daisyui'),
    ],
};
