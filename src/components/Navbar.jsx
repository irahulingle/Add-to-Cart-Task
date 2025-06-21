import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { cartItems } = useCart();

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-indigo-600">
          🛍️ My Store Cart
        </Link>

        <Link
          to="/cart"
          className="relative text-lg font-medium text-gray-700 hover:text-indigo-600 transition"
        >
          🛒 Cart
          <span className="absolute -top-2 -right-3 bg-indigo-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
            {cartItems.length}
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
