import icons from "../../images/icons.svg";

import css from "./ContactUs.module.scss";

const ContactUs = () => {
  return (
    <section>
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

          <form className={css.form}>
            <div className={css.label__wrapper}>
              <div className={css.form__icon_wrapper}>
                <svg className={css.form__icon}>
                  <use href={icons + "#discord-color"}></use>
                </svg>
              </div>
              <label className={css.label}>
                <input
                  type="text"
                  placeholder="@username"
                  className={css.input}
                />
              </label>
            </div>
            <div className={css.label__wrapper}>
              <div className={css.form__icon_wrapper}>
                <svg className={css.form__icon}>
                  <use href={icons + "#meta-mask"}></use>
                </svg>
              </div>
              <label className={css.label}>
                <input
                  type="text"
                  placeholder="Wallet address"
                  className={css.input}
                />
              </label>
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
