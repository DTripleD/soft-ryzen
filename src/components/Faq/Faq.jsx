import { faqArray } from "../../data/data";
import css from "./Faq.module.scss";

const Faq = () => {
  return (
    <section>
      <div className={css.container}>
        <div>
          <h2 className={css.title}>FAQ</h2>

          <ul>
            {faqArray.map((item) => (
              <li className={css.faq__item} key={item.count}>
                <img
                  src="/src/images/nft/monkey-1.jpg"
                  alt=""
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
