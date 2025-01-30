// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import React, { useState, useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { add } from "../../../../redux/cartslice"; // Redux slice
// import { client } from "@/sanity/lib/client";
// import { urlFor } from "@/sanity/lib/image";
// import Notification from "@/app/Components/notification";

// // Define the props type explicitly
// interface ProductDetailProps {
//   params: { id: string };
// }

// interface Product {
//   _id: string;
//   name: string;
//   price: number;
//   oldPrice?: number;
//   description: string;
//   category: string;
//   image: any;
//   quantity: number;
// }

// const ProductDetail: React.FC<ProductDetailProps> = ({ params }) => {
//   const [product, setProduct] = useState<Product | null>(null);
//   const [quantity, setQuantity] = useState(1);
//   const [loading, setLoading] = useState(true);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const getProduct = async () => {
//       try {
//         const data = await client.fetch(
//           `*[_type == "product" && _id == $id][0]`,
//           { id: params.id } // ✅ Correctly accessing params.id
//         );
//         setProduct({ ...data, quantity: 1 });
//       } catch (error) {
//         console.error("Error fetching product:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     getProduct();
//   }, [params]);

//   const handleAddToCart = () => {
//     if (product) {
//       dispatch(add({ ...product, quantity }));
//     }
//   };

//   if (loading) {
//     return (
//       <div className="w-full h-screen flex justify-center items-center">
//         <p className="text-lg font-semibold">Loading product details...</p>
//       </div>
//     );
//   }

//   if (!product) {
//     return (
//       <div className="w-full h-screen flex justify-center items-center">
//         <p className="text-lg text-red-500 font-semibold">Product not found.</p>
//       </div>
//     );
//   }

//   return (
//     <div>
//       {/* Header Section */}
//       <div className="w-full h-[286px] bg-[#F6F5FF] relative">
//         <div className="absolute top-48 left-10 md:top-20 md:left-60">
//           <h2 className="text-[#101750] font-[Josefin Sans] text-[26px] md:text-[36px] font-[700]">
//             Product Details
//           </h2>
//           <Link href="/" className="px-2">
//             Home
//           </Link>
//           <span className="px-2">/</span>
//           <span className="text-[#FB2E86] text-[16px] font-[500] px-2">
//             Product Details
//           </span>
//         </div>
//       </div>

//       {/* Product Details Section */}
//       <div className="max-w-7xl mx-auto p-6 my-20">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {/* Product Image */}
//           <div className="w-[500px] h-[350px] p-5 border rounded-lg overflow-hidden">
//             <Image
//               src={urlFor(product.image).url()}
//               alt={product.name}
//               width="900"
//               height="900"
//               loading="lazy"
//               className="w-[450px] h-[300px] object-cover"
//             />
//           </div>

//           {/* Product Info */}
//           <div className="space-y-4">
//             <h1 className="text-[36px] font-semibold">{product.name}</h1>
//             <p className="text-[#A9ACC6] text-[16px]">{product.description}</p>
//             <div className="flex items-center space-x-4">
//               <span className="text-[24px] font-semibold text-gray-800">
//                 ${product.price}
//               </span>
//               {product.oldPrice && (
//                 <span className="line-through text-[20px] text-[#FB2E86]">
//                   ${product.oldPrice}
//                 </span>
//               )}
//             </div>
//              <span className="text-[20px]">
//                  Category : {product.category}
//                 </span>

//             {/* Notification Component */}
//             <Notification
//               product={{ _id: product._id, name: product.name, quantity }}
//               onAddToCart={handleAddToCart}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetail;




"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { add } from "../../../../redux/cartslice"; // Redux slice
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Notification from "@/app/Components/notification";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

// Define the props type explicitly
interface ProductDetailProps {
  params: { id: string };
}

interface Product {
  _id: string;
  name: string;
  price: number;
  oldPrice?: number;
  description: string;
  category: string;
  image: any;
  quantity: number;
  rating?: number;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ params }) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const data = await client.fetch(
          `*[_type == "product" && _id == $id][0]`,
          { id: params.id }
        );
        setProduct({ ...data, quantity: 1 });
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    getProduct();
  }, [params]);

  const handleAddToCart = () => {
    if (product) {
      dispatch(add({ ...product, quantity }));
    }
  };

  const renderStars = (rating: number = 0) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    return (
      <div className="flex space-x-1 text-yellow-500">
        {[...Array(fullStars)].map((_, i) => (
          <FaStar key={i} />
        ))}
        {halfStar && <FaStarHalfAlt />}
        {[...Array(5 - fullStars - (halfStar ? 1 : 0))].map((_, i) => (
          <FaRegStar key={i} />
        ))}
      </div>
    );
  };

  if (loading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <p className="text-lg font-semibold">Loading product details...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <p className="text-lg text-red-500 font-semibold">Product not found.</p>
      </div>
    );
  }

  return (
    <div>
      {/* Header Section */}
      <div className="w-full h-[286px] bg-[#F6F5FF] relative">
        <div className="absolute top-48 left-10 md:top-20 md:left-60">
          <h2 className="text-[#101750] font-[Josefin Sans] text-[26px] md:text-[36px] font-[700]">
            Product Details
          </h2>
          <Link href="/" className="px-2">
            Home
          </Link>
          <span className="px-2">/</span>
          <span className="text-[#FB2E86] text-[16px] font-[500] px-2">
            Product Details
          </span>
        </div>
      </div>

      {/* Product Details Section */}
      <div className="max-w-7xl mx-auto p-6 my-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="w-[500px] h-[350px] p-5 border rounded-lg overflow-hidden">
            <Image
              src={urlFor(product.image).url()}
              alt={product.name}
              width="900"
              height="900"
              loading="lazy"
              className="w-[450px] h-[300px] object-cover"
            />
          </div>

          {/* Product Info */}
          <div className="space-y-4">
            <h1 className="text-[36px] font-semibold">{product.name}</h1>
            <p className="text-[#A9ACC6] text-[16px]">{product.description}</p>
            {renderStars(product.rating)}
            <div className="flex items-center space-x-4">
              <span className="text-[24px] font-semibold text-gray-800">
                ${product.price}
              </span>
              {product.oldPrice && (
                <span className="line-through text-[20px] text-[#FB2E86]">
                  ${product.oldPrice}
                </span>
              )}
            </div>
            <span className="text-[20px]">Category : {product.category}</span>

            {/* Notification Component */}
            <Notification
              product={{ _id: product._id, name: product.name, quantity }}
              onAddToCart={handleAddToCart}
            />

            {/* Social Media Share Buttons */}
            <div className="flex space-x-4 mt-4">
              <Link href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`} target="_blank">
                <FaFacebook className="text-blue-600 text-2xl" />
              </Link>
              <Link href={`https://www.instagram.com`} target="_blank">
                <FaInstagram className="text-pink-500 text-2xl" />
              </Link>
              <Link href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`} target="_blank">
                <FaLinkedin className="text-blue-700 text-2xl" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
