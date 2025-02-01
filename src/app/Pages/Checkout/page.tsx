// // import React from "react";
// // import Image from "next/image";

// // const CheckoutPage = () => {
// //   return (
// //     <div className="flex flex-col md:flex-row gap-8 p-6 bg-gray-50 min-h-screen">
// //       {/* Left Section - Form */}
// //       <div className="w-full md:w-2/3 p-6 bg-white shadow-md rounded-lg">
// //         <h2 className="text-xl font-bold">Contact Information</h2>
// //         <p className="text-sm text-gray-500">
// //           Already have an account? <span className="text-blue-600">Log in</span>
// //         </p>
// //         <input
// //           type="email"
// //           placeholder="Email or mobile phone number"
// //           className="w-full p-3 mt-3 border rounded-md"
// //         />
// //         <div className="flex items-center gap-2 mt-2">
// //           <input type="checkbox" id="subscribe" className="w-4 h-4" />
// //           <label htmlFor="subscribe" className="text-sm text-gray-500">
// //             Keep me up to date on news and exclusive offers
// //           </label>
// //         </div>

// //         <h2 className="mt-6 text-xl font-bold">Shipping address</h2>
// //         <div className="grid grid-cols-2 gap-4 mt-3">
// //           <input type="text" placeholder="First name (optional)" className="p-3 border rounded-md" />
// //           <input type="text" placeholder="Last name" className="p-3 border rounded-md" />
// //         </div>
// //         <input type="text" placeholder="Address" className="w-full p-3 mt-3 border rounded-md" />
// //         <input type="text" placeholder="Apartment, suite, etc. (optional)" className="w-full p-3 mt-3 border rounded-md" />
// //         <div className="grid grid-cols-2 gap-4 mt-3">
// //           <input type="text" placeholder="City" className="p-3 border rounded-md" />
// //           <input type="text" placeholder="Postal Code" className="p-3 border rounded-md" />
// //         </div>
// //         <button className="w-full mt-6 py-3 bg-pink-500 text-white rounded-md hover:bg-pink-600">
// //           Continue Shipping
// //         </button>
// //       </div>

// //       {/* Right Section - Order Summary */}
// //       <div className="w-full md:w-1/3 bg-white p-6 shadow-md rounded-lg">
// //         {Array(5).fill(0).map((_, index) => (
// //           <div key={index} className="flex items-center gap-4 border-b pb-3 mb-3">
// //             <div className="w-16 h-16 bg-gray-200 rounded-md"></div>
// //             <div>
// //               <p className="text-sm font-semibold">Ur diam consequat</p>
// //               <p className="text-xs text-gray-500">Color: Brown | Size: XL</p>
// //             </div>
// //             <span className="text-sm font-semibold">$32.00</span>
// //           </div>
// //         ))}
// //         <div className="flex justify-between mt-4 text-lg font-semibold">
// //           <span>Subtotal:</span>
// //           <span>£219.00</span>
// //         </div>
// //         <div className="flex justify-between mt-2 text-lg font-semibold">
// //           <span>Total:</span>
// //           <span>£325.00</span>
// //         </div>
// //         <p className="text-xs text-gray-500 mt-2">Shipping & taxes calculated at checkout</p>
// //         <button className="w-full mt-4 py-3 bg-green-600 text-white rounded-md hover:bg-green-700">
// //           Proceed To Checkout
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default CheckoutPage;



// "use client";

// import React from "react";
// import { useSelector } from "react-redux";
// import { RootState } from "../../redux/store";
// import Image from "next/image";
// import Link from "next/link";
// import { urlFor } from "@/sanity/lib/image";

// const CheckoutPage = () => {
//   const cartItems = useSelector((state: RootState) => state.cart);

//   // Cart total calculation
//   const subtotal = cartItems.reduce(
//     (acc, product) => acc + (product.price || 0) * (product.quantity || 1),
//     0
//   );

//   return (
//     <div className="flex flex-col md:flex-row gap-8 p-6 bg-gray-50 min-h-screen">
//       {/* Left Section - Form */}
//       <div className="w-full md:w-2/3 p-6 bg-white shadow-md rounded-lg">
//         <h2 className="text-xl font-bold">Contact Information</h2>
//         <p className="text-sm text-gray-500">
//           Already have an account? <span className="text-blue-600">Log in</span>
//         </p>
//         <input
//           type="email"
//           placeholder="Email or mobile phone number"
//           className="w-full p-3 mt-3 border rounded-md"
//         />
//         <div className="flex items-center gap-2 mt-2">
//           <input type="checkbox" id="subscribe" className="w-4 h-4" />
//           <label htmlFor="subscribe" className="text-sm text-gray-500">
//             Keep me up to date on news and exclusive offers
//           </label>
//         </div>

