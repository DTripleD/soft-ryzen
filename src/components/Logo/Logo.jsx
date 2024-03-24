import icons from "/src/images/icons.svg";
import css from "./Logo.module.scss";

const Logo = ({ scrolled }) => {
  return (
    <svg className={`${css.logo__icon} ${scrolled ? css.scrolled : ""}`}>
      <use href={icons + "#logo"}></use>
    </svg>
  );
};

export default Logo;
