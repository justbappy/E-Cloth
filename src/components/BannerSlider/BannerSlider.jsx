import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Navigation } from 'swiper/modules';

const BannerSlider = () => {
    return (
    <>
      <Swiper 
      navigation={true} 
      modules={[Autoplay, Navigation]} 
      className="mySwiper"
      spaceBetween={0}
      autoplay={{
            delay: 2500,
            disableOnInteraction: false,
        }}>
        <SwiperSlide>
            <img className='w-full' src="https://serviceapi.spicezgold.com/download/1751685200593_1721277298204_banner.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className="w-full" src="https://serviceapi.spicezgold.com/download/1751685183248_NewProject(6).jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className="w-full" src="https://serviceapi.spicezgold.com/download/1751685164864_NewProject(10).jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className="w-full" src="https://serviceapi.spicezgold.com/download/1751685144346_NewProject(11).jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className="w-full" src="https://serviceapi.spicezgold.com/download/1751685130717_NewProject(8).jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className="w-full" src="https://serviceapi.spicezgold.com/download/1748955932914_NewProject(1).jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className="w-full" src="https://serviceapi.spicezgold.com/download/1748955908049_NewProject(13).jpg" alt="" />
        </SwiperSlide>
        
      </Swiper>
    </>
  );
}

export default BannerSlider;