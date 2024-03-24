import icons from "/src/images/icons.svg";
import css from "./TextSliderItem.module.scss";
import PropTypes from "prop-types";

const TextSliderItem = ({ item }) => {
  return (
    <li className={css.ticker__item}>
      <p className={css.animated__text}>{item}</p>
      <svg className={css.sharp__icon}>
        <use href={icons + "#sharp"}></use>
      </svg>
    </li>
  );
};

export default TextSliderItem;

TextSliderItem.propTypes = {
  item: PropTypes.string,
};
