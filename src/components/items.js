import React from 'react'
import styled from 'styled-components'
import { useLocation } from 'react-router'
import {useGetCategoriesQuery} from '../services/fakestoreapi'
import {useGetElectronicsQuery} from '../services/electronics'
import SingleItem from './SingleItem'
import {useGetMenClothingsQuery} from '../services/menclothing'
import {useGetWomenClothingsQuery} from '../services/womenclothing'


const Items = () => {

    const {pathname} = useLocation()
    console.log(pathname)
    return(
        <MainItemsdiv>
           
            {pathname == '/category/jewelery' && (
                <SingleItem usedata={useGetCategoriesQuery}/>
            )}
            {pathname == '/category/electronics' && (
                <SingleItem usedata={useGetElectronicsQuery}/>
            )}
            {pathname == "/category/men's clothing" && (
                <SingleItem usedata={useGetMenClothingsQuery}/>
            )}
            {pathname == "/category/women's clothing" && (
                <SingleItem usedata={useGetWomenClothingsQuery}/>
            )}
        </MainItemsdiv>
    )
}

const MainItemsdiv = styled.div`
width:100%;
min-height: 100vh;
background-color: #FFFFFF;



`

export default Items