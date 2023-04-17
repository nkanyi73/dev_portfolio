import Home from "./components/Home";
import About from "./components/About";
import { BrowserRouter as Router, Route, Routes as Switch } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <div className="content">
        <Switch>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
