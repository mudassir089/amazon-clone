import React from 'react'
import { Carousel } from 'antd'
import {Sliderone,Slidertwo,Sliderfour,Sliderthree} from './images'
import styled from 'styled-components'

function Anotherslider() {
    return (
        <Sliderdiv>
            <div>
            <h1>top international wireless</h1>
        <Carousel autoplay>
            <Sliderone />
            <Slidertwo />
        </Carousel>
        </div>
        <div>
        <h1>top baby products for you</h1>
        <Carousel autoplay>
            <Sliderthree />
            <Sliderfour />
        </Carousel>
        </div>
        </Sliderdiv>
    )
}

const Sliderdiv = styled.div`
width: 95%;
margin: 2rem auto;
/* padding: 1rem; */
/* background-color: #fff; */

div{
    background-color: #fff;
    margin-bottom: 1rem;

}

h1{
  font-size: 2rem;
  color: #161616;
  text-transform: capitalize;
  padding: 1rem;
}
`

export default Anotherslider
