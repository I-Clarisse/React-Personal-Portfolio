import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Services from "./components/Services/Services";
import Experience from "./components/Experience/Experience";
import Works from "./components/Works/Works";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimoniols from "./components/Testimoniols/Testimoniols";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import './App.css';
import {themeContext} from './Context'

function App() {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
  return(
    
    <div className="App"
    style={{
      background : darkMode? 'black' : '',
      color : darkMode? 'white' : ''
    }}
    >
      <Navbar/>
      <Intro/>
      <Services/>
      <Experience/>
      <Works/>
      <Portfolio/>
      <Testimoniols/>
      <Contact/>
      <Footer/>
      </div>
  );
}

export default App;
