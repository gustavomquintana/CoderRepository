import React, {useState} from 'react';
import ButtonsCount from './ButtonsCount/ButtonsCount';
import ViewCount from './ViewCount/ViewCount';
import AgregarCount from './AgregarCount/AgregarCount';


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
    export default function ItemCount({onAdd,stock,initial}) {
        let [counter, counterState] = useState(initial);

    const clickAction = (amount) => {
        return () => {
            let total = (amount < 0) ? 0 : amount;
            let limiter = (total > stock) ? stock: total;
            counterState(limiter);

        }
    }

    let props = {counter, counterState}

    return (
        <div class="section-car" style={styleContain}>   
        <div class="box-count" style={styleBox}> 
            <ButtonsCount suma={false} onClick={clickAction} {...{props}} />
             <ViewCount value={counter}/> 
             <ButtonsCount suma={true} onClick={clickAction}  {...{props}}/>
        </div>

        <div  class="box-add" style={boxAdd}> <AgregarCount onAdd= {onAdd}/> </div>
        </div>
        );
}


