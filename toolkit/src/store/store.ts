import {configureStore} from '@reduxjs/toolkit'
import {cardSlice} from "./card-slice.ts";



export const  store = configureStore({
    reducer : {
        cart : cardSlice.reducer,
    },
})

