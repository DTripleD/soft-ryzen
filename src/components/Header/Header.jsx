import { useEffect, useRef, useState } from "react";

import icons from "../../images/icons.svg";

import css from "./Header.module.scss";

import Menu from "./Menu";
import Logo from "../Logo/Logo";
import { headerArray } from "../../data/data";

const Header = () => {
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
      <div className={css.header__container}>
        <Logo scrolled={scrolled} />

        <div>
          <Menu scrolled={scrolled} />
          <ul className={css.social__network_list}>
            {headerArray.map((item) => (
              <li className={css.social__network_item} key={item.name}>
                <a
                  href={item.link}
                  className={css.social__network_button}
                  target="_blank"
                >
                  <svg
                    className={`${css.menu__icon} ${
                      scrolled ? css.scrolled : ""
                    }`}
                  >
                    <use href={icons + item.name}></use>
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
