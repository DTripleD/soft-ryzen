import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import { useRef, useState } from "react";

// import "swiper/css/pagination";

import css from "./Arts.module.scss";
import SliderButtons from "../SliderButtons/SliderButtons";
import { imagesArray } from "../../data/data";

const Arts = () => {
  const [isStartBtnActive, setStartBtnActive] = useState(true);
  const [isEndBtnActive, setIsEndBtnActive] = useState(false);

  const swiperRef = useRef();

  function isButtonActive(e) {
    e.isBeginning ? setStartBtnActive(true) : setStartBtnActive(false);
    e.isEnd ? setIsEndBtnActive(true) : setIsEndBtnActive(false);
  }
  return (
    <div className={css.container}>
      <h2 className={css.title}>Collection</h2>
      <Swiper
        spaceBetween={24}
        onSlideChange={isButtonActive}
        modules={[Navigation]}
        className="mySwiper"
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },

          768: {
            slidesPerView: 2,
          },
          1440: {
            slidesPerView: "auto",
          },
        }}
      >
        {imagesArray.map((item) => (
          <SwiperSlide key={item.id}>
            <div className={css.nft__item}>
              <img src={item.src} alt="" />
            </div>
          </SwiperSlide>
        ))}
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