//         <h2 className="mt-6 text-xl font-bold">Shipping address</h2>
//         <div className="grid grid-cols-2 gap-4 mt-3">
//           <input type="text" placeholder="First name (optional)" className="p-3 border rounded-md" />
//           <input type="text" placeholder="Last name" className="p-3 border rounded-md" />
//         </div>
//         <input type="text" placeholder="Address" className="w-full p-3 mt-3 border rounded-md" />
//         <input type="text" placeholder="Apartment, suite, etc. (optional)" className="w-full p-3 mt-3 border rounded-md" />
//         <div className="grid grid-cols-2 gap-4 mt-3">
//           <input type="text" placeholder="City" className="p-3 border rounded-md" />
//           <input type="text" placeholder="Postal Code" className="p-3 border rounded-md" />
//         </div>
//         <button className="w-full mt-6 py-3 bg-pink-500 text-white rounded-md hover:bg-pink-600">
//           Continue Shipping
//         </button>
//       </div>

//       {/* Right Section - Order Summary */}
//       <div className="w-full md:w-1/3 bg-white p-6 shadow-md rounded-lg">
//         {cartItems.length === 0 ? (
//           <p className="text-center text-gray-500">Your cart is empty!</p>
//         ) : (
//           cartItems.map((item) => (
//             <div key={item._id} className="flex items-center gap-4 border-b pb-3 mb-3">
//               <Image
//                 src={urlFor(item.image).url()}
//                 alt={item.name}
//                 height={64}
//                 width={64}
//                 className="rounded-md"
//               />
//               <div>
//                 <p className="text-sm font-semibold">{item.name}</p>
//                 <p className="text-xs text-gray-500">Quantity: {item.quantity}</p>
//               </div>
//               <span className="text-sm font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
//             </div>
//           ))
//         )}

//         <div className="flex justify-between mt-4 text-lg font-semibold">
//           <span>Subtotal:</span>
//           <span>${subtotal.toFixed(2)}</span>
//         </div>
//         <div className="flex justify-between mt-2 text-lg font-semibold">
//           <span>Total:</span>
//           <span>${subtotal.toFixed(2)}</span>
//         </div>
//         <p className="text-xs text-gray-500 mt-2">Shipping & taxes calculated at checkout</p>
//         <button className="w-full mt-4 py-3 bg-green-600 text-white rounded-md hover:bg-green-700">
//           Proceed To Checkout
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CheckoutPage;


"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

interface CartItem {
  _id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

const CheckoutPage = () => {
  const router = useRouter();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    // Get the cart items from sessionStorage
    const storedCart = sessionStorage.getItem("cartItems");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    } else {
      // Redirect to the cart page if no cart items found
      router.push("/cart");
    }
  }, [router]);

  // Cart total calculation
  const subtotal = cartItems.reduce(
    (acc, product) => acc + (product.price || 0) * (product.quantity || 1),
    0
  );

  return (
    <div className="flex flex-col md:flex-row gap-8 p-6 bg-gray-50 min-h-screen">
      {/* Left Section - Form */}
      <div className="w-full md:w-2/3 p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-xl font-bold">Contact Information</h2>
        <input
          type="email"
          placeholder="Email or mobile phone number"
          className="w-full p-3 mt-3 border rounded-md"
        />
        <h2 className="mt-6 text-xl font-bold">Shipping Address</h2>
        <input type="text" placeholder="Address" className="w-full p-3 mt-3 border rounded-md" />
        <button className="w-full mt-6 py-3 bg-pink-500 text-white rounded-md hover:bg-pink-600">
          Continue Shipping
        </button>
      </div>

      {/* Right Section - Order Summary */}
      <div className="w-full md:w-1/3 bg-white p-6 shadow-md rounded-lg">
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-500">Your cart is empty!</p>
        ) : (
          cartItems.map((item) => (
            <div key={item._id} className="flex items-center gap-4 border-b pb-3 mb-3">
              <Image
                src={urlFor(item.image).url()}
                alt={item.name}
                height={64}
                width={64}
                className="rounded-md"
              />
              <div>
                <p className="text-sm font-semibold">{item.name}</p>
                <p className="text-xs text-gray-500">Quantity: {item.quantity}</p>
              </div>
              <span className="text-sm font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))
        )}

        <div className="flex justify-between mt-4 text-lg font-semibold">
          <span>Subtotal:</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between mt-2 text-lg font-semibold">
          <span>Total:</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <p className="text-xs text-gray-500 mt-2">Shipping & taxes calculated at checkout</p>
        <button className="w-full mt-4 py-3 bg-green-600 text-white rounded-md hover:bg-green-700">
          Proceed To Payment
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;
