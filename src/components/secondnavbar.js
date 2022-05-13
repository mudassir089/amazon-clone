import React from 'react'
import styled from 'styled-components'
import {Menu} from '@material-ui/icons'

function Secondnavbar({setvisible}) {
    return (
        <Secondnav>
            <div className="list">
                <ul>
                    <li onClick={() => setvisible(true)}><span><Menu style={{color:"#fff"}}/></span> </li>
                    <li className="hidden">Today's Deal</li>
                    <li className="hidden">Customer Service</li>
                    <li className="hidden">Registry</li>
                    <li className="hidden">Gift Cards</li>
                    <li className="hidden">sell</li>
                </ul>
            </div>
            <div>
                <h4 style={{color:"#fff"}}>Amazon response to covid 19</h4>
            </div>
        </Secondnav>
    )
}

const Secondnav = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;
padding: 1rem;
height: 5vh;
background-color: #232F3E;

.hidden{
    @media(max-width:768px){

        visibility: hidden;
    }
}

.list{
    width: 35%;
    margin-top: 1rem;

    ul{
        list-style: none;
        display: flex;
        align-items: center;
        justify-content: space-between;

        li{
            font-size: 1.5rem;
            color: #fff;
        }
    }
}
`

export default Secondnavbar
