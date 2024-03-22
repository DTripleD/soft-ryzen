import icons from "/src/images/icons.svg";
import css from "./TextSlider.module.scss";

const TextSlider = () => {
  return (
    <div className={css.animated__slider}>
      <ul className={css.ticker}>
        <li className={css.ticker__item}>
          {/* Окремий компонент */}
          <p className={css.animated__text}>Destroy stereotypes</p>
          <svg className={css.sharp__icon}>
            <use href={icons + "#sharp"}></use>
          </svg>
        </li>
        <li className={css.ticker__item}>
          <p className={css.animated__text}>Have no limits</p>
          <svg className={css.sharp__icon}>
            <use href={icons + "#sharp"}></use>
          </svg>
        </li>
        <li className={css.ticker__item}>
          <p className={css.animated__text}>Break rules</p>
          <svg className={css.sharp__icon}>
            <use href={icons + "#sharp"}></use>
          </svg>
        </li>
      </ul>
    </div>
  );
};

export default TextSlider;
