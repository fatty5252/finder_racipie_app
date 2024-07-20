import React from "react";
import Header from "../components/Header";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";


const Home =()=>{

    return (
        <>
        <Header title="Our Racipies" bgClass="bg-image" >
            <Button content="SEARCH RACIPIES" color="primary" as={Link} to="/racipies" size="big" />
        </Header>
        </>
    )
}

export default Home;