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
        {/* <img
          src="/src/images/hero-img.png"
          alt="Hero image"
          className={css.hero__image}
        /> */}

        <img
          srcSet="
          /src/images/hero/hero-img_s@1x.png 216w, 
          /src/images/hero/hero-img_s@2x.png 432w, 
          /src/images/hero/hero-img_m@1x.png 283w, 
          /src/images/hero/hero-img_m@2x.png 566w, 
          /src/images/hero/hero-img_l@1x.png 463w, 
          /src/images/hero/hero-img_l@2x.png 926w"
          sizes="
                      (min-width: 1440px) 463px, 
                      (min-width: 768px) 283px, 
                      (min-width: 360px) 216px, 
                      100vw
                    "
          src="/src/images/hero/hero-img_s@1x.png"
          alt="Hero image"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default Hero;
