import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./style.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

export function SliderComponent({images}) {

    return (
        <>
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
            >


                {
                    images.map(image=>{
                        return(
                            <SwiperSlide>
                                <img src={image}/>
                            </SwiperSlide>
                        )
                    })
                }

            </Swiper>
        </>
    );
}
