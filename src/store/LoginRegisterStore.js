import { create } from "zustand";

// State Management for Login and Register
const useRegisterStore = create((set) => ({
    
    // State Variable
    users: [
        {
            fullname: 'Raymond Estrella',
            username: 'aaa',
            password: '12345'
        }
    ],

    // Function to add new user
    addUser: (user) => set((state) => ({ users: [...state.users, user] })),
}));

export default useRegisterStore;

