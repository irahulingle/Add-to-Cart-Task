import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col">
      <div className="overflow-hidden rounded-lg mb-4">
        <img
          src={product.image}
          alt={product.title}
          className="h-48 w-full object-contain transform transition-transform duration-300 hover:scale-110"
        />
      </div>
      <h2 className="font-semibold mb-2">{product.title}</h2>
      <p className="text-indigo-600 font-bold text-lg mb-4">${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="mt-auto px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
