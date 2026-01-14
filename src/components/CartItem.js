import aloe from "../assets/images/Aloe Vera.jpg";
import snake from "../assets/images/Snake Plant.jpg";
import peace from "../assets/images/Peace Lily.jpeg";
import rose from "../assets/images/Rose Plant.jpg";
import cactus from "../assets/images/Cactus.jpg";
import bamboo from "../assets/images/Bamboo Palm.jpg";
import "./CartItem.css";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../store/CartSlice";
import { Link } from "react-router-dom";
import Header from "./Header";

function CartItem() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const totalQuantity = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      <Header />
      <div style={{ padding: 20 }}>
        <h1>Shopping Cart</h1>

        <p>Total Items: {totalQuantity}</p>
        <p>Total Cost: ${totalPrice}</p>

        {cartItems.length === 0 && <p>Your cart is empty.</p>}

        {cartItems.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid #ccc",
              marginBottom: 15,
              padding: 10,
            }}
          >
            <img src={item.image} alt={item.name} width="100" />
            <h3>{item.name}</h3>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>

            <button onClick={() => dispatch(increaseQuantity(item.id))}>
              +
            </button>

            <button onClick={() => dispatch(decreaseQuantity(item.id))}>
              -
            </button>

            <button onClick={() => dispatch(removeFromCart(item.id))}>
              Remove
            </button>
          </div>
        ))}

        <button onClick={() => alert("Coming Soon")}>Checkout</button>

        <br />
        <br />

        <Link to="/plants">
          <button>Continue Shopping</button>
        </Link>
      </div>
    </>
  );
}

export default CartItem;
