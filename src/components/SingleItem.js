import React from 'react'
import styled from 'styled-components'
import { Divider,Rate,notification } from 'antd'
import {Button} from '@material-ui/core'
import {useDispatch} from 'react-redux'
import {addtocart,totalamount} from '../services/addtocart'
import {CheckCircle} from '@material-ui/icons'


function SingleItem({usedata}) {

    const openNotification = () => {
        notification.open({
          message: 'Added to cart',
          description:
            'Your item has been added to your cart successfully,check your cart',
          icon: <CheckCircle style={{ color: '#00ff00' }} />,
        });
      };

    const dispatch = useDispatch()
    const {data,isLoading,error} = usedata()
    console.log(data)
    if(error){
        return 'could not load it please try again'
    } 


    const addtocartfn = (id) => {
        const filtered = data.find(state => state.id === id)
        dispatch(addtocart(filtered))
    }

    return (
        <>
         <Showcase className="showcase">
             {data && (

                <h2>{`over ${data.length} items for "${data[0].category}"`}</h2>
             )}
            </Showcase>
        {data && data.map(d => {
            return(
            <>
         <Divider/>
            <Item>
                <div className="imagediv">
                    <img src={d.image} alt="" />
                </div>
                <Infodiv>
                    <h1>{d.title}</h1>
                    <h2>${d.price}</h2>
                   <Rate disabled defaultValue={d.rating.rate} allowHalf style={{width:'200px',fontSize:"1rem",margin:'1rem 0'}}/>   
                    <h5>ships to pakistan</h5> 
                    <Button variant="contained" style={{backgroundColor:"#F7CA00",width:'15rem'}} onClick={() => {
                        openNotification()
                        addtocartfn(d.id)
                        dispatch(totalamount(d))
                        }}>Add to cart</Button>
                </Infodiv>
            </Item>
            <Divider/>
            </>
            )
        })}
        </>
        

        
    )
}

export const Item = styled.div`
min-height: 15vh;
display: flex;
align-items: center;
padding: 1rem;
margin-left: 1rem;

@media(max-width:768px){
    flex-direction: column;
    width: 100%;
    margin: auto;
}

.imagediv{
    width: 25rem;
    height: 20rem;
    margin: .5rem 0;

    img{
        height: 100%;
        width: 100%;
        /* height: 100%; */
        /* object-fit: cover; */
    }
}
`

export const Infodiv = styled.div`
max-width: 50rem;
text-align: justify;
padding: .5rem;
margin-left: 1rem;

h1{
    font-size: 1.8rem;
    font-weight: 500;
}

h2{
    font-size: 2rem;
    font-weight: 300;
    
}

h5{
    font-size: 1.3rem;

}
`

const Showcase = styled.div`
 width: 100%;
    display: flex;
    align-items: center;
    padding: 1rem;
    height: 7vh;
    background-color: #FFFFFF;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`

export default SingleItem
