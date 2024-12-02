const withStyledComponents = require('styled-components-nextjs')

module.exports = withStyledComponents({
    reactStrictMode: true,
    // 他の設定
})
// next.config.js
const nextConfig = {
    reactStrictMode: true,
    compiler: {
        styledComponents: true,
    },
}

module.exports = nextConfig
