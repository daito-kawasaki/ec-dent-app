'use client'

import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

export default function InformationList({ Item }: { Item: number }) {
    const [newsContents, setNewsContents] = useState<Array<number>>([])
    useEffect(() => {}, [])

    return (
        <div>
            <div>Information</div>
            {/* {newsContents.forEach((value, key) => {
                return <div></div>
            })} */}
        </div>
    )
}
