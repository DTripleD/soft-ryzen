import { textSliderArray } from "../../data/data";
import css from "./TextSlider.module.scss";
import TextSliderItem from "./TextSliderItem/TextSliderItem";

const TextSlider = () => {
  return (
    <div className={css.animated__slider}>
      <ul className={css.ticker}>
        {textSliderArray.map((item) => (
          <TextSliderItem item={item.text} key={item.id} />
        ))}
      </ul>
    </div>
  );
};

export default TextSlider;
