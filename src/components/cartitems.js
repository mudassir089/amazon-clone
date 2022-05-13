import React, { useState } from "react";
import {Rate} from 'antd'
import styled from "styled-components";
import { Item, Infodiv } from "../components/SingleItem";
import { Divider } from "antd";
import { Button } from "@material-ui/core";
import { removingtotalamount, removecartitem,increment,decrement } from "../services/addtocart";
import { useDispatch, useSelector } from "react-redux";

function Cartitems({ data }) {
  const dispatch = useDispatch();

  const cartitems = useSelector((state) => state.cart.cart);
  const total = useSelector(state => state.cart.totalbill)

  const removingtotal = (id) => {
    const filtered = total.filter((state) => state.id !== id);
    dispatch(removingtotalamount(filtered));
  }

  const deleted = (id) => {
    const filtered = cartitems.filter((state) => state.id !== id);
    dispatch(removecartitem(filtered));
  };

  return (
    <Cartitemdiv>
      <Item>
        <div className="imagediv">
          <img
            src={data.image}
            alt=""
            style={{ width: "20rem", height: "18rem" }}
          />
        </div>
        <Infodiv>
          <h1>{data.title}</h1>
          <h2>$ {data.price}</h2>
          <Rate disabled defaultValue={data.rating}/>
          <p>{data.description}</p>
        </Infodiv>
      </Item>

      <Divider />
      <Infowrapper>
        <Btndiv>
          <Button
            variant="contained"
            style={{ backgroundColor: "#FFCF56", width: "10rem" }}
            onClick={() => {
                deleted(data.id)
                removingtotal(data.id)
            }}
          >
            remove item
          </Button>
          <Button
            variant="contained"
            style={{ backgroundColor: "#FFCF56", width: "15rem" }}
            onClick={() => dispatch(increment(data))}
          >
            Increase quantity
          </Button>
          <Button
            variant="contained"
            style={{ backgroundColor: "crimson", width: "15rem" }}
            onClick={() => dispatch(decrement(data))}
          >
            Decrease Quantity
          </Button>
        </Btndiv>

        <div className="pricing">
          <h2>Total Quantity: {data.qty}</h2>
          <h2>Total price : $ {(data.qty * data.price)} </h2>
        </div>
      </Infowrapper>
    </Cartitemdiv>
  );
}

const Cartitemdiv = styled.div`
  padding: 0.5rem;
  background-color: #fff;
  width: 75%;
  margin: 2rem 2rem;

  @media(max-width:960px){
    .imagediv {
      width:100%;
      height:100%;
      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
`;

const Btndiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50rem;
  padding: 0.5rem;
  margin-top: 1rem;

  @media(max-width:768px){
    flex-direction: column;
    width:'100%';
    button{
      margin: 1rem 0;
    }

  }
`;

const Infowrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media(max-width:768px){
    flex-direction: column;
    margin: auto;
    width: 100%;

    .pricing{
      width: 100%;
    }
  }

  .pricing {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 40%;

    h2 {
      font-size: 2rem;
      font-weight: 500;
    }
  }
`;

export default Cartitems;
