import "./App.scss";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
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
          </div>
        </section>
      </main>
      <footer>© Yacht ape 2024 all rights reserved</footer>
    </>
  );
}

export default App;
