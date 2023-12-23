import About from "./components/about/about.component";
import Contact from "./components/contact/contact.component";
import Footer from "./components/footer/footer.component";
import Header from "./components/header/header.component";
import Portfolio from "./components/portfolio/portfolio.component";
import Services from "./components/services/services.component";

function App() {
  return (
    <>
      <Header />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
