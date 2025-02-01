// // // // "use client";

// // // // import React, { useEffect, useState } from "react";
// // // // import FilterSection from "../Components/FilterSection";
// // // // import { Product } from "../../../type/products";
// // // // import { client } from "@/sanity/lib/client";
// // // // import Image from "next/image";
// // // // import { urlFor } from "@/sanity/lib/image";
// // // // import { allProducts } from "@/sanity/lib/queries";
// // // // import Link from "next/link";

// // // // const ProductSection = () => {
// // // //   const [products, setProducts] = useState<Product[]>([]);
// // // //   const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

// // // //   useEffect(() => {
// // // //     const fetchProducts = async () => {
// // // //       try {
// // // //         const fetchedProducts: Product[] = await client.fetch(allProducts);
// // // //         setProducts(fetchedProducts);
// // // //         setFilteredProducts(fetchedProducts);
// // // //       } catch (error) {
// // // //         console.error("Error fetching products:", error);
// // // //       }
// // // //     };

// // // //     fetchProducts();
// // // //   }, []);

// // // //   const handleFiltersChange = (filters: Record<string, string[]>) => {
// // // //     console.log("Filters applied:", filters);

// // // //     const filtered = products.filter((product) => {
// // // //       // Match category filter
// // // //       const matchesCategory =
// // // //         !filters.category || // No category filter applied
// // // //         filters.category.length === 0 || // Empty category filter
// // // //         filters.category.includes(product.category?.toLowerCase() || ""); // Match category

// // // //       // Match discount filter
// // // //       const discountString = product.discountPercentage
// // // //         ? String(product.discountPercentage).toLowerCase()
// // // //         : "";
// // // //       const matchesDiscount =
// // // //         !filters.discountPercentage || // No discount filter applied
// // // //         filters.discountPercentage.length === 0 || // Empty discount filter
// // // //         filters.discountPercentage.includes(discountString); // Match discount

// // // //       // Match price range filter
// // // //       const matchesPrice =
// // // //         !filters.priceRange || // No price range filter applied
// // // //         filters.priceRange.length === 0 || // Empty price range filter
// // // //         filters.priceRange.some((range) => {
// // // //           const [min, max] = range.split("-").map(Number); // Parse range
// // // //           return product.price >= min && product.price <= max; // Check if price is within range
// // // //         });

// // // //       return matchesCategory && matchesDiscount && matchesPrice; // All filters must match
// // // //     });

// // // //     setFilteredProducts(filtered);
// // // //   };

// // // //   return (
// // // //     <div className="flex gap-8">
// // // //       <FilterSection onFiltersChange={handleFiltersChange} />
// // // //       <div>
// // // //         {filteredProducts.length > 0 ? (
// // // //           filteredProducts.map((product) => (
// // // //             <div key={product._id}>
// // // //               <Link href={`/Pages/ShopGridDynamic/product/${product._id}`}>
// // // //                 <div className="md:flex max-sm:flex-col justify-between w-full p-4 border rounded shadow-md">
// // // //                   {product.image ? (
// // // //                     <Image
// // // //                       src={urlFor(product.image).url()}
// // // //                       alt={product.name}
// // // //                       width={900}
// // // //                       height={900}
// // // //                       className="w-[300px] h-[250px] object-cover"
// // // //                     />
// // // //                   ) : (
// // // //                     <p>No image available</p>
// // // //                   )}
// // // //                   <div className="pl-10 pt-5">
// // // //                     <h3 className="text-lg font-bold mt-2">{product.name}</h3>
// // // //                     <p className="text-gray-500">Price: ${product.price}</p>
// // // //                     <p className="text-red-500">Discount: {product.discountPercentage}%</p>
// // // //                     <p>Description: {product.description}</p>
// // // //                   </div>
// // // //                 </div>
// // // //               </Link>
// // // //             </div>
// // // //           ))
// // // //         ):( <></  >
// // // //         )}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default ProductSection;

// // // "use client";

// // // import React, { useEffect, useState } from "react";
// // // import FilterSection from "../Components/FilterSection";
// // // import { Product } from "../../../type/products";
// // // import { client } from "@/sanity/lib/client";
// // // import Image from "next/image";
// // // import { urlFor } from "@/sanity/lib/image";
// // // import { allProducts } from "@/sanity/lib/queries";
// // // import Link from "next/link";

// // // const ProductSection = () => {
// // //   const [products, setProducts] = useState<Product[]>([]);
// // //   const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

