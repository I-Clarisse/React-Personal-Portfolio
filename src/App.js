import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Services from "./components/Services/Services";
import Experience from "./components/Experience/Experience";
import Works from "./components/Works/Works";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimoniols from "./components/Testimoniols/Testimoniols";
import Contact from "./components/Contact/Contact";
import './App.css';

function App() {
  return(
    <div className="App">
      <Navbar/>
      <Intro/>
      <Services/>
      <Experience/>
      <Works/>
      <Portfolio/>
      <Testimoniols/>
      <Contact/>
      </div>
  );
}

export default App;
