import React, {useState,useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Item.css';




function Item({listProducts}){   
    return listProducts.map(listProducts => 
        <Container>
    <Row className="Item">
      <Col xs="6" sm="4">
          <div className="containerSection">
              <img src={listProducts.image}/>
          </div>
      </Col>
      <Col xs="6" sm="4">
      <div className="containerSection">
              <div className="info">
                    <p> <span>Producto:</span>{listProducts.productName}  {listProducts.color} </p>
                    <p> <span>Marca:</span> {listProducts.marca}</p>
                    <p> <span>Género:</span> {listProducts.genero}</p>
                    <p> <span>Estilo:</span> {listProducts.style}</p>
                    <p> <span>Calidad / Talle:</span> {listProducts.calidad} - {listProducts.talle}</p>
              </div>
          </div>
      </Col>
      <Col sm="4">
      <div className="containerSection">
      <div className="precio">
                    <p>{listProducts.sku}</p>
                    <h3>{listProducts.precio}</h3>
              </div>
          </div>
      </Col>
    </Row>
  </Container>  
        );

}

export default Item;