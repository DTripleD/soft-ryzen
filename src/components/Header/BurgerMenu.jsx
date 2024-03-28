import MediaQuery from "react-responsive";

const headerArray = ["#discord", "#boat", "#twitter"];
import icons from "../../images/icons.svg";
import Footer from "../Footer/Footer";
import Logo from "../Logo/Logo";
import { buttonArray } from "../../data/data";
import PropTypes from "prop-types";

import css from "./Header.module.scss";

const BurgerMenu = ({ isOpen, setIsOpen }) => {
  return (
    <MediaQuery maxWidth={767}>
      <div className={`${css.burger__menu} ${isOpen ? css.isOpen : ""}`}>
        <div className={css.header__container}>
          <Logo scrolled={true} />

          <div>
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className={`${css.social__network_button} ${css.scrolled} ${css.menu}`}
            >
              {isOpen ? "Close" : "Menu"}
            </button>
            <ul className={css.social__network_list}>
              {headerArray.map((item) => (
                <li className={css.social__network_item} key={item}>
                  <button className={css.social__network_button}>
                    <svg className={`${css.menu__icon} ${css.scrolled}`}>
                      <use href={icons + item}></use>
                    </svg>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <ul className={css.burger__list}>
          {buttonArray.map((item) => (
            <li key={item.id} onClick={() => setIsOpen(false)}>
              <button
                onClick={() => {
                  const element = document.getElementById(item.id);
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
                className={`${css.burger__button} ${css.scrolled}`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <Footer />
      </div>
    </MediaQuery>
  );
};

export default BurgerMenu;

BurgerMenu.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
};
