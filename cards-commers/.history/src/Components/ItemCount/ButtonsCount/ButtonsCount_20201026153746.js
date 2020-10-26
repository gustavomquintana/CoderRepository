import React from "react";

export default function ButtonsCount({suma,onClick}) {
    const styleButton = {
        fontWeight: "bold",
        fontSize:"1.2em",
        background: "black",
        color: "grey",
    }
    let signo = suma ? '+' : '-';

  return ( <button style={styleButton}>{signo}</button> )
}
