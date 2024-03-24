import css from "./TextSlider.module.scss";
import TextSliderItem from "./TextSliderItem/TextSliderItem";

const textSliderArray = [
  { text: "Destroy stereotypes", id: 1 },
  { text: "Have no limits", id: 2 },
  { text: "Break rules", id: 3 },
  { text: "Destroy stereotypes", id: 4 },
  { text: "Have no limits", id: 5 },
  { text: "Break rules", id: 6 },
  { text: "Destroy stereotypes", id: 7 },
  { text: "Have no limits", id: 8 },
  { text: "Break rules", id: 9 },
];

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
