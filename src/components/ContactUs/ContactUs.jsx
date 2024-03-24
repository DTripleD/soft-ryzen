import { useEffect, useState } from "react";
import icons from "../../images/icons.svg";

import css from "./ContactUs.module.scss";

const ContactUs = () => {
  const [isDiscordError, setDiscordIsError] = useState(false);
  const [isWalletError, setWalletIsError] = useState(false);
  const [discord, setDiscord] = useState("");
  const [wallet, setWallet] = useState("");

  useEffect(() => {
    if (discord && !discord.startsWith("@")) {
      setDiscordIsError(true);
    } else {
      setDiscordIsError(false);
    }
  }, [discord]);

  useEffect(() => {
    if (wallet.includes(" ")) {
      setWalletIsError(true);
    } else {
      setWalletIsError(false);
    }
  }, [wallet]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (discord.length < 6 || wallet.length < 6) {
      alert("Lenght of eacg inputs must be at least 6 symbols");
    } else {
      alert(`Thank you ${discord}!`);

      setDiscord("");
      setWallet("");
    }
  };

  return (
    <section id="Mint">
      <div className={css.container}>
        <h2 className={css.title}>Are you in?</h2>
        <div className={css.form__wrapper}>
          <svg className={css.sharp__icon}>
            <use href={icons + "#sharp"}></use>
          </svg>
          <p className={css.contact_text}>
            Join the YACHT APE community to be one of the first to receive our
            limited edition NFT
          </p>

          <form className={css.form} onSubmit={handleSubmit}>
            <div className={css.label__wrapper}>
              <div className={css.form__icon_wrapper}>
                <svg className={css.form__icon}>
                  <use href={icons + "#discord-color"}></use>
                </svg>
              </div>
              <label
                className={`${css.label} ${
                  isDiscordError ? css.wallet__error : ""
                }`}
              >
                <input
                  type="text"
                  placeholder="@username"
                  className={css.input}
                  value={discord}
                  onChange={(e) => setDiscord(e.target.value)}
                />
              </label>
              {isDiscordError && (
                <div className={css.error__message}>Wrong discord</div>
              )}
            </div>
            <div className={css.label__wrapper}>
              <div className={css.form__icon_wrapper}>
                <svg className={css.form__icon}>
                  <use href={icons + "#meta-mask"}></use>
                </svg>
              </div>
              <label
                className={`${css.label} ${
                  isWalletError ? css.wallet__error : ""
                }`}
              >
                <input
                  type="text"
                  placeholder="Wallet address"
                  className={css.input}
                  value={wallet}
                  onChange={(e) => setWallet(e.target.value)}
                />
              </label>
              {isWalletError && (
                <div className={css.error__message}>Wrong address</div>
              )}
            </div>

            <button className={css.mint_button} type="submit">
              Mint
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
