import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Comments from "./components/Comments";
import Contact from "./components/Contact";
import Work from "./components/Work";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Work />
      <Comments />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
