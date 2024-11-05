'use Client'

import { IMGPATH_BRAND, IMGPATH_HEADER } from '@/lib/common'
import { notoSansBengali } from '@/lib/fonts'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
    const items_center = 'text-xs bold flex items-center'
    return (
        <header>
            <nav className="flex justify-between px-[7.32vw]">
                <Link
                    href="/news"
                    className={`${items_center} ${notoSansBengali.className}`}>
                    NEWS
                </Link>

                <Link
                    href="/store"
                    className={`${items_center} ${notoSansBengali.className}`}>
                    STORE
                </Link>

                <Link href="/">
                    <Image
                        src={`${IMGPATH_HEADER}ec-dent-logo.svg`}
                        alt=""
                        width={500}
                        height={500}
                    />
                </Link>

                <Link
                    href="/brand"
                    className={`${items_center} ${notoSansBengali.className}`}>
                    BRAND
                </Link>

                <Link
                    href="/login"
                    className={`${items_center} ${notoSansBengali.className}`}>
                    LOGIN
                </Link>
            </nav>
        </header>
    )
}
