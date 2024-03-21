import icons from "/src/images/icons.svg";

import css from "./MindMap.module.scss";
import { mapArray } from "../../data/data";

const MindMap = () => {
  return (
    <section>
      <div className={css.container}>
        <h2 className={css.title}>Mind map</h2>
        <ul className={css.mind_map_list}>
          {mapArray.map((item) => (
            <li className={css.mind_map_item} key={item.id}>
              <p className={css.card_text}>{item.text}</p>
              <h3 className={css.card_title}>{item.title}</h3>
            </li>
          ))}

          <li className={`${css.mind_map_item} ${css.last}`}>
            <svg className={css.up_left_arrow_icon}>
              <use href={icons + "#up-left-arrow"}></use>
            </svg>
            <h3 className={css.card_title}>Learn more in mind map</h3>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default MindMap;
