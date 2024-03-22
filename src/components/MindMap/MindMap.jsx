import css from "./MindMap.module.scss";
import { mapArray } from "../../data/data";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import MediaQuery from "react-responsive";
import SliderButtons from "../SliderButtons/SliderButtons";
import { useRef, useState } from "react";
import MindMapItem from "../MindMapItem/MindMapItem";

const MindMap = () => {
  const [isStartBtnActive, setStartBtnActive] = useState(true);
  const [isEndBtnActive, setIsEndBtnActive] = useState(false);

  const swiperRef = useRef();

  function isButtonActive(e) {
    e.isBeginning ? setStartBtnActive(true) : setStartBtnActive(false);
    e.isEnd ? setIsEndBtnActive(true) : setIsEndBtnActive(false);
  }
  return (
    <section>
      <div className={css.container}>
        <h2 className={css.title}>Mind map</h2>

        <MediaQuery minWidth={768}>
          <ul className={css.mind_map_list}>
            {mapArray.map((item) => (
              <MindMapItem item={item} key={item.id} />
            ))}
          </ul>
        </MediaQuery>

        <MediaQuery maxWidth={767}>
          <Swiper
            onSlideChange={isButtonActive}
            modules={[Navigation]}
            className="mySwiper"
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            slidesPerView={1}
          >
            {mapArray.map((item) => (
              <SwiperSlide key={item.id}>
                <MindMapItem item={item} key={item.id} />
              </SwiperSlide>
            ))}
          </Swiper>
          <SliderButtons
            isStartBtnActive={isStartBtnActive}
            isEndBtnActive={isEndBtnActive}
            swiperRef={swiperRef}
          />
        </MediaQuery>
      </div>
    </section>
  );
};

export default MindMap;
