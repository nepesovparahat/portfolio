import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import AddComment from "./components/AddComment";
import Contact from "./components/Contact";
import Work from "./components/Work";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Work />
      <AddComment />
      <Contact />
    </div>
  );
};

export default App;
