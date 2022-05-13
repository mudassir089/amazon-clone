import React, { useState } from 'react'
import { Drawer, Menu, Divider } from 'antd'
import styled from 'styled-components'
import { Person } from '@material-ui/icons'

function Drawerdiv({ visible, setvisible }) {

  const onclose = () => setvisible(false)

  const { SubMenu } = Menu

  return (
    <>
      <Drawer onClose={onclose} placement="left" visible={visible} width={350}>
        <Signindiv>
          <Person />
          <h1>Hello Signin</h1>
        </Signindiv>
        <div style={{ color: '#161616 !important' }}>
          <Menu

            style={{ width: 350, left: 0, position: 'absolute', top: '10%',overflowX:"hidden !important" }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
          >
            <SubMenu key="sub1" title="Digital Content and Devices">
              <Menu.Item key="1">Amazon music</Menu.Item>
              <Menu.Item key="2">Kindle e-readers</Menu.Item>
              <Menu.Item key="3">appstore for android</Menu.Item>
            </SubMenu>
            <Divider />
            <SubMenu key="sub2" title="Shop By department">
              <Menu.Item key="5">Electronics</Menu.Item>
              <Menu.Item key="6">Computers</Menu.Item>
              <Menu.Item key="7">Smart Home</Menu.Item>
              <Menu.Item key="8">Arts and Crafts</Menu.Item>
              <Divider />
              <SubMenu key="sub3" title="See All">
                <Menu.Item key="9">Automotive</Menu.Item>
                <Menu.Item key="10">Baby</Menu.Item>
                <Menu.Item key="11">Women's fashion</Menu.Item>
                <Menu.Item key="12">men's fashion</Menu.Item>
                <Menu.Item key="13">Boy's fashion</Menu.Item>
                <Menu.Item key="14">Home and kitchen</Menu.Item>
                <Menu.Item key="15">Beauty</Menu.Item>
                <Menu.Item key="16">videogames</Menu.Item>
              </SubMenu>
            </SubMenu>
            <Divider />

            <SubMenu key="sub4" title="Programs and features">
              <Menu.Item key="17">Gift cards</Menu.Item>
              <Menu.Item key="18">#founditonamazon</Menu.Item>
              <Menu.Item key="19">Amazon Live</Menu.Item>
              <Menu.Item key="20">International Shopping</Menu.Item>
            </SubMenu>
          </Menu>
        </div>
      </Drawer>
    </>
  )
}

const Signindiv = styled.div`
background-color: #232F3E;
cursor:pointer;
display: flex;
align-items: center;
justify-content: center;

padding: 1rem;
min-height: 4vh;
width: 100%;
top: 0;
position: absolute;
left: 0;
h1{
    font-size: 2rem;
    color: #fff;
    font-weight: 700;
    margin:auto;
}


svg{
    width: 50px;
    height: 50px;
    color: #fff;

}

`

export default Drawerdiv
