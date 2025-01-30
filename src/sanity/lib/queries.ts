import { groq } from "next-sanity";

export const allProducts = groq`*[_type == 'product']`;

export const featured = groq`*[_type == 'product' && 'isFeaturedProduct' ]`
export const four = groq`*[_type == 'product'][0..3]`;
export const five = groq`*[_type == 'product'][4..7]`;
export const six = groq`*[_type == 'product'][6..12]`;

export const singleProductQuery = `
  *[_type == "product" && _id == $id][0]{
    _id,
    name,
    price,
    description,
    image
  }
`;

export const allProductsQuery = `
  *[_type == "product"]{
    _id,
    name,
    price,
    description,
    image {
      asset-> {
        url
      }
    }
  }
`;

// export const searchProductsByName = async (searchParam: string) => {
//   const PRODUCT_SEARCH_QUERY = defineQuery(
//     `*[_type == "product" && name match $searchParam] | order(name asc)`
//   );

//   try {
//     const products = await sanityFetch({
//       query: PRODUCT_SEARCH_QUERY,
//       params: {
//         searchParam: `${searchParam}`,
//       },
//     });
//     return products?.data || [];
//   } catch (error) {
//     console.error("Error fetching products by name:", error);
//     return [];
//   }
// };