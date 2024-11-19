'use client'
import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const mainVisualSlides: { path: string; alt: string }[] = [
    { path: '/images/top-page/main-visual_01.png', alt: '' },
    { path: '/images/top-page/main-visual_02.png', alt: '' },
    { path: '/images/top-page/main-visual_03.png', alt: '' },
]

export default function MainVisualSlide({
    slideSize,
}: {
    slideSize: { width: number; height: number }
}) {
    return (
        <Swiper
            // centeredSlides={true}
            loop={true}
            // slidesPerView={1}
            spaceBetween={30}
            effect={'fade'}
            // navigation={true}
            // pagination={{ clickable: true }}
            autoplay={{
                delay: 4000,
                disableOnInteraction: false,
            }}
            modules={[Autoplay, EffectFade, Navigation, Pagination]}>
            {mainVisualSlides.map((slide, i) => (
                <SwiperSlide key={i}>
                    <Image
                        src={slide.path}
                        alt={slide.alt}
                        width={slideSize.width}
                        height={slideSize.height}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}
