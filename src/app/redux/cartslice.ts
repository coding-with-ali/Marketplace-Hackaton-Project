// // // // "use client"
// // // // import{ createSlice, PayloadAction} from "@reduxjs/toolkit";

// // // // interface CartItem {
// // // //     id: string;
// // // //     name: string;
// // // //     price: number;
// // // //     image: string;
// // // //     quantity?: number;
// // // // }

// // // // const cartSlice = createSlice({
// // // //     name: "Cart",
// // // //     initialState: [] as CartItem[],
// // // //     reducers: {
// // // //         add(state, action: PayloadAction<CartItem>){
// // // //         state.push(action.payload);
// // // //         },
// // // //         remove(state, action: PayloadAction<string>){
// // // //             return state.filter((item) => item.id !== action.payload);
// // // //     },
// // // //     },
// // // //     });

// // // //     export const { add, remove } = cartSlice.actions;
// // // //     export default cartSlice.reducer;


// // // // cartslice.ts
// import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// interface CartItem {
//   id: string;
//   name: string;
//   price: number;
//   image: any;
//   quantity: number;
// }

// interface CartState {
//   items: CartItem[];
// }

// const initialState: CartState = {
//   items: [],
// };

// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     add: (state, action: PayloadAction<CartItem>) => {
//       const existingItem = state.items.find((item) => item.id === action.payload.id);
//       if (existingItem) {
//         existingItem.quantity += action.payload.quantity;
//       } else {
//         state.items.push(action.payload);
//       }
//     },
//     remove: (state, action: PayloadAction<string>) => {
//       state.items = state.items.filter((item) => item.id !== action.payload);
//     },
//     updateQuantity: (state, action: PayloadAction<{ id: string; quantity: number }>) => {
//       const item = state.items.find((item) => item.id === action.payload.id);
//       if (item) {
//         item.quantity = action.payload.quantity;
//       }
//     },
//   },
// });

// export const { add, remove, updateQuantity } = cartSlice.actions;
// export default cartSlice.reducer;



// // // // import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// // // // interface CartItem {
// // // //   id: string;
// // // //   name: string;
// // // //   price: number;
// // // //   image: any;
// // // //   quantity: number;
// // // // }

// // // // interface CartState {
// // // //   items: CartItem[];
// // // // }

// // // // const initialState: CartState = {
// // // //   items: JSON.parse(localStorage.getItem("cart") || "[]"),
// // // // };

// // // // const cartSlice = createSlice({
// // // //   name: "cart",
// // // //   initialState,
// // // //   reducers: {
// // // //     addToCart: (state, action: PayloadAction<CartItem>) => {
// // // //       const existingItem = state.items.find((item) => item.id === action.payload.id);
// // // //       if (existingItem) {
// // // //         existingItem.quantity += action.payload.quantity;
// // // //       } else {
// // // //         state.items.push(action.payload);
// // // //       }
// // // //       localStorage.setItem("cart", JSON.stringify(state.items));
// // // //     },
// // // //     remove: (state, action: PayloadAction<string>) => {
// // // //       state.items = state.items.filter((item) => item.id !== action.payload);
// // // //       localStorage.setItem("cart", JSON.stringify(state.items));
// // // //     },
// // // //     updateQuantity: (state, action: PayloadAction<{ id: string; quantity: number }>) => {
// // // //       const item = state.items.find((item) => item.id === action.payload.id);
// // // //       if (item) {
// // // //         item.quantity = action.payload.quantity;
// // // //       }
// // // //       localStorage.setItem("cart", JSON.stringify(state.items));
// // // //     },
// // // //   },
// // // // });

// // // // export const { addToCart, remove, updateQuantity } = cartSlice.actions;
// // // // export default cartSlice.reducer;


// // // import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// // // interface CartItem {
// // //   id: string;
// // //   name: string;
// // //   price: number;
// // //   image: any;
// // //   quantity: number;
// // // }

// // // interface CartState {
// // //   items: CartItem[];
// // // }

// // // const initialState: CartState = {
// // //   items: [],
// // // };

// // // const cartSlice = createSlice({
// // //   name: "cart",
// // //   initialState,
// // //   reducers: {
// // //     addToCart: (state, action: PayloadAction<CartItem>) => {
// // //       const existingItem = state.items.find(
// // //         (item) => item.id === action.payload.id
// // //       );
// // //       if (existingItem) {
// // //         // If the item exists, update its quantity
// // //         existingItem.quantity += action.payload.quantity;
// // //       } else {
// // //         // If the item doesn't exist, add it to the cart
// // //         state.items.push({ ...action.payload });
// // //       }
// // //       // Persist to local storage
// // //       localStorage.setItem("cart", JSON.stringify(state.items));
// // //     },
// // //     remove: (state, action: PayloadAction<string>) => {
// // //       // Remove the item from the cart by id
// // //       state.items = state.items.filter((item) => item.id !== action.payload);
// // //       localStorage.setItem("cart", JSON.stringify(state.items));
// // //     },
// // //     updateQuantity: (
// // //       state,
// // //       action: PayloadAction<{ id: string; quantity: number }>
// // //     ) => {
// // //       const item = state.items.find((item) => item.id === action.payload.id);
// // //       if (item) {
// // //         item.quantity = action.payload.quantity;
// // //       }
// // //       localStorage.setItem("cart", JSON.stringify(state.items));
// // //     },
// // //   },
// // // });

