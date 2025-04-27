import React, { useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { Autoplay, FreeMode, Navigation, Thumbs } from 'swiper/modules';

import banner_01 from "../../../assets/banner/banner_01.jpg"
import banner_02 from "../../../assets/banner/banner_02.jpg"
import banner_03 from "../../../assets/banner/banner_03.jpg"
import banner_04 from "../../../assets/banner/banner_04.jpg"
import banner_05 from "../../../assets/banner/banner_05.jpg"
import "./Banner.css";

const Banner = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <>
            <div className='rounded-lg'>
                <Swiper style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff'
                }} loop={true} spaceBetween={10} navigation={true} autoplay={{ delay: 1700, disableOnInteraction: false }} thumbs={{ swiper: thumbsSwiper }} modules={[Autoplay, FreeMode, Navigation, Thumbs]} className="mySwiper2 rounded-lg h-[200px] md:h-[275px] lg:h-[350px] mb-3">
                    <SwiperSlide className='w-full h-full'><img className='w-full h-full rounded-lg' src={banner_02} /></SwiperSlide>
                    <SwiperSlide className='w-full h-full'><img className='w-full h-full rounded-lg' src={banner_03} /></SwiperSlide>
                    <SwiperSlide className='w-full h-full'><img className='w-full h-full rounded-lg' src={banner_01} /></SwiperSlide>
                    <SwiperSlide className='w-full h-full'><img className='w-full h-full rounded-lg' src={banner_04} /></SwiperSlide>
                    <SwiperSlide className='w-full h-full'><img className='w-full h-full rounded-lg' src={banner_05} /></SwiperSlide>
                </Swiper>


                
            </div>
        </>
    );
};

export default Banner;