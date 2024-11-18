/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js}'],
    theme: {
        extend: {
            screens: {
                mobile: '375px',
                desktop: '1440px',
            },
            fontFamily: {
                figtree: ['Figtree-VariableFont_wght', 'sans-serif'],
                'figtree-italic': ['Figtree-Italic-VariableFont_wght', 'sans-serif'],
                'figtree-extrabold': ['Figtree-ExtraBold', 'sans-serif'],
                'figtree-semibold': ['Figtree-SemiBold', 'sans-serif'],
            },
            colors: {
                'custom-yellow': '#F4D04E',
                'custom-gray-950': '#111111',
                'custom-gray-500': '#6B6B6B',
            },
            fontSize: {
                preset1: [
                    '24px',
                    {
                        lineHeight: '150%',
                        letterSpacing: '0px',
                    },
                ],
                preset2: [
                    '16px',
                    {
                        lineHeight: '150%',
                        letterSpacing: '0px',
                    },
                ],
                preset3: [
                    '14px',
                    {
                        lineHeight: '150%',
                        letterSpacing: '0px',
                    },
                ],
            },
            borderRadius: {
                'custom-lg': '10px',
                'custom-xl': '20px',
            },
            boxShadow: {
                custom: '8px 8px 0px 1px rgba(0, 0, 0, 1)',
                'hover-custom': '16px 16px 0px 2px rgba(0, 0, 0, 1)',
            },
        },
    },
    variants: {
        extend: {
            textColor: ['hover', 'focus', 'active', 'error'],
        },
    },
    plugins: [],
};
