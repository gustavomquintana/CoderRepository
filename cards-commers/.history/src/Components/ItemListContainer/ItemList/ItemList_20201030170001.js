import React, {useState, useEffect} from 'react';
import './ItemList.css';
 

function ItemList() {
    const [itemList, setItemList] = useState(new Promise);
  
    // Use effect
    useEffect( () => {
      // Ira un comentario
         const itemList = new Promise( (resolve,reject) => {
           

        })
    }); // End useEffect
    
  
    return (
      <ItemList />
    );
  }


export default ItemList;
