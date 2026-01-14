import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/CartSlice";
import Header from "./Header";
import "./ProductList.css";
import aloe from "../assets/images/Aloe Vera.jpg";
import snake from "../assets/images/Snake Plant.jpg";
import peace from "../assets/images/Peace Lily.jpeg";
import rose from "../assets/images/Rose Plant.jpg";
import cactus from "../assets/images/Cactus.jpg";
import bamboo from "../assets/images/Bamboo Palm.jpg";

const plants = [
  { id: 1, name: "Aloe Vera", price: 10, category: "Succulents", image: aloe },
  { id: 2, name: "Snake Plant", price: 15, category: "Indoor", image: snake },
  { id: 3, name: "Peace Lily", price: 18, category: "Indoor", image: peace },
  { id: 4, name: "Rose Plant", price: 12, category: "Outdoor", image: rose },
  { id: 5, name: "Cactus", price: 8, category: "Succulents", image: cactus },
  { id: 6, name: "Bamboo Palm", price: 20, category: "Outdoor", image: bamboo },
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const isInCart = (id) => cartItems.some((item) => item.id === id);

  const categories = ["Indoor", "Outdoor", "Succulents"];

  return (
    <>
      <Header />

      <div className="product-list">
        {categories.map((category) => (
          <div key={category}>
            <h2>{category} Plants</h2>

            <div className="products-grid">
              {plants
                .filter((p) => p.category === category)
                .map((plant) => (
                  <div className="product-card" key={plant.id}>
                    <img src={plant.image} alt={plant.name} />
                    <h3>{plant.name}</h3>
                    <p>${plant.price}</p>

                    <button
                      disabled={isInCart(plant.id)}
                      onClick={() => dispatch(addToCart(plant))}
                    >
                      {isInCart(plant.id) ? "Added" : "Add to Cart"}
                    </button>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ProductList;
