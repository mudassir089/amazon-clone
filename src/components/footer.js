import React from 'react'
import styled from 'styled-components'
import {Divider} from 'antd'
import amazonimg from '../images/amazon-2.svg'


function Footer() {
    return (
        <Footerdiv>
            <Grid>
                <div>
                    <h4>Get to Know us</h4>
                    <ul>
                        <li>Career</li>
                        <li>About Amazon</li>
                        <li>Blog</li>
                        <li>Invester relations</li>
                        <li>Amaxon devices</li>
                    </ul>
                </div>
                <div>
                    <h4>Make money with us</h4>
                    <ul>
                        <li>Sell products on Amazon</li>
                        <li>Sell on Amazon Business</li>
                        <li>Sell apps on Amazon</li>
                        <li>Become an Affiliate</li>
                        <li>Advertise Your Products</li>
                        <li>Self-Publish with Us</li>
                        <li>Host an Amazon Hub</li>
                        <li>›See More Make Money with Us</li>
                    </ul>
                </div>
                <div>
                    <h4>Amazon Payment Products</h4>
                    <ul>
                        <li>Amazon Business Card</li>
                        <li>Shop with Points</li>
                        <li>Reload Your Balance</li>
                        <li>Amazon Currency Converter</li>
                    </ul>
                </div>
                <div>
                    <h4>Let Us Help You</h4>
                    <ul>
                        <li>Amazon and COVID-19</li>
                        <li>Your Account</li>
                        <li>Your orders</li>
                        <li>Shipping Rates & Policies</li>
                        <li>Returns & Replacements</li>
                        <li>Manage Your Content and Devices</li>
                        <li>Amazon Assistant</li>
                        <li>Help</li>
                    </ul>
                </div>
            </Grid>
            <Divider />
            <div className="logodiv">
               <img src={amazonimg} alt="" />
            </div>
        </Footerdiv>
    )
}


const Footerdiv = styled.div`
width: 100%;
min-height: 70vh;
padding: 1rem;
background-color: #232F3E;
color: #fff;

.logodiv{
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 7vh;

    img{
        width: 10rem;
        height: 9rem;
        object-fit: cover;
    }
}

`

const Grid = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit,minmax(200px,1fr));
column-gap: 1rem;
min-height: 60vh;
width: 85%;
margin: auto;
place-items: center;

h4{
    color: #fff;
    font-size: 1.8rem;
    font-weight: 500;
}

ul{
    list-style: none;
    /* padding: 1rem; */

    li{
        margin: .7rem 0;
        font-size: 1.5rem;
        font-weight: 300;

    }
}



`

export default Footer
