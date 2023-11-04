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
        img: img4,
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
        // img: rice4,
        name: 'rice e',
        category: 'rice',
        price: '500',
        description: 'Description of Rice e',
      },
    ]
  },

  // cart count items
  cartItems: [],
  countItems: 0,

  // function add cart and counter
  addCartItem: (item) => set((state) => {
    const existingItemIndex = state.cartItems.findIndex((cartItem) => cartItem.id === item.id);
  
    if (existingItemIndex !== -1) {
      // If the item already exists, increment its quantity and update the total price
      const updatedCartItems = [...state.cartItems];
      updatedCartItems[existingItemIndex].quantity += 1;
      updatedCartItems[existingItemIndex].totalPrice = updatedCartItems[existingItemIndex].price * updatedCartItems[existingItemIndex].quantity;
  
      return {
        countItems: state.countItems + 1,
        cartItems: updatedCartItems,
      };
    } else {
      // If the item doesn't exist, add it to the cart
      return {
        countItems: state.countItems + 1,
        cartItems: [...state.cartItems, { ...item, quantity: 1, totalPrice: item.price }],
      };
    }
  }),
  
}))
export default useFoodStore