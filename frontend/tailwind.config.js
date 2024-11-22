import fluid, { extract, fluidScreens, fontSize } from 'fluid-tailwind'

const plugin = require('tailwindcss/plugin')

module.exports = {
    content: {
        files: ['./src/**/*.{js,jsx,ts,tsx}'],
        extract,
    },
    theme: {
        extend: {
            spacing: {
                75: '18.75rem',
                24.5: '6.25rem',
                500: '31.25rem',
            },
        },
        screens: {
            sp: '22.5rem',
            sm: '30rem',
            md: '48rem',
            lg: '64rem',
            xl: '85.375rem',
        },
        fontSize,
    },
    plugins: [
        fluid,
        require('tailwindcss-fluid-spacing'),
        require('@tailwindcss/forms'),
        require('tailwindcss-fluid-spacing'),
        plugin(function ({ addComponents }) {
            addComponents({
                '.img_setting': {
                    width: '100%',
                    height: 'auto',
                },
                '.absolute-center': {
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                },
                '.section_setting': {
                    padding: '2.196193265vw 7.32vw',
                },
                '.flex-col-center': {
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                },
                '.back-groud-image-web': {
                    backgroundImage:
                        'url(../../public/images/brand-page/back_img.png)',
                },
            })
        }),
    ],
}
