import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { useHttp } from "../../../hooks/useHttp";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import './slider.scss'

import { Autoplay, Navigation } from "swiper";

export default function App() {
    const [bannersData, setBannersData] = useState([]);
    const {request} = useHttp();

    const onBannersListLoaded = async(newData) => {
        await setBannersData(newData);
    }

    useEffect(() => {
        request('https://api.papajohns.by/slider/list?lang=ru&city_id=1')
            .then(data => onBannersListLoaded(data))
            .catch(e => console.log(`error ${e}`))
    }, []);

    const renderBanners = () => {
        return bannersData !== [] ? bannersData.map(banner => {
            return <SwiperSlide key={banner.title}><img src={banner.image_full_webp} alt="" /></SwiperSlide>
        }) : null
    }

  return (
    <>
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
        className="mySwiper"
      >
        {renderBanners()}
      </Swiper>
    </>
  );
}