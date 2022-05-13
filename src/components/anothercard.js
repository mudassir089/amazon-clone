import React from 'react'
import {Card} from 'antd'
import {Button} from '@material-ui/core'
import styled from 'styled-components'

function Anothercard() {
    return (
        <Signupcard>
            <Card title="Signup for the best experience" bordered={false} style={{ width: 300}}>
            <Button variant="contained" style={{backgroundColor:"#F7CA00",width:'100%'}}>Sign up Securely</Button>
        </Card>
    <Imagediv>
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_D2_45M_en_US_1x._CB418309979_.jpg" width={300} height={250} />
    </Imagediv>
        </Signupcard>
    )
}

const Signupcard = styled.div`
width: 25%;
/* margin: auto; */

@media(max-width:768px){
    width: 100%;
    /* margin: auto; */
    text-align: center;
    margin-top: 1rem;
}
`

const Imagediv = styled.div`
width: 300px;
height: auto;


img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
`

export default Anothercard
