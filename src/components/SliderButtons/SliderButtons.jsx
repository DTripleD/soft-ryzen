import css from "./SliderButtons.module.scss";

import PropTypes from "prop-types";

const SliderButtons = ({ swiperRef, isStartBtnActive, isEndBtnActive }) => {
  return (
    <div className={css.slider__buttons_wrapper}>
      <button
        onClick={() => swiperRef.current.slidePrev()}
        disabled={isStartBtnActive}
        className={css.slider__button}
      >
        Prev
      </button>
      <button
        onClick={() => swiperRef.current.slideNext()}
        disabled={isEndBtnActive}
        className={css.slider__button}
      >
        Next
      </button>
    </div>
  );
};

export default SliderButtons;

SliderButtons.propTypes = {
  swiperRef: PropTypes.object,
  isStartBtnActive: PropTypes.bool,
  isEndBtnActive: PropTypes.bool,
};
