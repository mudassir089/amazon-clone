import React from 'react'
import styled from 'styled-components'


function Mysimplecard({ name, url }) {



    return (
        <Carddiv>
            <div>
                <h1>{name}</h1>
            </div>
            <div>
                <img src={url} alt="" />
            </div>
            <div>
                <h5>see more</h5>
            </div>
        </Carddiv>
    )
}

const Carddiv = styled.div`
width:320px;
height: 380px;
background-color: #fff;
padding: 1rem;

div{
    padding: 1rem;
    font-size: 1rem;

    h1{
        font-size: 2rem;
    }
    h5{
        font-size: 1.5rem;
    }

    img{
        width: 240px;
        height: 250px;
        object-fit: cover;
    }
}
`

export default Mysimplecard