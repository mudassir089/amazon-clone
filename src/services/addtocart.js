import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    cart:localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [],
    totalbill:[],
    totalbilldisplay:localStorage.getItem('totalbilldisplay') ? JSON.parse(localStorage.getItem('totalbilldisplay')) : 0,
    checkout:localStorage.getItem('finalproduct') ? JSON.parse(localStorage.getItem('finalproduct')) : [],
}

export const Cartslice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addtocart: (state,{payload}) => {
            state.cart.push({
                id:payload.id,
                image:payload.image,
                title:payload.title,
                description:payload.description,
                price:payload.price,
                qty:1,
                rating:payload.rating.rate,
            })
            state.totalbill.push({
                total:payload.price,
                id:payload.id
            })
            localStorage.setItem('cart',JSON.stringify(state.cart))
        },
        removecartitem:(state,{payload}) => {
            state.cart = payload
        },
        totalamount: (state,{payload}) => {
          state.totalbilldisplay = state.totalbill.reduce((acc,curr) =>{
                return acc + curr.total
            },0)
            localStorage.setItem('totalbilldisplay',JSON.stringify(state.totalbilldisplay))
        },
        removingtotalamount: (state,{payload}) => {
            state.totalbill = payload
        
        },
        increment: (state,action) => {
            const item = state.cart.find((state) => state.id === action.payload.id)
            if(item){
                item.qty = action.payload.qty + 1
                
            }else{
                state.cart.push(item)
            }
        },
        decrement: (state,action) => {
            const item = state.cart.find((state) => state.id === action.payload.id)
            if(item){
                item.qty = action.payload.qty - 1
            }else{
                state.cart.push(item)
            }
        },
        checkout: (state,payload) => {
            state.checkout = state.cart
            localStorage.setItem('finalproduct',JSON.stringify(state.checkout))
            localStorage.removeItem('cart')
            localStorage.removeItem('totalbilldisplay')
            
        }
        
    }
})

export const {addtocart,removecartitem,totalamount,removingtotalamount,increment,decrement,checkout} = Cartslice.actions
export default Cartslice.reducer