import { useState } from "react";

import css from "./Header.module.scss";
import MediaQuery from "react-responsive";

import Footer from "../Footer/Footer";
import Logo from "../Logo/Logo";

import icons from "/src/images/icons.svg";

const buttonArray = ["About", "M-map", "Faq", "Arts", "Mint"];
const headerArray = ["#discord", "#boat", "#twitter"];

import PropTypes from "prop-types";

const Button = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <ul className={css.opened__list}>
        <MediaQuery minWidth={768}>
          {isOpen &&
            buttonArray.map((item) => (
              <li key={item}>
                <button
                  className={`${css.social__network_button} ${
                    scrolled ? css.scrolled : ""
                  }`}
                >
                  {item}
                </button>
              </li>
            ))}
        </MediaQuery>
        <li>
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className={`${css.social__network_button} ${
              scrolled ? css.scrolled : ""
            }`}
          >
            {isOpen ? "Close" : "Menu"}
          </button>
        </li>
      </ul>
      <MediaQuery maxWidth={767}>
        {isOpen && (
          <div className={css.burder__menu}>
            <div>
              <div className={css.header__container}>
                <Logo scrolled={true} />

                <ul className={css.burder__list}>
                  {buttonArray.map((item) => (
                    <li key={item}>
                      <button
                        className={`${css.burger__button} ${css.scrolled}`}
                      >
                        {item}
                      </button>
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
        )}
      </MediaQuery>
    </>
  );
};

export default Button;

Button.propTypes = {
  scrolled: PropTypes.bool,
};
