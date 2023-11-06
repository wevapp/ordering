import { create } from "zustand"

// import images
import img1 from '../images/Beef/promo1.png'
import img2 from '../images/Beef/promo2.png'
import img3 from '../images/Beef/promo3.png'
import img4 from '../images/Beef/promo4.png'
import img5 from '../images/Beef/promo5.png'
import img6 from '../images/Beef/promo6.png'
import img7 from '../images/Beef/promo7.png'
import img8 from '../images/Beef/promo8.png'
import img9 from '../images/Beef/promo9.png'
import img10 from '../images/Beef/promo10.png'

// import rice
import rice1 from '../images/Rice/rice1.png'
import rice2 from '../images/Rice/rice2.png'
import rice3 from '../images/Rice/rice3.png'
import rice4 from '../images/Rice/rice4.png'
import rice5 from '../images/Rice/rice5.png'
import rice6 from '../images/Rice/rice6.png'
import rice7 from '../images/Rice/rice7.png'
import rice8 from '../images/Rice/rice8.png'

const useFoodStore = create((set) => ({
  // state variable for all items
  foodItems: {
    items:[
      {
        id: 1,
        img: img1,
        name: 'meat a',
        category: 'meat',
        price: '500',
        description: 'Description of Meat a',
      },{
        id: 2,
        img: img2,
        name: 'meat b',
        category: 'meat',
        price: '500',
        description: 'Description of Meat b',
      },{
        id: 3,
        img: img3,
        name: 'meat c',
        category: 'meat',
        price: '500',
        description: 'Description of Meat c',
      },{
        id: 4,
        img: img10,
        name: 'meat d',
        category: 'meat',
        price: '500',
        description: 'Description of Meat d',
      },{
        id: 5,
        img: img5,
        name: 'meat e',
        category: 'meat',
        price: '500',
        description: 'Description of Meat e',
      },{
        id: 6,
        img: img6,
        name: 'meat f',
        category: 'meat',
        price: '500',
        description: 'Description of Meat f',
      },{
        id: 7,
        img: img7,
        name: 'meat g',
        category: 'meat',
        price: '500',
        description: 'Description of Meat g',
      },{
        id: 8,
        img: img8,
        name: 'meat h',
        category: 'meat',
        price: '500',
        description: 'Description of Meat h',
      },{
        id: 9,
        img: img9,
        name: 'meat i',
        category: 'meat',
        price: '500',
        description: 'Description of Meat i',
      },{
        id: 10,
        img: rice1,
        name: 'rice a',
        category: 'rice',
        price: '500',
        description: 'Description of Rice a',
      },{
        id: 11,
        img: rice2,
        name: 'rice b',
        category: 'rice',
        price: '500',
        description: 'Description of Rice b',
      },{
        id: 12,
        img: rice3,
        name: 'rice c',
        category: 'rice',
        price: '500',
        description: 'Description of Rice c',
      },{
        id: 13,
        img: rice4,
        name: 'rice d',
        category: 'rice',
        price: '500',
        description: 'Description of Rice d',
      },{
        id: 14,
        img: rice5,
        name: 'rice e',
        category: 'rice',
        price: '500',
        description: 'Description of Rice e',
      },{
        id: 15,
        img: rice6,
        name: 'rice f',
        category: 'rice',
        price: '500',
        description: 'Description of Rice f',
      },{
        id: 16,
        img: rice7,
        name: 'rice g',
        category: 'rice',
        price: '500',
        description: 'Description of Rice g',
      },{
        id: 17,
        img: rice8,
        name: 'rice h',
        category: 'rice',
        price: '500',
        description: 'Description of Rice h',
      },
    ]
  },

  // cart count items
  cartItems: [],
  countItems: 0,

  // Initialize totalCost to 0 
  totalCost: 0,

  // Define receipt number to 0
  countReceiptNumbers: 0,

  // function to add receipt number
  incrementReceiptNumber: () => set((state) => ({
    countReceiptNumbers: state.countReceiptNumbers + 1

  })),

   // Function to clear cartItems
   clearCartItems: () => set((state) => ({
    cartItems: [],
    countItems: 0,
    totalCost: 0,
  })),

  // function add cart and counter
  addCartItem: (item) =>
  set((state) => {
    const existingItemIndex = state.cartItems.findIndex(
      (cartItem) => cartItem.id === item.id
    );

    if (existingItemIndex !== -1) {
      const updatedCartItems = [...state.cartItems];
      updatedCartItems[existingItemIndex].quantity += 1;

      // Convert the price to a number and update the total price
      const itemPrice = parseFloat(updatedCartItems[existingItemIndex].price);
      updatedCartItems[existingItemIndex].totalPrice =
        itemPrice * updatedCartItems[existingItemIndex].quantity;

      // Convert the total cost to a number
      const newTotalCost = state.totalCost + itemPrice;

      return {
        countItems: state.countItems + 1,
        cartItems: updatedCartItems,
        totalCost: newTotalCost,
      };
    } else {
      // Convert the price to a number
      const itemPrice = parseFloat(item.price);

      // Convert the total cost to a number
      const newTotalCost = state.totalCost + itemPrice;

      return {
        countItems: state.countItems + 1,
        cartItems: [...state.cartItems, { ...item, quantity: 1, totalPrice: itemPrice }],
        totalCost: newTotalCost,
      };
    }
  }),

    // Function to removed Item
    removeItem: (id) =>
    set((state) => {
      const itemToRemove = state.cartItems.find((item) => item.id === id);
  
      if (!itemToRemove) {
        return state;
      }
  
      // Calculate the updated total cost by subtracting the total price of the removed item
      const updatedTotalCost = state.totalCost - itemToRemove.totalPrice;
  
      // Calculate the updated countItems value by subtracting the quantity of the item being removed
      const updatedCountItems = state.countItems - itemToRemove.quantity;
  
      // Filter out the item to remove from cartItems
      const updatedCartItems = state.cartItems.filter((item) => item.id !== id);
  
      return {
        cartItems: updatedCartItems,
        countItems: updatedCountItems,
        totalCost: updatedTotalCost, // Update the totalCost
      };
    }),    
}))
export default useFoodStore