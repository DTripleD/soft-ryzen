import { useEffect, useRef, useState } from "react";

import icons from "/src/images/icons.svg";

import css from "./Header.module.scss";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header ref={headerRef} className={css.header}>
      <div>
        <svg className={`${css.logo__icon} ${scrolled ? css.scrolled : ""}`}>
          <use href={icons + "#logo"}></use>
        </svg>
      </div>
      <ul className={css.social__network_list}>
        <li className={css.social__network_item}>
          {/* ??? Можно ли сюда ul? */}
          <ul className={css.opened__list}>
            {isOpen && (
              <>
                <li>
                  <button
                    className={`${css.social__network_button} ${
                      scrolled ? css.scrolled : ""
                    }`}
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    className={`${css.social__network_button} ${
                      scrolled ? css.scrolled : ""
                    }`}
                  >
                    M-map
                  </button>
                </li>
                <li>
                  <button
                    className={`${css.social__network_button} ${
                      scrolled ? css.scrolled : ""
                    }`}
                  >
                    Faq
                  </button>
                </li>
                <li>
                  <button
                    className={`${css.social__network_button} ${
                      scrolled ? css.scrolled : ""
                    }`}
                  >
                    Arts
                  </button>
                </li>
                <li>
                  <button
                    className={`${css.social__network_button} ${
                      scrolled ? css.scrolled : ""
                    }`}
                  >
                    Mint
                  </button>
                </li>
              </>
            )}
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
        </li>
        <li className={css.social__network_item}>
          <button className={css.social__network_button}>
            <svg
              className={`${css.menu__icon} ${scrolled ? css.scrolled : ""}`}
            >
              <use href={icons + "#discord"}></use>
            </svg>
          </button>
        </li>

        <li className={css.social__network_item}>
          <button className={css.social__network_button}>
            <svg
              className={`${css.menu__icon} ${scrolled ? css.scrolled : ""}`}
            >
              <use href={icons + "#boat"}></use>
            </svg>
          </button>
        </li>
        <li className={css.social__network_item}>
          <button className={css.social__network_button}>
            <svg
              className={`${css.menu__icon} ${scrolled ? css.scrolled : ""}`}
            >
              <use href={icons + "#twitter"}></use>
            </svg>
          </button>
        </li>
      </ul>
    </header>
  );
};

export default Header;