// // //   useEffect(() => {
// // //     const fetchProducts = async () => {
// // //       try {
// // //         const fetchedProducts: Product[] = await client.fetch(allProducts);
// // //         setProducts(fetchedProducts);
// // //         setFilteredProducts(fetchedProducts);
// // //       } catch (error) {
// // //         console.error("Error fetching products:", error);
// // //       }
// // //     };

// // //     fetchProducts();
// // //   }, []);

// // //   const handleFiltersChange = (filters: Record<string, string[]>) => {
// // //     console.log("Filters applied:", filters);

// // //     const filtered = products.filter((product) => {
// // //       const matchesCategory =
// // //         !filters.category ||
// // //         filters.category.length === 0 ||
// // //         filters.category.includes(product.category?.toLowerCase() || "");

// // //       const discountString = product.discountPercentage
// // //         ? String(product.discountPercentage).toLowerCase()
// // //         : "";
// // //       const matchesDiscount =
// // //         !filters.discountPercentage ||
// // //         filters.discountPercentage.length === 0 ||
// // //         filters.discountPercentage.includes(discountString);

// // //       const matchesPrice =
// // //         !filters.priceRange ||
// // //         filters.priceRange.length === 0 ||
// // //         filters.priceRange.some((range) => {
// // //           const [min, max] = range.split("-").map(Number);
// // //           return product.price >= min && product.price <= max;
// // //         });

// // //       return matchesCategory && matchesDiscount && matchesPrice;
// // //     });

// // //     setFilteredProducts(filtered);
// // //   };

// // //   function addToCart(_product: Product): void {
// // //     throw new Error("Function not implemented.");
// // //   }

// // //   return (
// // //     <div className="flex gap-8">
// // //       <FilterSection onFiltersChange={handleFiltersChange} />
// // //       <div className="w-full">
// // //         {filteredProducts.length > 0 ? (
// // //           filteredProducts.map((product) => (
// // //             <div
// // //               key={product._id}
// // //               className="w-full p-4 bg-white border rounded-lg shadow-md flex flex-col md:flex-row gap-4 hover:shadow-lg transition-shadow"
// // //             >
// // //               <Link href={`/Pages/ShopGridDynamic/product/${product._id}`}>
// // //                 <div className="relative w-[250px] h-[180px] md:w-[300px] md:h-[230px] overflow-hidden rounded-lg">
// // //                   {product.image ? (
// // //                     <Image
// // //                       src={urlFor(product.image).url()}
// // //                       alt={product.name}
// // //                       layout="fill"
// // //                       objectFit="cover"
// // //                     />
// // //                   ) : (
// // //                     <p className="text-gray-500">No image available</p>
// // //                   )}
// // //                 </div>
// // //               </Link>
// // //               <div className="flex flex-col justify-between flex-1">
// // //                 <h3 className="text-lg font-bold text-gray-900">
// // //                   {product.name}
// // //                 </h3>
// // //                 <div className="flex items-center gap-2">
// // //                   <span className="text-xl font-semibold text-blue-600">
// // //                     ${product.price}
// // //                   </span>
// // //                   {product.discountPercentage && (
// // //                     <span className="text-red-500 line-through text-sm">
// // //                       $
// // //                       {product.price +
// // //                         (product.price * product.discountPercentage) / 200}
// // //                     </span>
// // //                   )}
// // //                 </div>
// // //                 <p className="text-gray-600 text-sm">{product.description}</p>
// // //                 <div className="flex items-center gap-4 mt-2">
// // //                   <button
// // //                     onClick={() => addToCart(product)}
// // //                     className="bg-blue-500 text-white px-4 py-2 rounded"
// // //                   >
// // //                     Add to Cart
// // //                   </button>
// // //                   <button className="px-4 py-2 bg-gray-200 text-gray-700 text-sm rounded-lg hover:bg-gray-300 transition">
// // //                     Wishlist
// // //                   </button>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           ))
// // //         ) : (
// // //           <p className="text-gray-600">No products found.</p>
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default ProductSection;


// // "use client";

// // import React, { useEffect, useState } from "react";
// // import FilterSection from "../Components/FilterSection";
// // import { client } from "@/sanity/lib/client";
// // import Image from "next/image";
// // import { urlFor } from "@/sanity/lib/image";
// // import { allProducts } from "@/sanity/lib/queries";
// // import Link from "next/link";
// // import { add, updateQuantity } from "../redux/cartslice";

// // interface Product {
// //   _id: string;
// //   name: string;
// //   image: string;
// //   price: number;
// //   quantity: number;
// //   discountPercentage: number;
// //   category: string;
// //   description: string;
// // }


