import React, { useEffect } from "react";
import { useState } from "react";
import Search from "../components/Search";
import RacipieList from "../components/RacipieList";
import {getRacipes} from '../services/api.js'

const Racipies =()=>{

    const [searchQuery, setSerachQuery] = useState('pizza'.toUpperCase());
    const [racipies, setRacipies] = useState([]);

    useEffect(()=>{
        getSearchResult();
    },[searchQuery]);
    

    const getSearchResult= async ()=>{
       let result = await getRacipes(searchQuery);
       if (result && result.recipes){
        setRacipies(result.recipes);
       }
       console.log(result);
    }
    return (
        <>
       <Search setSerachQuery={setSerachQuery} />
       <RacipieList recipes={racipies} searchQuery={searchQuery}/>

        </>
    )
}

export default Racipies;