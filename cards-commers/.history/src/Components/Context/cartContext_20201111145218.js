import React, {useState,useContext} from 'react';

export const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);


export const CartProvider = ({ children, defaultCart }) => {
 const [cart, setCart] = useState(defaultCart);


 function onAdd(compra){
    console.log("Estamos intentando agregar un item : " + item.id)
 }

 function onRemove(itemID){
     console.log("Estamos intentando REMOVER un item: " + itemID);
 }

 function clear(item){
     console.log("Borraremos el item completo")
 }



    return <CartContext.Provider value = {{compra, cart, onAdd, onRemove, clear}}>
        {children}
    </CartContext.Provider>
}