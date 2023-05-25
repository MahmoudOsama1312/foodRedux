import { configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import cakeSlice from './cakeSlice';
import chickenSlice from './chickenSlice';
import cinnabonSlice from './cinnabonSlice';
import donutsSlice from './donutsSlice';
import iceCreamSlice from './iceCreamSlice';
import pastaSlice from './pastaSlice';
import Xx from './pizzaSlice'; // i can give the Slice file any name i want bra7ty  
import seafoodSlice from './seafoodSlice';

const store = configureStore({
    reducer: {    // pizza : is the name of the reducer fel Store [ i can give it br7ty ,it is a key]
                       //(el reducer b2a da el ana 3mlto [  el hwa el Slice ])
    pizza: Xx,
    pasta: pastaSlice,  // Important Note : el Key , hwa el bast5dmo fel Component b2a ( which means b store el slice gwah)
    chicken: chickenSlice,
    seafood: seafoodSlice,
    icecream: iceCreamSlice,
    donuts: donutsSlice,
    cinnabon: cinnabonSlice,
    cake :cakeSlice
  },
  middleware: [thunkMiddleware],
});

export default store;
