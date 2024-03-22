import css from "./Hero.module.scss";

const Hero = () => {
  return (
    <section className={css.hero__section}>
      <div className={`${css.container} ${css.hero__container}`}>
        <div className={css.hero__text__wrapper}>
          <div>
            <p className={css.question__text}>diD yOu seE iT ?</p>

            <h1 className={css.hero__title}>YACHT APES</h1>
          </div>

          <div>
            <p className={css.question__text}>Apes aRe eveRywhere</p>
            <div className={css.button__wrapper}>
              <p className={css.hero__text}>
                Yacht Ape is a collection of unique digital apes that you can
                own in NFT format
              </p>
              <button className={css.hero__button}>MEET APES</button>
            </div>
          </div>
        </div>
        <img
          src="/src/images/hero-img.png"
          alt="Hero image"
          className={css.hero__image}
        />
      </div>
    </section>
  );
};

export default Hero;
