import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { useHttp } from "../../../hooks/useHttp";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import './slider.scss'
import SliderSkeleton from "../../Skeleton/SliderSkeleton";
import { Autoplay, Navigation } from "swiper";
import { useCallback } from "react";

export default function App() {
    const [bannersData, setBannersData] = useState([]);
    const {request} = useHttp();

    useEffect(() => {
        request('https://api.papajohns.by/slider/list?lang=ru&city_id=1')
            .then(data => setBannersData(data))
            .catch(e => console.log(`error ${e}`))
    }, []);

    const renderBanners = useCallback(() => {
        return bannersData !== [] ? bannersData.map(banner => {
            return <SwiperSlide key={banner.title}><img src={banner.image_full_webp} alt="" /></SwiperSlide>
        }) : null
    }, [bannersData])

    if (bannersData.length === 0) {
        return <SliderSkeleton/>
    }else {
        return (
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                delay: 4000,
                disableOnInteraction: false,
                }}
                navigation={true}
                grabCursor={true}
                modules={[Autoplay, Navigation]}
                className="mySwiper">
                {renderBanners()}
            </Swiper>
        )
    }
}