import React from 'react'
import { Divider } from 'antd'
import styled from 'styled-components'
import {Button} from '@material-ui/core'
import {scrolltotop} from './util'

function Dividerdiv() {
    return (
        <Maindiv>
            <div className="emptydiv"></div>
            <Divider />
            <div className="signupdiv">
                <p>See Personalized recommendations</p>
                <Button variant="contained" style={{backgroundColor:"#FFCF56",width:'15rem'}}>Sign in</Button>
                <p>Sign up here</p>
            </div>
            <Divider />
            <div className="emptydiv">
            <Button variant="contained" style={{backgroundColor:"#485769",width:'100%',borderRadius:'0rem',padding:'1rem'}} onClick={scrolltotop}>Back to top</Button>
            </div>
        </Maindiv>
    )
}

const Maindiv = styled.div`
min-height: 15vh;
width: 100%;
background-color: #fff;
margin-top: 2rem;

.emptydiv{
    height: 2.5vh;
}

.signupdiv{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 10vh;

    p{
        font-size: 1.5rem;
        margin: .8rem 0;
        
    }
}
`

export default Dividerdiv
