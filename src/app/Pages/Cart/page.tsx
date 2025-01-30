"use client";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove, updateQuantity } from "../../redux/cartslice";
import { RootState } from "../../redux/store";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";

interface CartItem {
  _id: string;
  name: string;
  price: number;
  image: any;
  quantity: number;
}

const Cart: React.FC = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart);

  // Handles quantity changes with boundary check for positive quantity
  const handleQuantityChange = (_id: string, quantity: number) => {
    if (quantity > 0) {
      dispatch(updateQuantity({ _id, quantity }));
    }
  };

  // Handles removal of items from the cart
  const handleRemove = (_id: string) => {
    dispatch(remove(_id));
  };

  // Calculates the subtotal for all cart items
  const subtotal = cartItems.reduce(
    (acc, product) => acc + (product.price || 0) * (product.quantity || 1),
    0
  );

  return (
    <div>
      {/* Header Section */}
      <div className="w-full h-[286px] bg-[#F6F5FF] relative">
        <div className="absolute top-28 left-10 md:top-28 md:left-60">
          <h2 className="text-[#101750] font-[Josefin Sans] text-[26px] md:text-[36px] font-[700]">
            Your Cart
          </h2>
          <Link href="/" className="px-2">
            Home
          </Link>
          <span className="px-2">/</span>
          <span className="text-[#FB2E86] text-[16px] font-[500] px-2">Cart</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-screen-xl mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Product List */}
        <div className="col-span-2 space-y-6">
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-500">Your cart is empty!</p>
          ) : (
            cartItems.map((item: CartItem) => (
              <div
                key={item._id}
                className="flex items-center bg-white shadow-md rounded-lg p-4"
              >
                {/* Image Section */}
                <div className="flex-shrink-0">
                  <Image
                    src={urlFor(item.image).url()}
                    alt={item.name}
                    height={100}
                    width={100}
                    className="rounded-md"
                  />
                </div>

                {/* Content Section */}
                <div className="ml-4 flex-grow">
                  <h5 className="text-lg font-semibold text-gray-800">{item.name}</h5>
                  <div className="flex items-center mt-2">
                    <button
                      onClick={() =>
                        handleQuantityChange(item._id, item.quantity - 1)
                      }
                      className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      -
                    </button>
                    <span className="mx-4">{item.quantity}</span>
                    <button
                      onClick={() =>
                        handleQuantityChange(item._id, item.quantity + 1)
                      }
                      className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>
                  <h5 className="text-lg font-medium text-gray-600 mt-2">
                  $
                         {typeof item.price === "number"
                           ? item.price.toFixed(2)
                           : item.price}
                  </h5>
                </div>

                {/* Button Section */}
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
                  onClick={() => handleRemove(item._id)}
                >
                  Remove
                </button>
              </div>
            ))
          )}
        </div>

        {/* Cart Totals */}
        <div className="col-span-1">
          <div className="bg-gray-100 p-4 md:p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">Cart Totals</h3>
            <div className="mt-4 flex justify-between text-sm md:text-base">
              <p>Subtotal:</p>
              <p>${subtotal.toFixed(2)}</p>
            </div>
            <Link
              href="/Pages/Order"
              className="block bg-green-500 text-white px-4 py-2 rounded mt-4 w-full text-center hover:bg-green-600"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
