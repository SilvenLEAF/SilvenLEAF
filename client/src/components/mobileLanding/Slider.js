import '../../styles/Slider.scss';
import sliderImages from './SliderImages';


import React, { useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectCoverflow, Controller, Navigation, Pagination, Scrollbar, Autoplay }  from 'swiper';
import 'swiper/swiper.scss'
import 'swiper/components/effect-coverflow/effect-coverflow.scss'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'


SwiperCore.use([EffectCoverflow, Controller, Navigation, Pagination, Scrollbar, Autoplay]);

function Slider() {
 
  const [controlledSwiper, setControlledSwiper] = useState(null)
  return (
    <>
        <Swiper      
      controller={{ control: controlledSwiper}}
      spaceBetween={25}
      slidesPerView={3}
      loop={true}
      autoplay={{ delay: 1500, disableOnInteraction: false }}            
      
      
      onSwiper={setControlledSwiper}      
      
    >     
      {
        sliderImages.map((item, index)=>{
          return (
            <SwiperSlide key={index} className="mySwiperSlide" >
            <div className="center mySliderImageHolder">
              <a href={ item.link}>
                <img src={ item.image} alt="Slider" className="responsive-img" />
              </a>
            </div>
          </SwiperSlide>
          )
        })

      }

        
      </Swiper>
    </>
  )
}

export default Slider
