import { create } from "zustand";

// State Management for Login and Register
const useRegisterStore = create((set) => ({
    
    // State Variable
    users: [
        {
            address: "Calero",
            birthday: "2023-11-05",
            confirmPassword: "123",
            contact: "09",
            email: "e@gmail.com",
            fullname: "Raymond Estrella",
            gender: "male",
            password: "123",
            username: "mond"
        },{
            address: "Calero",
            birthday: "2023-11-05",
            confirmPassword: "123",
            contact: "09",
            email: "e@gmail.com",
            fullname: "Raymond Estrella",
            gender: "male",
            password: "12345",
            username: "ray"
        },


    ],

    // Function to add new user
    addUser: (user) => set((state) => ({ users: [...state.users, user] })),
}));

export default useRegisterStore;

