import React from 'react';
import ButtonsCount from './ButtonsCount/ButtonsCount';
import ViewCount from './ViewCount/ViewCount';
import AgregarCount from './AgregarCount/AgregarCount';


export default function ItemCount() {
    return (
        <div class="section-car">   
        <div class="box-count"> 
            <ButtonsCount /> <ViewCount /> <ButtonsCount />
        </div>

        <div class="box-add"> <AgregarCount /> </div>
        </div>
        );
}

