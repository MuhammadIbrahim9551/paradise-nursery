import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const totalQuantity = useSelector(state => state.cart.totalQuantity);

  return (
    <nav style={{ display: "flex", gap: 20, padding: 20 }}>
      <Link to="/">Home</Link>
      <Link to="/plants">Plants</Link>
      <Link to="/cart">Cart ({totalQuantity})</Link>
    </nav>
  );
}

export default Header;
