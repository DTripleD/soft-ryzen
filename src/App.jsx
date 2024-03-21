import "./App.scss";
import About from "./components/About/About";
import Arts from "./components/Arts/Arts";
import ContactUs from "./components/ContactUs/ContactUs";

import Faq from "./components/Faq/Faq";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

import Hero from "./components/Hero/Hero";

import MindMap from "./components/MindMap/MindMap";

function App() {
  return (
    <>
      <Header />

      {/* ??? Нужен мейн? */}
      <main>
        <Hero />
        <About />
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
