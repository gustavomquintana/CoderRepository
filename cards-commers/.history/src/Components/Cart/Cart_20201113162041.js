import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useCartContext} from '../../Components/Context/cartContext';

const Cart = () => {
    const {cart} = useCartContext();
    const [products] = useState(cart);
        
    function prueba(products){
        products.map((name) => console.log(name));
    }

    return (
        <Container>
     <Row className="ItemDetail">
       <Col xs="6" sm="4">
         <div className="containerSectionDetail">
           
         </div>
       </Col>
       <Col xs="6" sm="4">
         <div className="containerSectionDetail">
           
         </div>
       </Col>
       <Col sm="4">
         <div className="containerSectionDetail">
           
         </div>
       </Col>
     </Row>
     <Row>
       <Col sm="4">
         <div class="detail-section">
          
         </div>
       </Col>
       <Col sm="4">
        
       </Col>
       <Col sm="4">
         <div class="detail-section">
           
         </div>
       </Col>
     </Row>
   </Container>
    )
}

export default Cart;