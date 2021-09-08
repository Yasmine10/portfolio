import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./views/Home";
import Skills from "./views/Skills";
import Contact from "./views/Contact";
import Projects from "./views/Projects";

export default function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <Home />
        <Skills />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
