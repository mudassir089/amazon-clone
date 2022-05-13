import React from 'react'
import Carddiv from './card'
import styled from 'styled-components'
import Anothercard from './anothercard'

function MainCardholder() {
    return (
        <Maindiv>
            <Carddiv />
        </Maindiv>
    )
}

const Maindiv = styled.div`
width: 100%;
display: flex;
align-items: center;

@media (max-width:960px){
    flex-direction: column;
    margin: auto;
}
`

export default MainCardholder
