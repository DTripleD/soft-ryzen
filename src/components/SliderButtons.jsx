const SliderButtons = ({ swiperRef, isStartBtnActive, isEndBtnActive }) => {
  return (
    <div className="slider__buttons_wrapper">
      <button
        onClick={() => swiperRef.current.slidePrev()}
        disabled={isStartBtnActive}
        className="slider__button"
      >
        Prev
      </button>
      <button
        onClick={() => swiperRef.current.slideNext()}
        disabled={isEndBtnActive}
        className="slider__button"
      >
        Next
      </button>
    </div>
  );
};

export default SliderButtons;