// // // export const { addToCart, remove, updateQuantity } = cartSlice.actions;
// // // export default cartSlice.reducer;


// // import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// // interface CartItem {
// //   id: string;
// //   name: string;
// //   price: number;
// //   image: any;
// //   quantity: number;
// // }

// // interface CartState {
// //   items: CartItem[];
// // }

// // const initialState: CartState = {
// //   items: [],
// // };

// // const cartSlice = createSlice({
// //   name: "cart",
// //   initialState,
// //   reducers: {
// //     addToCart: (state, action: PayloadAction<CartItem>) => {
// //       const existingItem = state.items.find(
// //         (item) => item.id === action.payload.id
// //       );
// //       if (existingItem) {
// //         // If item already exists, increase its quantity
// //         existingItem.quantity += action.payload.quantity;
// //       } else {
// //         // Add new product to cart
// //         state.items.push({ ...action.payload });
// //       }
// //       // Save cart state to local storage
// //       localStorage.setItem("cart", JSON.stringify(state.items));
// //     },
// //     remove: (state, action: PayloadAction<string>) => {
// //       // Remove item by ID
// //       state.items = state.items.filter((item) => item.id !== action.payload);
// //       // Update local storage
// //       localStorage.setItem("cart", JSON.stringify(state.items));
// //     },
// //     updateQuantity: (
// //       state,
// //       action: PayloadAction<{ id: string; quantity: number }>
// //     ) => {
// //       const item = state.items.find((item) => item.id === action.payload.id);
// //       if (item && action.payload.quantity > 0) {
// //         item.quantity = action.payload.quantity;
// //       }
// //       localStorage.setItem("cart", JSON.stringify(state.items));
// //     },
// //     loadCart: (state) => {
// //       const savedCart = localStorage.getItem("cart");
// //       if (savedCart) {
// //         state.items = JSON.parse(savedCart);
// //       }
// //     },
// //   },
// // });

// // export const { addToCart, remove, updateQuantity, loadCart } = cartSlice.actions;
// // export default cartSlice.reducer;






// "use client";
// import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// interface CartItem {
//   quantity: number;
//   id: string;
//   name: string;
//   price: number;
//   image: string;
// }

// const cartSlice = createSlice({
//   name: "Cart",
//   initialState: [] as CartItem[],
//   reducers: {
//     add(state, action: PayloadAction<CartItem>) {
//       state.push(action.payload);
//     },
//     remove(state, action: PayloadAction<string>) {
//       return state.filter((item) => item.id !== action.payload);
//     },
//   },
// });

// export const { add, remove } = cartSlice.actions;
// export default cartSlice.reducer;

// "use client";
// import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// interface CartItem {
//   quantity: number;
//   id: string; // Identifier for each product
//   name: string;
//   price: number;
//   image: string;
// }

// const cartSlice = createSlice({
//   name: "Cart",
//   initialState: [] as CartItem[],
//   reducers: {
//     // Add a product as a new entry in the cart
//     add(state, action: PayloadAction<CartItem>) {
//       state.push(action.payload);
//     },

//     // Remove a product by id
//     remove(state, action: PayloadAction<string>) {
//       return state.filter((item) => item.id !== action.payload);
//     },

//     // Update the quantity of a specific product by its index in the cart
//     updateQuantity(
//       state,
//       action: PayloadAction<{ index: number; quantity: number }>
//     ) {
//       const { index, quantity } = action.payload;
//       if (state[index]) {
//         state[index].quantity = quantity;
//       }
//     },
//   },
// });

// export const { add, remove, updateQuantity } = cartSlice.actions;
// export default cartSlice.reducer;



"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  quantity: number;
  _id: string;
  name: string;
  price: number;
  image: string;
}

const cartSlice = createSlice({
  name: "Cart",
  initialState: [] as CartItem[],
  reducers: {
    add(state, action: PayloadAction<CartItem>) {
      const existingItem = state.find((item) => item._id === action.payload._id);
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.push(action.payload);
      }
    },
    updateQuantity(state, action: PayloadAction<{ _id: string; quantity: number }>) {
      const item = state.find((item) => item._id === action.payload._id);
      if (item) {
        item.quantity = action.payload.quantity;
      }
    },
    remove(state, action: PayloadAction<string>) {
      return state.filter((item) => item._id !== action.payload);
    },
  },
});

export const { add, updateQuantity, remove } = cartSlice.actions;
export default cartSlice.reducer;
