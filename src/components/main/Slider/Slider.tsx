import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { useHttp } from "../../../hooks/useHttp";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import './slider.scss'
// import SliderSkeleton from "../../Skeleton/SliderSkeleton";
import { Autoplay, Navigation } from "swiper";

export default function App() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [bannersData, setBannersData] = useState([]);
    const {request} = useHttp();

    useEffect(() => {
        const fetchSlides = () => {
            request('https://api.papajohns.ru/slider/list?lang=ru&city_id=1')
                 .then(data => setBannersData(data))
                 .then(setIsLoaded(Boolean(true)))
                 .catch(e => console.log(`error ${e}`)) 
        }
        bannersData.length === 0 && fetchSlides()
    }, []);

    const renderBanners = () => {
        // const banners = useMemo(() =>
        return <Swiper
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
            {bannersData.map((banner:{title:string, image_full_webp:string}) => {
                return <SwiperSlide key={banner.title}>
                    <img src={banner.image_full_webp} alt="" />
                </SwiperSlide>
            })}
        </Swiper>
    }

    if (!isLoaded || bannersData.length === 0) {
        return (
            // <SliderSkeleton/>
            <div className="svg_skeleton">
                <svg version="1.1" id="L9" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
                viewBox="0 0 100 100" enableBackground="new 0 0 0 0" >
                    <path fill="#cdcdcd" d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
                    <animateTransform 
                        attributeName="transform" 
                        attributeType="XML" 
                        type="rotate"
                        dur="1s" 
                        from="0 50 50"
                        to="360 50 50" 
                        repeatCount="indefinite" />
                    </path>
                </svg>
            </div>
            )
    }else {
        return renderBanners()
    }
}