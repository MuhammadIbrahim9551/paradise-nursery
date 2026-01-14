import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";
import AboutUs from "./components/AboutUs";
import "./App.css";

function Home() {
  return (
    <div className="landing">
      <div className="overlay">
        <h1>Paradise Nursery</h1>
        <p>
          Paradise Nursery is your one-stop destination for healthy, beautiful
          houseplants. We carefully curate indoor and outdoor plants to bring
          freshness, calm, and greenery into your living spaces.
        </p>
        <Link to="/plants">
          <button className="get-started">Get Started</button>
        </Link>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;
