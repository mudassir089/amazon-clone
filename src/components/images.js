import styled from 'styled-components'

const image1 = 'https://m.media-amazon.com/images/I/61O45C5qASL._AC_SY200_.jpg'
const image2 = 'https://m.media-amazon.com/images/I/71MFE2UY6-L._AC_SY200_.jpg'
const image3 = 'https://m.media-amazon.com/images/I/81LmL94PUvS._AC_SY200_.jpg'
const image4 = 'https://m.media-amazon.com/images/I/71610kdjdEL._AC_SY200_.jpg'
const image5 = 'https://m.media-amazon.com/images/I/81knqIxxBPL._AC_SY200_.jpg'
const image6 = 'https://m.media-amazon.com/images/I/81w9PfjekiL._AC_SY200_.jpg'
const image7 = 'https://m.media-amazon.com/images/I/81PrOqBEkBL._AC_SY200_.jpg'

const simage1 = 'https://m.media-amazon.com/images/I/61azS0rwxRL._AC_SY200_.jpg'
const simage2 = 'https://m.media-amazon.com/images/I/71K7LHNK7DL._AC_SY200_.jpg'
const simage3 = 'https://m.media-amazon.com/images/I/51WB4hdhKvS._AC_SY200_.jpg'
const simage4 = 'https://m.media-amazon.com/images/I/71WcP9svBmL._AC_SY200_.jpg'
const simage5 = 'https://m.media-amazon.com/images/I/619YBKQb+KL._AC_SY200_.jpg'

const Imagepack1 = [image1,image2,image3,image4,image5,image6,image7]
const Imagepack2 = [simage1,simage2,simage3,simage4,simage5]

export const Sliderone = () => {
    return(
        <>
        <Slided>
            {Imagepack1.map((img,i) => {
              return <img src={img} alt="" key={i} />
            })}
        </Slided>
        </>
    )
}

export const Slidertwo = () => {
    return(
        <>
        <Slided>
            {Imagepack2.map((img,i) => {
              return <img src={img} alt="" key={i} />
            })}
        </Slided>
        </>
    )
}



const bimage1 = 'https://m.media-amazon.com/images/I/91BdX7N8y+L._AC_SY200_.jpg'
const bimage2 = 'https://m.media-amazon.com/images/I/81A40fe4mtL._AC_SY200_.jpg'
const bimage3 = 'https://m.media-amazon.com/images/I/81Quaej+AmL._AC_SY200_.jpg'
const bimage4 = 'https://m.media-amazon.com/images/I/81gWQOAReLL._AC_SY200_.jpg'
const bimage5 = 'https://m.media-amazon.com/images/I/718wWetRhFS._AC_SY200_.jpg'
const bimage6 = 'https://m.media-amazon.com/images/I/711jARycOrS._AC_SY200_.jpg'
const Imagepack3 = [bimage1,bimage2,bimage3,bimage4,bimage5,bimage6]

export const Sliderthree = () => {
    return(
        <>
        <Slided>
            {Imagepack3.map((img,i) => {
              return <img src={img} alt="" key={i} />
            })}
        </Slided>
        </>
    )
}


const aimage1 = 'https://m.media-amazon.com/images/I/715tNKiYLES._AC_SY200_.jpg'
const aimage2 = 'https://m.media-amazon.com/images/I/71q6WgSX6ZL._AC_SY200_.jpg'
const aimage3 = 'https://m.media-amazon.com/images/I/71gBaaxaOyL._AC_SY200_.jpg'
const aimage4 = 'https://m.media-amazon.com/images/I/51AScME1RiL._AC_SY200_.jpg'
const aimage5 = 'https://m.media-amazon.com/images/I/51IYNNGIkUL._AC_SY200_.jpg'
const aimage6 = 'https://m.media-amazon.com/images/I/81nSo+2pnNL._AC_SY200_.jpg'
const aimage7 = 'https://m.media-amazon.com/images/I/611lFFDpzJL._AC_SY200_.jpg'
const Imagepack4 = [aimage1,aimage2,aimage3,aimage4,aimage5,aimage6,aimage7]

export const Sliderfour = () => {
    return(
        <>
        <Slided>
            {Imagepack4.map((img,i) => {
              return <img src={img} alt="" key={i} />
            })}
        </Slided>
        </>
    )
}





const Slided = styled.div`
width: 100%;
height: auto;
padding: 1rem;
display: flex;
align-items: center;
justify-content: space-between;
margin: 1rem 0;
background-color: #fff;
`