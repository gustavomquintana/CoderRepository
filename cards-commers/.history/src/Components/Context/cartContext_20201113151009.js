import React, {useState,useContext} from 'react';
import {productoItems} from '../../Components/Products/Products';

export const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);


export const CartProvider = ({ children, defaultCart }) => {
 const [cart, setCart] = useState(defaultCart);


 function onAdd(item){
    const [productoItems] = useState(productoItems);

 }

 function onRemove(itemID){
     console.log("Estamos intentando REMOVER un item: " + itemID);
 }

 function clear(item){
     console.log("Borraremos el item completo")
 }



    return <CartContext.Provider value = {{productoItems, cart, onAdd, onRemove, clear}}>
        {children}
    </CartContext.Provider>
}