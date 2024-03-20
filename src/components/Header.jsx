import { useEffect, useRef, useState } from "react";

import icons from "../images/icons.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  const headerRef = useRef(null);

  console.log(scrolled);

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
    <header ref={headerRef}>
      <div>
        <svg className={`logo__icon ${scrolled ? "scrolled" : ""}`}>
          <use href={icons + "#logo"}></use>
        </svg>
      </div>
      <ul className="social__network_list">
        <li className="social__network_item">
          {/* ??? Можно ли сюда ul? */}
          <ul className="opened__list">
            {isOpen && (
              <>
                <li>
                  <button
                    className={`social__network_button ${
                      scrolled ? "scrolled" : ""
                    }`}
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    className={`social__network_button ${
                      scrolled ? "scrolled" : ""
                    }`}
                  >
                    M-map
                  </button>
                </li>
                <li>
                  <button
                    className={`social__network_button ${
                      scrolled ? "scrolled" : ""
                    }`}
                  >
                    Faq
                  </button>
                </li>
                <li>
                  <button
                    className={`social__network_button ${
                      scrolled ? "scrolled" : ""
                    }`}
                  >
                    Arts
                  </button>
                </li>
                <li>
                  <button
                    className={`social__network_button ${
                      scrolled ? "scrolled" : ""
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
                className={`social__network_button ${
                  scrolled ? "scrolled" : ""
                }`}
              >
                {isOpen ? "Close" : "Menu"}
              </button>
            </li>
          </ul>
        </li>
        <li className="social__network_item">
          <button className="social__network_button">
            <svg className={`menu__icon ${scrolled ? "scrolled" : ""}`}>
              <use href={icons + "#discord"}></use>
            </svg>
          </button>
        </li>

        <li className="social__network_item">
          <button className="social__network_button">
            <svg className={`menu__icon ${scrolled ? "scrolled" : ""}`}>
              <use href={icons + "#boat"}></use>
            </svg>
          </button>
        </li>
        <li className="social__network_item">
          <button className="social__network_button">
            <svg className={`menu__icon ${scrolled ? "scrolled" : ""}`}>
              <use href={icons + "#twitter"}></use>
            </svg>
          </button>
        </li>
      </ul>
    </header>
  );
};

export default Header;
