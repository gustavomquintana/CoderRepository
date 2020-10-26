import React from 'react';
import ButtonsCount from './ButtonsCount/ButtonsCount';
import ViewCount from './ViewCount/ViewCount';
import AgregarCount from './AgregarCount/AgregarCount';


export default function ItemCount({onAdd,stock,initial}) {
    const styleContain={
        backgroundColor:"white",
        display:"flex",
    }
    const styleBox = {
        color:"red",
        fontWeight:"bold",
        fontSize:"1.1em",
        lineHeight:"18px",
        display:"flex",
        justifyContent:"center",
        width:"100px",
        height:"30px",
    }
    const boxAdd ={
        fontWeight: "bold",
        fontSize: "1em",
        color: "red",
    }
    const clickAction = (amount) => {
        () => {
            if(stock < 0)
        }
    }


    return (
        <div class="section-car" style={styleContain}>   
        <div class="box-count" style={styleBox}> 
            <ButtonsCount suma={false} onClick={clickAction} />
             <ViewCount value={20}/> 
             <ButtonsCount suma={true} onClick={clickAction} />
        </div>

        <div class="box-add" style={boxAdd}> <AgregarCount /> </div>
        </div>
        );
}


