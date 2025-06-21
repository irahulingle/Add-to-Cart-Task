import { useCart } from "../context/CartContext";
import emptyCartImg from "../assets/empty-cart.png";

const Cart = () => {
  const { cartItems, removeFromCart, incrementQuantity, decrementQuantity } = useCart();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="text-center py-12">
        <img
          src={emptyCartImg}
          alt="Empty Cart"
          className="mx-auto w-48 mb-4"
        />
        <h2 className="text-xl font-semibold">Your cart is empty!</h2>
        <button
          onClick={() => window.history.back()}
          className="mt-6 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
        >
          ⬅️ Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {cartItems.map((item) => (
        <div
          key={item.id}
          className="flex items-center bg-white p-4 rounded shadow justify-between"
        >
          <img
            src={item.image}
            alt={item.title}
            className="h-20 w-20 object-contain"
          />
          <div className="flex-1 px-4">
            <h3 className="font-semibold mb-1">{item.title}</h3>
            <p className="text-indigo-600 font-bold mb-1">
              ${item.price} × {item.quantity} = ${(item.price * item.quantity).toFixed(2)}
            </p>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => decrementQuantity(item.id)}
                className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
              >
                -
              </button>
              <span className="font-semibold">{item.quantity}</span>
              <button
                onClick={() => incrementQuantity(item.id)}
                className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
              >
                +
              </button>
            </div>
          </div>
          <button
            onClick={() => removeFromCart(item.id)}
            className="ml-4 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
          >
            Remove
          </button>
        </div>
      ))}

      <div className="flex justify-between items-center mt-6">
        <button
          onClick={() => window.history.back()}
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition"
        >
          ⬅️ Continue Shopping
        </button>

        <h2 className="text-xl font-bold text-indigo-700">
          Total: ${total.toFixed(2)}
        </h2>
      </div>
    </div>
  );
};

export default Cart;
