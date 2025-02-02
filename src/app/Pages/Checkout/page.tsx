"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
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
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");

  useEffect(() => {
    const storedCart = sessionStorage.getItem("cartItems");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    } else {
      router.push("/Pages/Cart");
    }
  }, [router]);

  const subtotal = cartItems.reduce(
    (acc, product) => acc + (product.price || 0) * (product.quantity || 1),
    0
  );

  const handleCheckout = async () => {
    if (!email || !firstName || !lastName || !address || !city || !postalCode) {
      alert("Please fill in all the required fields.");
      return;
    }

    const orderData = {
      customerName: `${firstName} ${lastName}`,
      email,
      address,
      city,
      postalCode,
      products: cartItems.map((item) => ({
        _type: 'product',
        _ref: item._id,
        id: item._id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        image: item.image,
      })),
      totalPrice: subtotal,
      status: "pending",
      orderDate: new Date().toISOString(),
    };

    try {
      const response = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
      });

      if (response.ok) {
        alert("Order placed successfully!");
        sessionStorage.removeItem("cartItems");
        router.push("/Pages/Order");
      } else {
        console.error("Order submission failed");
      }
    } catch (error) {
      console.error("Error submitting order:", error);
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 p-6 bg-gray-50 min-h-screen">
      {/* Left Section - Billing & Shipping */}
      <div className="w-full md:w-2/3 p-6 bg-white shadow-md rounded-lg border border-blue-300">
        <h2 className="text-xl font-bold">Contact Information</h2>
        <input type="email" placeholder="Email" className="w-full p-3 mt-3 border rounded-md" value={email} onChange={(e) => setEmail(e.target.value)} />
        
        <h2 className="mt-6 text-xl font-bold">Shipping Address</h2>
        <input type="text" placeholder="First Name" className="w-full p-3 mt-3 border rounded-md" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        <input type="text" placeholder="Last Name" className="w-full p-3 mt-3 border rounded-md" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        <input type="text" placeholder="Address" className="w-full p-3 mt-3 border rounded-md" value={address} onChange={(e) => setAddress(e.target.value)} />
        <input type="text" placeholder="City" className="w-full p-3 mt-3 border rounded-md" value={city} onChange={(e) => setCity(e.target.value)} />
        <input type="text" placeholder="Postal Code" className="w-full p-3 mt-3 border rounded-md" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} />
        
        <button className="w-full mt-6 py-3 bg-pink-500 text-white rounded-md hover:bg-pink-600" onClick={handleCheckout}>
          Proceed to Checkout
        </button>
      </div>

      {/* Right Section - Order Summary */}
      <div className="w-full md:w-1/3 p-6 bg-white shadow-md rounded-lg border border-gray-300">
        <h2 className="text-xl font-bold mb-4">Order Summary</h2>
        <div className="flex flex-col gap-4">
          {cartItems.map((item) => (
            <div key={item._id} className="flex items-center gap-4 border-b pb-3">
              <Image 
              src={urlFor(item.image).url()}
               alt={item.name} 
               width={60} 
               height={60} 
               className="rounded-md" />
              <div className="flex-1">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-gray-600">Price: ${item.price}</p>
                <p className="text-gray-600">Qty: {item.quantity}</p>
                <p className="text-gray-800 font-semibold">Total: ${item.price * item.quantity}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 text-lg font-bold">
          Subtotal: ${subtotal}
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
