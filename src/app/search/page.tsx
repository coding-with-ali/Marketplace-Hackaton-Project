"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { add, updateQuantity } from "../redux/cartslice";
import Image from "next/image";
import Link from "next/link";

interface Product {
  _id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";
  const [products, setProducts] = useState<Product[]>([]);
  const [cartItems, setCartItems] = useState<{ [key: string]: boolean }>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (query.trim()) {
      fetchProducts(query);
    }
  }, [query]);

  const fetchProducts = async (searchQuery: string) => {
    setLoading(true);
    setError(null);
    try {
      console.log("Fetching products for query:", searchQuery); // Debugging log
      const res = await fetch(`/api/products?search=${encodeURIComponent(searchQuery)}`);

      if (!res.ok) {
        throw new Error(`Failed to fetch products. Status: ${res.status}`);
      }

      const data = await res.json();
      if (!Array.isArray(data)) {
        throw new Error("Invalid data format received from API.");
      }

      const productsWithQuantity = data.map((product: Product) => ({
        ...product,
        quantity: 1,
      }));
      setProducts(productsWithQuantity);
    } catch (error) {
      console.error("Error fetching products:", error);
      setError("Failed to load products. Please try again.");
    }
    setLoading(false);
  };

  const handleAddToCart = (product: Product) => {
    dispatch(add(product));
    setCartItems((prev) => ({ ...prev, [product._id]: true }));
  };

  const handleQuantityChange = (productId: string, newQuantity: number) => {
    if (newQuantity > 0) {
      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product._id === productId
            ? { ...product, quantity: newQuantity }
            : product
        )
      );
      dispatch(updateQuantity({ _id: productId, quantity: newQuantity }));
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        Search Results for "<span className="text-[#7E33E0]">{query}</span>"
      </h1>

      {loading ? (
        <div className="flex justify-center items-center">
          <p className="animate-pulse text-gray-600">Loading products...</p>
        </div>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : products.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product._id}
              className="border p-4 rounded-lg shadow-md hover:shadow-lg transition bg-white"
            >
              <Link href={`/Pages/ShopGridDynamic/product/${product._id}`}>
                <Image
                  className="p-4 rounded-md w-full h-80 object-cover"
                  src={product.image}
                  alt={product.name}
                  width={200}
                  height={200}
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-gray-700 font-medium">${product.price}</p>
                </div>
              </Link>

              {cartItems[product._id] ? (
                <div className="mt-4 flex items-center">
                  <button
                    onClick={() =>
                      handleQuantityChange(product._id, product.quantity - 1)
                    }
                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                  >
                    -
                  </button>
                  <span className="mx-4">{product.quantity}</span>
                  <button
                    onClick={() =>
                      handleQuantityChange(product._id, product.quantity + 1)
                    }
                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => handleAddToCart(product)}
                  className="w-full mt-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                >
                  Add to Cart
                </button>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No products found.</p>
      )}
    </div>
  );
}
