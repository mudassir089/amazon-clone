import React from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom'
import {Skeleton} from 'antd'


function Mycard({ usedata }) {
  const { data, isLoading, error } = usedata();
  console.log(data);
  if (isLoading) return <Skeleton.Image active/>;
  if (error) {
    console.log(error);
  }

  return (
      <>
      <Link to={`/category/${data[0].category}`}>
      <a>
    <Cardi>
      <div>
        <h1>{data && data[0].category}</h1>
      </div>
      <div>
        <img src={data && data[0].image} alt="" />
      </div>
      <div>
        <h5>see more</h5>
      </div>
    </Cardi>
    </a>
    </Link>
    </>
  );
}

const Cardi = styled.div`
  width: 320px;
  height: 380px;
  background-color: #fff;
  padding: 1rem;

  div {
    padding: 1rem;
    font-size: 1rem;

    h1 {
      font-size: 2rem;
    }
    h5 {
      font-size: 1.5rem;
    }

    img {
      width: 240px;
      height: 250px;
      /* object-fit: cover; */
    }
  }
`;

export default Mycard;
