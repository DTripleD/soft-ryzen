import { useState } from "react";

import css from "./Header.module.scss";
import MediaQuery from "react-responsive";

import PropTypes from "prop-types";
import BurgerMenu from "./BurgerMenu";
import { buttonArray } from "../../data/data";

const Menu = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <ul className={css.opened__list}>
        <MediaQuery minWidth={768}>
          {isOpen &&
            buttonArray.map((item) => (
              <li key={item.id} onClick={() => setIsOpen(false)}>
                <button
                  onClick={() => {
                    const element = document.getElementById(item.id);
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={`${css.navigation__buttons} ${
                    scrolled ? css.scrolled : ""
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
        </MediaQuery>
        <li>
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className={`${css.navigation__buttons} ${
              scrolled ? css.scrolled : ""
            }`}
          >
            {isOpen ? "Close" : "Menu"}
          </button>
        </li>
      </ul>
      <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default Menu;

Menu.propTypes = {
  scrolled: PropTypes.bool,
};