// // const ProductSection = () => {
// //   const [products, setProducts] = useState<Product[]>([]);
// //   const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
// //   const [cart, setCart] = useState<Product[]>([]); // 🔥 Cart state added
// //   const [cartItems, setCartItems] = useState<{ [key: string]: boolean }>({}); 

// //   useEffect(() => {
// //     const fetchProducts = async () => {
// //       try {
// //         const fetchedProducts: Product[] = await client.fetch(allProducts);
// //         setProducts(fetchedProducts);
// //         setFilteredProducts(fetchedProducts);
// //       } catch (error) {
// //         console.error("Error fetching products:", error);
// //       }
// //     };

// //     fetchProducts();
// //   }, []);

// //   const handleFiltersChange = (filters: Record<string, string[]>) => {
// //     console.log("Filters applied:", filters);

// //     const filtered = products.filter((product) => {
// //       const matchesCategory =
// //         !filters.category ||
// //         filters.category.length === 0 ||
// //         filters.category.includes(product.category?.toLowerCase() || "");

// //       const discountString = product.discountPercentage
// //         ? String(product.discountPercentage).toLowerCase()
// //         : "";
// //       const matchesDiscount =
// //         !filters.discountPercentage ||
// //         filters.discountPercentage.length === 0 ||
// //         filters.discountPercentage.includes(discountString);

// //       const matchesPrice =
// //         !filters.priceRange ||
// //         filters.priceRange.length === 0 ||
// //         filters.priceRange.some((range) => {
// //           const [min, max] = range.split("-").map(Number);
// //           return product.price >= min && product.price <= max;
// //         });

// //       return matchesCategory && matchesDiscount && matchesPrice;
// //     });

// //     setFilteredProducts(filtered);
// //   };
// // const handleAddToCart = (product: Product) => {
// //     dispatch(add(product));
// //     setCartItems((prev) => ({ ...prev, [product._id]: true }));
// //   };

// //   const handleQuantityChange = (productId: string, newQuantity: number) => {
// //     if (newQuantity > 0) {
// //       setProducts((prevProducts) =>
// //         prevProducts.map((product) =>
// //           product._id === productId
// //             ? { ...product, quantity: newQuantity }
// //             : product
// //         )
// //       );
// //       dispatch(updateQuantity({ _id: productId, quantity: newQuantity }));
// //     }
// //   };
// //   return (
// //     <div className="flex gap-8">
// //       <FilterSection onFiltersChange={handleFiltersChange} />
// //       <div className="w-full">
// //         {filteredProducts.length > 0 ? (
// //           filteredProducts.map((product) => (
// //             <div
// //               key={product._id}
// //               className="w-full p-4 bg-white border rounded-lg shadow-md flex flex-col md:flex-row gap-4 hover:shadow-lg transition-shadow"
// //             >
// //               <Link href={`/Pages/ShopGridDynamic/product/${product._id}`}>
// //                 <div className="relative w-[250px] h-[180px] md:w-[300px] md:h-[230px] overflow-hidden rounded-lg">
// //                   {product.image ? (
// //                     <Image
// //                       src={urlFor(product.image).url()}
// //                       alt={product.name}
// //                       layout="fill"
// //                       objectFit="cover"
// //                     />
// //                   ) : (
// //                     <p className="text-gray-500">No image available</p>
// //                   )}
// //                 </div>
// //               </Link>
// //               <div className="flex flex-col justify-between flex-1">
// //                 <h3 className="text-lg font-bold text-gray-900">
// //                   {product.name}
// //                 </h3>
// //                 <div className="flex items-center gap-2">
// //                   <span className="text-xl font-semibold text-blue-600">
// //                     ${product.price}
// //                   </span>
// //                 </div>
// //                 <p className="text-gray-600 text-sm">{product.description}</p>
// //                 <div className="flex items-center gap-4 mt-2">
// //                   {cartItems[product._id] ? (
// //                 <div className="mt-4 flex items-center">
// //                   <button
// //                     onClick={() =>
// //                       handleQuantityChange(product._id, product.quantity - 1)
// //                     }
// //                     className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
// //                   >
// //                     -
// //                   </button>
// //                   <span className="mx-4">{product.quantity}</span>
// //                   <button
// //                     onClick={() =>
// //                       handleQuantityChange(product._id, product.quantity + 1)
// //                     }
// //                     className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
// //                   >
// //                     +
// //                   </button>
// //                 </div>
// //               ) : (
// //                 <button
// //                   onClick={() => handleAddToCart(product)}
// //                   className="w-full mt-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
// //                 >
// //                   Add to Cart
// //                 </button>
// //               )}
// //                   <button className="px-4 py-2 bg-gray-200 text-gray-700 text-sm rounded-lg hover:bg-gray-300 transition">
// //                     Wishlist
// //                   </button>
// //                 </div>
// //               </div>
// //             </div>
// //           ))
// //         ) : (
// //           <p className="text-gray-600">No products found.</p>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default ProductSection;
// // function dispatch(arg0: any) {
// //   throw new Error("Function not implemented.");
// // }

