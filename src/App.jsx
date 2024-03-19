import "./App.scss";
import Arts from "./components/Arts";
import ContactUs from "./components/ContactUs";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MindMap from "./components/MindMap";

function App() {
  return (
    <>
      <Header />

      {/* ??? Нужен мейн? */}
      <main>
        <section className="hero__section">
          <div className="container">
            <div>
              <p>diD yOu seE iT ?</p>
              <h1>YACHT APES</h1>
              <p>Apes aRe eveRywhere</p>
              <p>
                Yacht Ape is a collection of unique digital apes that you can
                own in NFT format
              </p>
            </div>
            <button className="hero__button">MEET APES</button>
            <img src="../src/images/hero-img.png" alt="Hero image" />
          </div>
        </section>
        <MindMap />
        <Faq />
        <Arts />
        <ContactUs />
      </main>
      <Footer />
    </>
  );
}

export default App;
