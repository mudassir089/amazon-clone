import React from 'react'
import styled from 'styled-components'
import {Button} from '@material-ui/core'
import {useSelector,useDispatch} from 'react-redux'
import Cartitems from '../components/cartitems'
import {checkout} from '../services/addtocart'
import {useModal} from '../components/Modal'

function Cart() {
 
    const [toggle,Modaldiv] = useModal()
    const checkoutfn = () => {
        dispatch(checkout())
        toggle()
    }

    const dispatch = useDispatch()
    const cartitems = useSelector(state => state.cart.cart)
    const total = useSelector(state => state.cart.totalbilldisplay)

    return (
        <Cartdiv>
            {cartitems.length === 0 ? 
               <>
               <div className="cartinfo">
                <div className="imagediv">
                    <img src="https://m.media-amazon.com/images/G/01/cart/empty/kettle-desaturated._CB445243794_.svg" alt="" />
                </div>
                <div className="heading">
                    <h1>Your Amazon Cart is empty</h1>
                    <div className="btndiv">
                    <Button variant="contained" style={{backgroundColor:"#F7CA00",width:'15rem',paddin:'.8rem'}}>Sign in to your account</Button>
                    <Button variant="contained" style={{backgroundColor:"#Fff",width:'10rem',paddin:'.8rem'}}>Sign up</Button>
                    </div>
                </div>
            </div>
               </>
             : cartitems.map(item => {
                return <Cartitems data={item}/>
            })}
            
            <div className="carttotal">
                <h1>Total Amount</h1>
               <h2>{total}</h2>
               <Button variant="contained" style={{backgroundColor:"#F7CA00",width:'15rem',paddin:'.8rem',margin:"1rem auto"}} onClick={checkoutfn}>Checkout</Button>
                <Modaldiv/>
            </div>
        </Cartdiv>
    )
}

const Cartdiv = styled.div`
min-height: 100vh;
width: 100%;
background-color: #EAEDED !important;
position: relative;

.btndiv{
    display: flex;
    align-items: center;
    justify-content: space-around;
}

.imagediv{
    width: 300px;
    height: 200px;

    img{
        width: 100%;
        height: auto;
        /* object-fit: cover; */
    }
}

.headingdiv{
    max-width: 35rem;
    padding: 1rem;
    margin-left:2rem;

    h1{
        font-size: 2rem;
        text-align: start;
    }
}

.cartinfo{
    width: 75%;
    margin: 2rem 2rem;
    background-color: #fff;
    min-height: 45vh;
    display: flex;
    align-items: center;
    border-radius: .5rem;
    padding: 2rem;
    @media(max-width:768px){
        width: 100%;
        margin: auto;
    }
}

.carttotal{
    min-height: 20vh;
    width: 75%;
    margin:2rem 2rem;
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: .5rem;
    background-color: #fff;
    padding: 1rem;
    @media(max-width:768px){
        width: 90%;
        margin: auto;

    }

    h1,h2{
        text-align: center;
    }



}
`
export default Cart
