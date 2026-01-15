import { useState } from "react";
import ProductList from "./components/ProductList";
import "./App.css";

function App() {
  const [showProducts, setShowProducts] = useState(false);

  return (
    <div className="landing">
      {!showProducts ? (
        <>
          <h1>Paradise Nursery</h1>
          <button onClick={() => setShowProducts(true)}>
            Get Started
          </button>
        </>
      ) : (
        <ProductList />
      )}
    </div>
  );
}

export default App;
