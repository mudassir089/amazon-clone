import { createGlobalStyle } from "styled-components";


const Globalstyles = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body{
    background-color: #EAEDED !important;
    font-family: 'Roboto',sans serif;
    line-height: 1 !important;
}

html{
    font-size: 62.5%;
}

#sticky{
    position: fixed;
     transition-timing-function: ease;
    transition: 0.5s ease;
    background-color: #04040a;
    color: #fff;
}

svg{
    width:30px !important;
    height:25px !important;
}

.collapse{
    height: 10vh;
    transition: all 0.5s ease;
}

.display{

    visibility: hidden;
    color: #fff;
    
    @media (max-width:960px){
        visibility: visible;
        top: 3%;
        right: 10%;
        position: absolute;
        width: 40px;
        height:40px;
    }
}

`

export default Globalstyles