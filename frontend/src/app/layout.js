import { Nunito } from 'next/font/google'
import './global.css'

const nunitoFont = Nunito({
    subsets: ['latin'],
    display: 'swap',
})

const RootLayout = ({ children }) => {
    return (
        <html lang="en" className={nunitoFont.className}>
            <body className="antialiased back-groud-image-web">{children}</body>
        </html>
    )
}

export const metadata = {
    title: 'Laravel',
}

export default RootLayout
