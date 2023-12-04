import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Image from 'next/image';
import { Pagination } from "swiper/modules";

const Swipper = ({hotel}) => {
  return (
    <Swiper
    slidesPerView={2}
    spaceBetween={3}
    pagination={{
      clickable: true,
    }}
    modules={[Pagination]}
    className="mySwiper"
  >
    {hotel
      ? hotel.gallery?.map((gal, i) => {
          return (
            <SwiperSlide key={i} className=" w-4/5 bg-slate-700">
              <div className="flex justify-center max-h-fit" key={i}>
                <Image height={800} width={800} src={gal} alt="hotel-slide-img" property='hotel-image' />
              </div>
            </SwiperSlide>
          );
        })
      : ""}
  </Swiper>
  )
}

export default Swipper




