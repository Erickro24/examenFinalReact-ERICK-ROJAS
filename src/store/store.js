import { configureStore } from "@reduxjs/toolkit";
import  counterReducer  from "./features/counter/counterSlice.js";
//import {userProduct} from "./features/user/userProduct.js";
import formReducer from './features/forms/formSlice.js'

const store = configureStore({
    reducer: {
        // Define your reducers here
        counter: counterReducer,
        //product: userProduct,
        // product: ProductReducer,
        form: formReducer

    },
});
export default store;