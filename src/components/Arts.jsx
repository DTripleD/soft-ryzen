import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import { useRef, useState } from "react";
import SliderButtons from "./SliderButtons";
// import "swiper/css/pagination";

const Arts = () => {
  const [isStartBtnActive, setStartBtnActive] = useState(true);
  const [isEndBtnActive, setIsEndBtnActive] = useState(false);

  const swiperRef = useRef();

  function isButtonActive(e) {
    console.log(e.isEnd);
    console.log(e);
    e.isBeginning ? setStartBtnActive(true) : setStartBtnActive(false);
    e.isEnd ? setIsEndBtnActive(true) : setIsEndBtnActive(false);
  }
  return (
    <div className="container">
      <h2 className="title">Collection</h2>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={24}
        onSlideChange={isButtonActive}
        modules={[Navigation]}
        className="mySwiper"
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        <SwiperSlide key={1}>
          <div className="nft__item">
            <img
              src="src/images/nft/monkey-1.jpg"
              alt=""
              className="nft_item"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide key={2}>
          <div className="nft__item">
            <img
              src="src/images/nft/monkey-2.jpg"
              alt=""
              className="nft_item"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide key={3}>
          <div className="nft__item">
            <img
              src="src/images/nft/monkey-3.jpg"
              alt=""
              className="nft_item"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide key={4}>
          <div className="nft__item">
            <img
              src="src/images/nft/monkey-4.jpg"
              alt=""
              className="nft_item"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide key={5}>
          <div className="nft__item">
            <img
              src="src/images/nft/monkey-5.jpg"
              alt=""
              className="nft_item"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide key={6}>
          <div className="nft__item">
            <img
              src="src/images/nft/monkey-6.jpg"
              alt=""
              className="nft_item"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide key={7}>
          <div className="nft__item">
            <img
              src="src/images/nft/monkey-7.jpg"
              alt=""
              className="nft_item"
            />
          </div>
        </SwiperSlide>
      </Swiper>
      <SliderButtons
        isStartBtnActive={isStartBtnActive}
        isEndBtnActive={isEndBtnActive}
        swiperRef={swiperRef}
      />
    </div>
  );
};

export default Arts;
