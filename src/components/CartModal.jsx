// src/components/CartModal.jsx

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTrashAlt } from 'react-icons/fa';
import emptyCart from '../assets/empty-cart.png';

const CartModal = ({ isOpen, onClose, cart, removeFromCart, updateQuantity }) => {
  const totalAmount = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-40 z-40"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal */}
          <motion.div
            className="fixed top-1/2 left-1/2 w-[90%] max-w-lg p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg z-50 transform -translate-x-1/2 -translate-y-1/2"
            initial={{ y: '-100vh', opacity: 0 }}
            animate={{ y: '-50%', opacity: 1 }}
            exit={{ y: '-100vh', opacity: 0 }}
          >
            <h2 className="text-2xl font-bold mb-4 text-center">Your Cart</h2>

            {cart.length === 0 ? (
              <div className="text-center">
                <img
                  src={emptyCart}
                  alt="Empty Cart"
                  className="w-48 h-48 mx-auto mb-4"
                />
                <p className="text-gray-500 dark:text-gray-300 mb-4">Your cart is empty.</p>
                <button
                  onClick={onClose}
                  className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <>
                <div className="max-h-64 overflow-y-auto mb-4 space-y-4">
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center border-b pb-2"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-16 h-16 object-contain mr-4"
                      />
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-800 dark:text-gray-100">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          ${item.price.toFixed(2)}
                        </p>
                        <div className="flex items-center mt-2">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className="px-2 py-1 bg-gray-200 rounded text-lg"
                          >
                            -
                          </button>
                          <span className="mx-3">{item.quantity}</span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="px-2 py-1 bg-gray-200 rounded text-lg"
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="ml-4 text-red-500 hover:text-red-700"
                      >
                        <FaTrashAlt />
                      </button>
                    </div>
                  ))}
                </div>

                <div className="border-t pt-4">
                  <p className="text-lg font-semibold mb-2">
                    Total: ${totalAmount.toFixed(2)}
                  </p>
                  <button
                    className="w-full py-2 bg-green-600 text-white rounded hover:bg-green-700"
                    onClick={() => alert('Checkout feature coming soon!')}
                  >
                    Checkout
                  </button>
                </div>
              </>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartModal;
