import React from 'react'
import { Metadata } from 'next'
import { notoSansJp } from '@/lib/fonts'
import '@/app/global.css'

export const metadata: Metadata = {
    title: {
        template: '%s | EC-DENT',
        default: 'EC-DENT',
    },
    description: '学生が輝ける総合ECサイト EC-DENT',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="ja">
            <body
                className={`${notoSansJp.className} text-base back-groud-image-web page-setting`}>
                {children}
            </body>
        </html>
    )
}
