import { configureStore } from "@reduxjs/toolkit";
import employee from "../redux/employee";

const store = configureStore({
    reducer:{
        employee 
    }
})

export default store