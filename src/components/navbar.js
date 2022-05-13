import React,{useState} from 'react'
import styled from 'styled-components'
import amazonimg from '../images/amazon-2.svg'
import {LocationOff,Search,ShoppingCart,MenuOpen} from '@material-ui/icons'
import {Link} from 'react-router-dom'
import {Input} from 'antd'
import {useSelector} from 'react-redux'




function Navbar() {

const {Search} = Input

const [toggle,settoggle] = useState(true)
const cartitems = useSelector(state => state.cart.cart)


    return (
        <Navbardiv className={toggle ? 'collapse' : ''}>
            <MenuOpen className="display" onClick={() => settoggle(!toggle)}/>
            <Link to="/">
            <Logo>
                <img src={amazonimg} alt="amazon" />
            </Logo>
            </Link>
            <Deliver>
                <LocationOff style={{color:'#fff'}}/>
                <h3>Deliver to Pakistan</h3>
            </Deliver>
            <Searchbar>
            <Search placeholder="input search text" enterButton/>
            </Searchbar>

            <Signin>
                <h3>hello sign in</h3>
                <h2>accounts and list</h2>
            </Signin>
            <Signin>
                <h3>returns</h3>
                <h2>and orders</h2>
            </Signin>
            <Link to="/user/cart">
            <Cartdiv>
                <div>
                    <h5>{cartitems && cartitems.length}</h5>
                    <ShoppingCart style={{color:'#fff'}}/>
                </div>
                <div>
                    <h2>Cart</h2>
                </div>
            </Cartdiv>
            </Link>
        </Navbardiv>
    )
}

const Navbardiv = styled.div`
width: 100%;
display: flex;
align-items: center;
min-height: 8vh;
padding: .5rem;
background-color: #131921;
transition: all 0.5s ease;
overflow: hidden;

@media (max-width:960px){
    flex-direction: column;
    width:100%;
    align-items: center;
    text-align:center;
    height:75vh;
}
`

const Logo = styled.div`
width: 70px;
height: 9vh;
margin-left: .5rem;
cursor: pointer;


img{
width: 100%;
height: 100%;
object-fit: cover;
}


`
const Deliver = styled.div`
width: 120px;
height: 9vh;
display: flex;
align-items: center;
justify-content: space-between;
padding: .3rem;
margin-left:.7rem;

h3{
    font-size:1.5rem;
    color: #fff;

}
` 

const Searchbar = styled.div`
width:70rem;
padding: .5rem;
 border-radius: .3rem; 

display: flex;
align-items: center;

@media (max-width:960px){
    width: 95%;

}



button{
    background-color: #F3A847;
    outline: none;
    border: none;
}


`

const Signin = styled.div`
width: 140px;
height: 9vh;
padding: .5rem;
display: flex;
justify-content: center;
flex-direction: column;

@media (max-width:960px){
    align-items: center;
    text-align: center;
}

h2{
    font-size: 1.5rem;
    text-align: justify;
    color: #fff;
    font-weight:400;
}

h3{
    font-size: 1.3rem;
    text-align: justify;
    color: #fff;
    font-weight:300;
}
`

const Cartdiv = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
width: 7rem;

h5{
    font-size: 1.5rem;
    text-align:center;
    color: #fff;
}

h2{
    color: #fff;
    font-size: 1.5rem;

}
`

export default Navbar
