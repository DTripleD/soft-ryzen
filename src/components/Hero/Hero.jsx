import css from "./Hero.module.scss";

const Hero = () => {
  return (
    <section>
      <div className={`${css.container} ${css.hero__container}`}>
        <div className={css.hero__text__wrapper}>
          <div>
            <p className={css.question__text}>diD yOu seE iT ?</p>

            <h1 className={css.hero__title}>YACHT APES</h1>
          </div>

          <p className={`${css.question__text} ${css.second}`}>
            Apes aRe eveRywhere
          </p>
        </div>

        <img
          srcSet="
          /soft-ryzen/hero/hero-img_s@1x.png 216w, 
          /soft-ryzen/hero/hero-img_s@2x.png 432w, 
          /soft-ryzen/hero/hero-img_m@1x.png 283w, 
          /soft-ryzen/hero/hero-img_m@2x.png 566w, 
          /soft-ryzen/hero/hero-img_l@1x.png 463w, 
          /soft-ryzen/hero/hero-img_l@2x.png 926w"
          sizes="
                      (min-width: 1440px) 463px, 
                      (min-width: 768px) 283px, 
                      (min-width: 360px) 216px, 
                      100vw
                    "
          src="/hero/hero-img_s@1x.png"
          alt="Hero image"
          loading="lazy"
          className={css.hero__image}
        />
        <div className={css.button__wrapper}>
          <button className={css.hero__button}>MEET APES</button>
          <p className={css.hero__text}>
            Yacht Ape is a collection of unique digital apes that you can own in
            NFT format
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
