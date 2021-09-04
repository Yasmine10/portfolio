import "./App.scss";
import Header from "./components/Header";
// import Footer from "./components/Footer";
import Home from "./views/Home";
import Skills from "./views/Skills";
import Contact from "./views/Contact";
import Projects from "./views/Projects";

// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// function MainContent() {
//   return (
//     <div className="App">
//       <Home />
//       <Skills />
//       <Projects />
//       <Contact />
//     </div>
//   );
// }

export default function App() {
  return (
    // <Router>
    //   <Header />
    //   <Switch>
    //     <Route exact path="/" component={MainContent} />
    //   </Switch>
    // </Router>
    <div className="App">
      <Header />
      <div className="main-content">
        <Home />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}
