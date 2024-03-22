import { faqArray } from "../../data/data";
import css from "./Faq.module.scss";

const Faq = () => {
  return (
    <section>
      <div className={css.container}>
        <div>
          <h2 className={css.title}>FAQ</h2>

          <ul className={css.faq__list}>
            {faqArray.map((item) => (
              <li className={css.faq__item} key={item.count}>
                <img
                  srcSet={`${item.img1} 1x, ${item.img2} 2x`}
                  src={item.img1}
                  alt="faq image"
                  className={css.faq__image}
                />
                <p className={css.faq__count}>[ {item.count} ]</p>
                <div className={css.faq__info__wrapper}>
                  <h4 className={css.faq__title}>{item.title}</h4>

                  <p className={css.faq__text}>{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Faq;
