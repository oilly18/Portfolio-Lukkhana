import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Project from "./pages/Project";



function App() {

  return (
  <div>
    <Navbar/>
    <Home/>
    <About/>
    <Skills/>
    <Project/>
    <Contact/>
    <Footer/>
  </div>
  );
}

export default App;
