import React from 'react';

export default function ViewCount({value}){
    const countnumber = {
        margin:"0.25em auto",

    }

    return(
        <div style={countnumber} class="countNumber">{value}</div>
    )
}