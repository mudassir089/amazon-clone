import {configureStore} from '@reduxjs/toolkit'
import {fakestoreapi} from './services/fakestoreapi'
import {menclothing} from './services/menclothing'
import {womenclothing} from './services/womenclothing'
import { electronics } from './services/electronics'
import cartreducer from './services/addtocart'


const store = configureStore({
    reducer:{
      [menclothing.reducerPath] : menclothing.reducer,
      [womenclothing.reducerPath] : womenclothing.reducer,
      [electronics.reducerPath] : electronics.reducer,
      [fakestoreapi.reducerPath] : fakestoreapi.reducer,
      cart:cartreducer
    }
})

export default store