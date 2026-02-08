import "./CartItem.css";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeItem,
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

      <div className="cart-container">
        <h1>Shopping Cart</h1>

        <p>Total Items: {totalQuantity}</p>
        <p>Total Cost: ${totalPrice}</p>

        {cartItems.length === 0 && <p>Your cart is empty.</p>}

        {cartItems.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.image} alt={item.name} />

            <div className="cart-details">
              <h3>{item.name}</h3>
              <p>Unit Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>

              <div className="cart-buttons">
                <button onClick={() => dispatch(increaseQuantity(item.id))}>
                  +
                </button>

                <button onClick={() => dispatch(decreaseQuantity(item.id))}>
                  -
                </button>

                <button
                  className="delete-btn"
                  onClick={() => dispatch(removeItem(item.id))}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}

        <button
          className="checkout-btn"
          onClick={() => alert("Coming Soon")}
        >
          Checkout
        </button>

        <Link to="/plants">
          <button className="continue-btn">Continue Shopping</button>
        </Link>
      </div>
    </>
  );
}

export default CartItem;
