import css from "./MindMapItem.module.scss";
import icons from "../../images/icons.svg";
import PropTypes from "prop-types";

const MindMapItem = ({ item }) => {
  return (
    <li className={`${css.mind_map_item} ${item.isLast ? css.last : ""}`}>
      {item.isLast ? (
        <svg className={css.up_left_arrow_icon}>
          <use href={icons + "#up-left-arrow"}></use>
        </svg>
      ) : (
        <p className={css.card_text}>{item.text}</p>
      )}
      <h3 className={css.card_title}>{item.title}</h3>
    </li>
  );
};

export default MindMapItem;

MindMapItem.propTypes = {
  item: PropTypes.object,
};
