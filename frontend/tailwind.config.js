import fluid, { extract, screens, fontSize } from 'fluid-tailwind'

const plugin = require('tailwindcss/plugin')

module.exports = {
    content: {
        files: ['./src/**/*.{js,jsx,ts,tsx}'],
        extract,
    },
    safelist: [
        { pattern: /^border-/ },
        { pattern: /^bg-/ },
        { pattern: /^text-/ },
    ],
    theme: {
        screens,
        screens: {
            sp: '360px',
            md: '768px',
            lg: '1024px',
            xl: '1366px',
        },
        fontSize,
    },
    plugins: [
        fluid,
        require('@tailwindcss/forms'),
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
