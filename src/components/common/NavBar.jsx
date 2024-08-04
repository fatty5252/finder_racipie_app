import React from "react";
import {Menu} from 'semantic-ui-react'
import { Link } from "react-router-dom";


const NavBar=()=>{


    return (
        <>
        <Menu borderless fixed="top">
            <Menu.Item>
                <img style={{width: '100px', height:"60px"}} src="./images/navLogo.png" alt="logo img"/>
            </Menu.Item>
            <Menu.Item style={{fontSize: '20px', fontWeight:"bold"}} name="Home" as={Link} to="/"/>
            <Menu.Item style={{fontSize: '20px', fontWeight:"bold"}} name="Recipes" as={Link} to="/racipies"/>
        </Menu>
        </>
    )
}

export default NavBar;