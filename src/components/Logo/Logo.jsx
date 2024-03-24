import icons from "../../images/icons.svg";
import css from "./Logo.module.scss";
import PropTypes from "prop-types";

const Logo = ({ scrolled }) => {
  return (
    <svg className={`${css.logo__icon} ${scrolled ? css.scrolled : ""}`}>
      <use href={icons + "#logo"}></use>
    </svg>
  );
};

export default Logo;

Logo.propTypes = {
  scrolled: PropTypes.bool,
};
