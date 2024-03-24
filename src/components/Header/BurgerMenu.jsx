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
      <div className={`${css.burder__menu} ${isOpen ? css.isOpen : ""}`}>
        <div>
          <div className={css.header__container}>
            <Logo scrolled={true} />

            <ul className={css.burder__list}>
              {buttonArray.map((item) => (
                <li key={item} onClick={() => setIsOpen(false)}>
                  <a
                    href={`#${item}`}
                    className={`${css.burger__button} ${css.scrolled}`}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>

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
        </div>

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
