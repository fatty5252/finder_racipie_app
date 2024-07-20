import React from "react";
import { useState,useCallback, useReducer } from "react";
import { countReducer } from "./components/common/CountReducer";

const initialState = 0;

export default function Practice() {
  
    const [count, dispatch] = useReducer(countReducer, initialState); 
    
    return (
        <div>
	<h2>{count}</h2>
	<button onClick={() => dispatch("add")}>
		add
	</button>
	<button onClick={() => dispatch("subtract")}>
		subtract
	</button>
	<button onClick={() => dispatch("reset")}>
		reset
	</button>
	</div>
    )
}