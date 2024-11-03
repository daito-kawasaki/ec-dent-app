const plugin = require('tailwindcss/plugin')

module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {},
    plugins: [
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
