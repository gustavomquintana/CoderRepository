import React, {useState, useEffect} from 'react';
import './ItemList.css';
 

function ItemList() {
    const [itemList, setItemList] = useState();
  
    // De forma similar a componentDidMount y componentDidUpdate
    useEffect(() => {
      // Actualiza el título del documento usando la API del navegador
      
    });
  
    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
    );
  }


export default ItemList;
