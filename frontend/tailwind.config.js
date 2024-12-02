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
                7.5: '1.875rem', //30px
                14.5: '3.75rem', //60px
                50: '3.125rem', //50px
                140: '8.75rem', //140px
                75: '18.75rem', //300px
                24.5: '6.25rem', //392px
                500: '31.25rem', //500px
            },
            fontSize: {
                '3.5xl': '2.0625rem',
                '2.5xl': '1.59375rem',
            },
            width: {
                32.5: '8.5rem',
                40.5: '10.625rem',
                53: '13.75rem',
                250: '15.625rem',
                340: '21.25rem',
                520: '32.5rem',
                390: '24.375rem',
            },
            width: {
                32.5: '8.5rem',
                38: '9.375rem',
                40.5: '10.625rem',
                53: '13.75rem',
                520: '32.5rem',
                390: '24.375rem',
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
