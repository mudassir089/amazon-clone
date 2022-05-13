import {Carousel} from 'antd'
import styled from 'styled-components';
import {Images} from '../images'


  const Slider = () => {
      return(
    <Carousel autoplay>
     {Images && Images.map((img,i) => {
         return <Slide key={i}>
             <img src={img} alt="image" />
         </Slide>
     })}
    </Carousel>
      )
  }

  const Slide = styled.div`
  width:100%;
  height:50vh;

  img{
      width: 100%;
  }
  `

  export default Slider

