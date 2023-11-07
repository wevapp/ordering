import { create } from "zustand"

// import meat
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

// import juices
import jus1 from '../images/Juices/juice1.png'
import jus2 from '../images/Juices/juice2.png'
import jus3 from '../images/Juices/juice3.png'
import jus4 from '../images/Juices/juice4.png'
import jus5 from '../images/Juices/juice5.png'

// import dessert
import des1 from '../images/Dessert/des1.png'
import des2 from '../images/Dessert/des2.png'
import des3 from '../images/Dessert/des3.png'
import des4 from '../images/Dessert/des4.png'
import des5 from '../images/Dessert/des5.png'
import des6 from '../images/Dessert/des6.png'
import des7 from '../images/Dessert/des7.png'
import des8 from '../images/Dessert/des8.png'

// import soda
import soda1 from '../images/Soda/soda1.jpg'
import soda2 from '../images/Soda/soda2.jpg'
import soda3 from '../images/Soda/soda3.jpg'
import soda4 from '../images/Soda/soda4.jpg'

const useFoodStore = create((set) => ({
  // define variable for all items
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
      },{ // juices -------------------------------
        id: 18,
        img: jus1,
        name: 'jus a',
        category: 'juice',
        price: '500',
        description: 'Description of jus a',
      },{
        id: 19,
        img: jus2,
        name: 'jus b',
        category: 'juice',
        price: '500',
        description: 'Description of jus b',
      },{
        id: 20,
        img: jus3,
        name: 'jus c',
        category: 'juice',
        price: '500',
        description: 'Description of jus c',
      },{
        id: 21,
        img: jus4,
        name: 'jus d',
        category: 'juice',
        price: '500',
        description: 'Description of jus d',
      },{
        id: 22,
        img: jus5,
        name: 'jus e',
        category: 'juice',
        price: '500',
        description: 'Description of jus e',
      },{ // Dessert --------------------------
        id: 23,
        img: des1,
        name: 'des a',
        category: 'dessert',
        price: '500',
        description: 'Description of dessert a',
      },{ 
        id: 24,
        img: des2,
        name: 'des b',
        category: 'dessert',
        price: '500',
        description: 'Description of dessert b',
      },{ 
        id: 25,
        img: des3,
        name: 'des c',
        category: 'dessert',
        price: '500',
        description: 'Description of dessert c',
      },{ 
        id: 26,
        img: des4,
        name: 'des d',
        category: 'dessert',
        price: '500',
        description: 'Description of dessert d',
      },{ 
        id: 27,
        img: des5,
        name: 'des e',
        category: 'dessert',
        price: '500',
        description: 'Description of dessert e',
      },{ 
        id: 28,
        img: des6,
        name: 'des f',
        category: 'dessert',
        price: '500',
        description: 'Description of dessert f',
      },{ 
        id: 29,
        img: des7,
        name: 'des g',
        category: 'dessert',
        price: '500',
        description: 'Description of dessert g',
      },{ 
        id: 30,
        img: des8,
        name: 'des h',
        category: 'dessert',
        price: '500',
        description: 'Description of dessert h',
      },{ // Soda ----------------------------
        id: 31,
        img: soda1,
        name: 'soda a',
        category: 'soda',
        price: '500',
        description: 'Description of soda a',
      },{ 
        id: 32,
        img: soda2,
        name: 'soda b',
        category: 'soda',
        price: '500',
        description: 'Description of soda b',
      },{ 
        id: 33,
        img: soda3,
        name: 'soda c',
        category: 'soda',
        price: '500',
        description: 'Description of soda c',
      },{ 
        id: 34,
        img: soda4,
        name: 'soda d',
        category: 'soda',
        price: '500',
        description: 'Description of soda d',
      },
    ]
  },

  // cart count items and stored all purchase items
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

// Function to edit the quantity of an item in the cart
editQuantity: (id, newQuantity) =>
  set((state) => {
    const updatedCartItems = state.cartItems.map((item) => {
      if (item.id === id) {
        // Calculate the change in quantity
        const quantityChange = newQuantity - item.quantity;

        // Update the quantity and total price of the specific item
        item.quantity = newQuantity;
        item.totalPrice = parseFloat(item.price) * newQuantity;

        // Update countItems by adding the quantity change
        state.countItems += quantityChange;
      }
      return item;
    });

    const updatedTotalCost = updatedCartItems.reduce(
      (total, item) => total + item.totalPrice,
      0
    );

    return {
      cartItems: updatedCartItems,
      totalCost: updatedTotalCost,
    };
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