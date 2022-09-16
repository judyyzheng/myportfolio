import React from "react";

import './Spotlight.css';
import Portrait from './assets/Portrait.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';

import Haven from "./spotlight/Haven";
import Finfo from "./spotlight/Finfo";

import 'swiper/css/autoplay';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Spotlight() {
    return (
        <>
          <div className="spotlight-section">
            <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={1}
            navigation
            autoplay={{ delay: 10000 }}
            pagination={{ clickable: true }}
            >
            <SwiperSlide>
              <Finfo />
            </SwiperSlide>
            <SwiperSlide>
              <Haven />
            </SwiperSlide>
            <SwiperSlide>
              <Finfo />
            </SwiperSlide>
            </Swiper>
          </div>
        </>
      )
}

export default Spotlight;
