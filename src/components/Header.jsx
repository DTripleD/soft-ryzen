import { useState } from "react";

import icons from "../images/icons.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header>
      {/* <button>About</button>
        <button>M-map</button>
        <button>Faq</button>
        <button>Arts</button>
        <button>Mint</button>
        <button>Close</button> */}

      <div>
        <svg className="logo__icon">
          <use href={icons + "#logo"}></use>
        </svg>
      </div>
      <ul className="social__network_list">
        <li>
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="social__network_button"
          >
            {isOpen ? "Close" : "Menu"}
          </button>
        </li>
        <li>
          <button className="social__network_button">
            <svg className="menu__icon">
              <use href={icons + "#discord"}></use>
            </svg>
          </button>
        </li>

        <li>
          <button className="social__network_button">
            <svg className="menu__icon">
              <use href={icons + "#boat"}></use>
            </svg>
          </button>
        </li>
        <li>
          <button className="social__network_button">
            <svg className="menu__icon">
              <use href={icons + "#twitter"}></use>
            </svg>
          </button>
        </li>
      </ul>
    </header>
  );
};

export default Header;
