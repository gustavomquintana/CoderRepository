import React, {useState,useEffect, useContext } from 'react';
import './cart.css';
import Container from 'react-bootstrap/Container';
import {useCartContext} from '../../Context/cartContext';
import {PlusCircleIcon, MinusCircleIcon, TrashIcon} from '../../icons/index';
//import { CartContext } from '../Context/cartContext';


const Cartdetail = ({product,countercart}) => {
    const {increase,decrease, removeItem} = useCartContext();


      const increaseItem = () => {
        increase(product,countercart);
        console.log(product);
        //onAdd(compra);
      };

      const decreaseItem = () => {
        decrease(product,countercart);
        console.log(product);
        //onAdd(compra);
      };

      const removeItemUnit = () => {
        removeItem(product);
        console.log(product);
        //onAdd(compra);
      };


    //const { increase, decrease, removeProduct } = useContext(CartContext);
    useEffect(()=>{
        console.log("mounted");
        return(()=>{
            console.log("dismounted");
        })
    },[product]);

    return ( 
      <Container>
        <div className="row col-sm-12 ml-4 no-gutters py-2">
            <div className="col-sm-3 p-2">
                <img
                alt={product.name}
                style={{margin: "0 auto", maxHeight: "100px"}} 
                src={product.image} className="img-fluid d-block"/>
            </div>
            <div className="col-sm-3 p-2 detailItem">
                <h5 className="mb-1">{product.productName}</h5>
                <p className="mb-1 typeSize">${product.precio} </p>
                
            </div>
            <div className="col-sm-3 p-2 text-center detailItem ">
            <h5 className="mb-1">Cantidad</h5>
                 <p className="mb-0 typeSize">{countercart}</p>
            </div>
            <div className="col-sm-3  text-right ">
                 <button 
                 onClick={increaseItem}
                 className="btn btn-primary btn-sm mr-2 mb-1">
                  <PlusCircleIcon width={"20px"}/>
                 </button>

                 {
                     countercart > 0 &&
                     <button
                    onClick={decreaseItem}
                    className="btn btn-danger btn-sm mb-1 mr-3">
                      <MinusCircleIcon width={"20px"}/>
                    </button>
                 }
                  {
                     countercart === 1 &&
                     <button
                    onClick={removeItemUnit}
                    className="btn btn-danger btn-sm mb-1">
                      remove
                    </button>
                 }
                 
            </div>
        </div>
        </Container>
     );
}
 
export default Cartdetail;