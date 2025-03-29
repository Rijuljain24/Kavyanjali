import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; 
import "swiper/css"; 
import "swiper/css/navigation"; 
import "swiper/css/pagination"; 
import "./PhotoScroll.css"; 

import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";

const photos = [
  { src: img1, alt: "Photo 1" },
  { src: img2, alt: "Photo 2" },
  { src: img3, alt: "Photo 3" },
  { src: img4, alt: "Photo 4" },
];

const PhotoScroll = () => {
  return (
    <div className="photo-scroll-container">
      {/* Black Gradient & Text */}
      <div className="overlay-gradient">
        <h2>Kavyanjali Literature Society</h2>
        <p>प्रज्ञानं ब्रह्म - प्रकट ज्ञान ही ब्रह्म है।</p>
        <button className="about-btn">About Us</button>
      </div>

      {/* Swiper for Image Scrolling */}
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={1} 
        loop={true} 
        autoplay={{
          delay: 2000, 
          disableOnInteraction: false, 
        }}
        className="photo-swiper"
      >
        {photos.map((photo, index) => (
          <SwiperSlide key={index}>
            <img src={photo.src} alt={photo.alt} className="slide-image" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PhotoScroll;
