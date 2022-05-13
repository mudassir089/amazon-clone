import React from 'react'
import styled from 'styled-components'
import Cardholder from './cardholder'
import Mycard from './mycard'
import Anothercard from './anothercard'
import { useGetCategoriesQuery } from '../services/fakestoreapi'
import { useGetMenClothingsQuery } from '../services/menclothing'
import { useGetWomenClothingsQuery } from '../services/womenclothing'
import { useGetElectronicsQuery } from '../services/electronics'
import Mysimplecard from './mysimplecard'

function Carddiv() {


    return (

        <Cardstyled >
            <Mycard title="Electronics" usedata={useGetElectronicsQuery} />
            <Mycard title="Jewelery" usedata={useGetCategoriesQuery} />
            <Mycard title="men's clothing" usedata={useGetMenClothingsQuery} />
            <Anothercard />
            <Mycard title="women's clothing" usedata={useGetWomenClothingsQuery} />
            <Mysimplecard name="oculus" url="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Dash_Oculus_1x._SY304_CB667158353_.jpg" />
            <Mysimplecard name="deals and Promotions" url="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Deals_1x._SY304_CB430401028_.jpg" />
            <Mysimplecard name="Easy Returns" url="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Returns_1x._SY304_CB432774714_.jpg" />

        </Cardstyled>
    )
}

export const Cardstyled = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit,minmax(300px,1fr));
column-gap: 2.5rem;
row-gap: 1.5rem;
width: 95%;
margin:auto;

@media (max-width:768px){
    width: 100%;
place-items: center;
    
}
`

export default Carddiv
