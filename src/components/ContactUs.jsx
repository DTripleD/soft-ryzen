import icons from "../images/icons.svg";

const ContactUs = () => {
  return (
    <div>
      <h2 className="title">Are you in?</h2>
      <div className="form__wrapper">
        <svg className="sharp__icon">
          <use href={icons + "#sharp"}></use>
        </svg>
        <p className="contact_text">
          Join the YACHT APE community to be one of the first to receive our
          limited edition NFT
        </p>

        <form className="form">
          {/* ??? Окей писать свг в лайбл? */}
          <div className="label__wrapper">
            <div className="form__icon_wrapper">
              <svg className="form__icon">
                <use href={icons + "#discord-color"}></use>
              </svg>
            </div>
            <label className="label">
              <input type="text" placeholder="@username" className="input" />
            </label>
          </div>
          <div className="label__wrapper">
            <div className="form__icon_wrapper">
              <svg className="form__icon">
                <use href={icons + "#meta-mask"}></use>
              </svg>
            </div>
            <label className="label">
              <input
                type="text"
                placeholder="Wallet address"
                className="input"
              />
            </label>
          </div>
          <button className="mint_button" type="submit">
            Mint
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