// // function setCartItems(arg0: (prev: any) => any) {
// //   throw new Error("Function not implemented.");
// // }



// "use client";

// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { RootState } from "../redux/store"; // Apne store ka correct path set karein
// import { add, updateQuantity } from "../redux/cartslice";
// import FilterSection from "../Components/FilterSection";
// import { client } from "@/sanity/lib/client";
// import Image from "next/image";
// import { urlFor } from "@/sanity/lib/image";
// import { allProducts } from "@/sanity/lib/queries";
// import Link from "next/link";

// interface Product {
//   _id: string;
//   name: string;
//   image: string;
//   price: number;
//   quantity: number;
//   discountPercentage: number;
//   category: string;
//   description: string;
// }

// const ProductSection = () => {
//   const dispatch = useDispatch();
//   const cart = useSelector((state: RootState) => state.cart.items);

//   const [products, setProducts] = useState<Product[]>([]);
//   const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const fetchedProducts: Product[] = await client.fetch(allProducts);
//         setProducts(fetchedProducts);
//         setFilteredProducts(fetchedProducts);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   const handleFiltersChange = (filters: Record<string, string[]>) => {
//     console.log("Filters applied:", filters);

//     const filtered = products.filter((product) => {
//       const matchesCategory =
//         !filters.category ||
//         filters.category.length === 0 ||
//         filters.category.includes(product.category?.toLowerCase() || "");

//       const discountString = product.discountPercentage
//         ? String(product.discountPercentage).toLowerCase()
//         : "";
//       const matchesDiscount =
//         !filters.discountPercentage ||
//         filters.discountPercentage.length === 0 ||
//         filters.discountPercentage.includes(discountString);

//       const matchesPrice =
//         !filters.priceRange ||
//         filters.priceRange.length === 0 ||
//         filters.priceRange.some((range) => {
//           const [min, max] = range.split("-").map(Number);
//           return product.price >= min && product.price <= max;
//         });

//       return matchesCategory && matchesDiscount && matchesPrice;
//     });

//     setFilteredProducts(filtered);
//   };

//   const handleAddToCart = (product: Product) => {
//     dispatch(add({ ...product, quantity: 1 }));
//   };

//   const handleQuantityChange = (productId: string, newQuantity: number) => {
//     if (newQuantity > 0) {
//       dispatch(updateQuantity({ _id: productId, quantity: newQuantity }));
//     }
//   };

//   return (
//     <div className="flex gap-8">
//       <FilterSection onFiltersChange={handleFiltersChange} />
//       <div className="w-full">
//         {filteredProducts.length > 0 ? (
//           filteredProducts.map((product) => {
//             const cartItem =cart?  cart.find((item: { _id: string; }) => item._id === product._id);
//             return (
//               <div
//                 key={product._id}
//                 className="w-full p-4 bg-white border rounded-lg shadow-md flex flex-col md:flex-row gap-4 hover:shadow-lg transition-shadow"
//               >
//                 <Link href={`/Pages/ShopGridDynamic/product/${product._id}`}>
//                   <div className="relative w-[250px] h-[180px] md:w-[300px] md:h-[230px] overflow-hidden rounded-lg">
//                     {product.image ? (
//                       <Image
//                         src={urlFor(product.image).url()}
//                         alt={product.name}
//                         layout="fill"
//                         objectFit="cover"
//                       />
//                     ) : (
//                       <p className="text-gray-500">No image available</p>
//                     )}
//                   </div>
//                 </Link>
//                 <div className="flex flex-col justify-between flex-1">
//                   <h3 className="text-lg font-bold text-gray-900">
//                     {product.name}
//                   </h3>
//                   <div className="flex items-center gap-2">
//                     <span className="text-xl font-semibold text-blue-600">
//                       ${product.price}
//                     </span>
//                   </div>
//                   <p className="text-gray-600 text-sm">{product.description}</p>
//                   <div className="flex items-center gap-4 mt-2">
//                     {cartItem ? (
//                       <div className="mt-4 flex items-center">
//                         <button
//                           onClick={() =>
//                             handleQuantityChange(product._id, cartItem.quantity - 1)
//                           }
//                           className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
//                         >
//                           -
//                         </button>
//                         <span className="mx-4">{cartItem.quantity}</span>
//                         <button
//                           onClick={() =>
//                             handleQuantityChange(product._id, cartItem.quantity + 1)
//                           }
//                           className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
//                         >
//                           +
//                         </button>
//                       </div>
//                     ) : (
//                       <button
//                         onClick={() => handleAddToCart(product)}
//                         className="w-full mt-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
//                       >
//                         Add to Cart
//                       </button>
//                     )}
//                     <button className="px-4 py-2 bg-gray-200 text-gray-700 text-sm rounded-lg hover:bg-gray-300 transition">
//                       Wishlist
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             );
//           })
//         ) : (
//           <p className="text-gray-600">No products found.</p>
//         )}
//         </div>
//         </div>
//       );
//     };

