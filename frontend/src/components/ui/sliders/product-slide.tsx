'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const tempText: { product: string; comment: string }[] = [
    { product: '紹介スライドA', comment: '紹介コメントA' },
    { product: '紹介スライドB', comment: '紹介コメントB' },
    { product: '紹介スライドC', comment: '紹介コメントC' },
]

export default function ProductSlide({
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
            autoHeight={true}
            modules={[Autoplay, EffectFade, Navigation, Pagination]}>
            {tempText.map((text, i) => (
                <SwiperSlide key={i}>
                    <div className="py-4">
                        <p className="bg-gray-300 py-[min(12vh,100px)] text-center">
                            {text.product}
                        </p>
                    </div>
                    <div className="py-4">
                        <p className="bg-gray-300 py-[min(2vh,40px)] text-center">
                            {text.comment}
                        </p>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}
