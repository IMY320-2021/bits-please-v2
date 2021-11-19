import React from "react";

import { Swiper, SwiperSlide } from "swiper/react/swiper-react";

import "swiper/swiper.min.css";
import "swiper/swiper-bundle.min.css";
import "swiper/modules/navigation/navigation.min.css";
import "swiper/modules/pagination/pagination.min.css";

import "./Carousel.css";

import SwiperCore, { Keyboard, Pagination, Navigation } from "swiper";
import ProjectPreviewCard from "../ProjectPreviewCard/ProjectPreviewCard";

SwiperCore.use([Keyboard, Pagination, Navigation]);

const Carousel = ({ ...props }) => {
  const data = props;
  console.log(data);

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper"
      >
        {data.data.map((project, index) => {
          return (
            <SwiperSlide key={project.id}>
              <ProjectPreviewCard data={project} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Carousel;
