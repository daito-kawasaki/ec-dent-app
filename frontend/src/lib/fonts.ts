import {
    DM_Serif_Display,
    Inter,
    Noto_Sans_Bengali,
    Noto_Sans_JP,
    Playfair_Display,
    Poppins,
} from 'next/font/google'

export const dmSerifDisplay = DM_Serif_Display({
    weight: '400',
    subsets: ['latin'],
})

export const inter = Inter({
    subsets: ['latin'],
})

export const notoSansBengali = Noto_Sans_Bengali({
    subsets: ['latin'],
})

/** 日本語用フォント */
export const notoSansJp = Noto_Sans_JP({
    subsets: ['latin'],
})

export const playfairDisplay = Playfair_Display({
    subsets: ['latin'],
})

export const poppins = Poppins({
    weight: '400',
    subsets: ['latin'],
})
