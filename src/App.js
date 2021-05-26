import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import AddComment from "./components/AddComment";
import Contact from "./components/Contact";
import Work from "./components/Work";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Work />
      <Router>
        <Switch>
          <Route exact path="/" />
          <Route exact path="/comments/add" component={AddComment} />
        </Switch>
      </Router>
      <AddComment />
      <Contact />
    </div>
  );
};

export default App;