// export default ProductSection;


"use client";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store"; // Ensure correct path
import { add, updateQuantity } from "../redux/cartslice";
import FilterSection from "../Components/FilterSection";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { allProducts } from "@/sanity/lib/queries";
import Link from "next/link";

interface Product {
  _id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
  discountPercentage: number;
  category: string;
  description: string;
}

const ProductSection = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart.items) || []; // ✅ Safe default value

  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts: Product[] = await client.fetch(allProducts);
        setProducts(fetchedProducts);
        setFilteredProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleFiltersChange = (filters: Record<string, string[]>) => {
    console.log("Filters applied:", filters);

    const filtered = products.filter((product) => {
      const matchesCategory =
        !filters.category ||
        filters.category.length === 0 ||
        filters.category.includes(product.category?.toLowerCase() || "");

      const discountString = product.discountPercentage
        ? String(product.discountPercentage).toLowerCase()
        : "";
      const matchesDiscount =
        !filters.discountPercentage ||
        filters.discountPercentage.length === 0 ||
        filters.discountPercentage.includes(discountString);

      const matchesPrice =
        !filters.priceRange ||
        filters.priceRange.length === 0 ||
        filters.priceRange.some((range) => {
          const [min, max] = range.split("-").map(Number);
          return product.price >= min && product.price <= max;
        });

      return matchesCategory && matchesDiscount && matchesPrice;
    });

    setFilteredProducts(filtered);
  };

  const handleAddToCart = (product: Product) => {
    dispatch(add({ ...product, quantity: 1 }));
  };

  const handleQuantityChange = (productId: string, newQuantity: number) => {
    if (newQuantity > 0) {
      dispatch(updateQuantity({ _id: productId, quantity: newQuantity }));
    }
  };

  return (
    <div className="flex gap-8">
      <FilterSection onFiltersChange={handleFiltersChange} />
      <div className="w-full">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => {
            const cartItem = cart.find((item: { _id: string; }) => item._id === product._id); // ✅ Safe find

            return (
              <div
                key={product._id}
                className="w-full p-4 bg-white border rounded-lg shadow-md flex flex-col md:flex-row gap-4 hover:shadow-lg transition-shadow"
              >
                <Link href={`/Pages/ShopGridDynamic/product/${product._id}`}>
                  <div className="relative w-[250px] h-[180px] md:w-[300px] md:h-[230px] overflow-hidden rounded-lg">
                    {product.image ? (
                      <Image
                        src={urlFor(product.image).url()}
                        alt={product.name}
                        layout="fill"
                        objectFit="cover"
                      />
                    ) : (
                      <p className="text-gray-500">No image available</p>
                    )}
                  </div>
                </Link>
                <div className="flex flex-col justify-between flex-1">
                  <h3 className="text-lg font-bold text-gray-900">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-semibold text-blue-600">
                      ${product.price}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">{product.description}</p>
                  <div className="flex items-center gap-4 mt-2">
                    {cartItem ? (
                      <div className="mt-4 flex items-center">
                        <button
                          onClick={() =>
                            handleQuantityChange(product._id, cartItem.quantity - 1)
                          }
                          className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                        >
                          -
                        </button>
                        <span className="mx-4">{cartItem.quantity}</span>
                        <button
                          onClick={() =>
                            handleQuantityChange(product._id, cartItem.quantity + 1)
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
                    <button className="px-4 py-2 bg-gray-200 text-gray-700 text-sm rounded-lg hover:bg-gray-300 transition">
                      Wishlist
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-gray-600">No products found.</p>
        )}
      </div>
    </div>
  );
};

export default ProductSection;
