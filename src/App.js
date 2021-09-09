import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import UrlShortener from "./components/UrlShortener";
import Statistics from "./components/Statistics";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">

      <Header />
      <Hero />
      <UrlShortener />
      <Statistics />
      <Footer />

    </div>
  );
}

export default App;
