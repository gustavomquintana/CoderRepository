import React from 'react';
import Container from 'react-bootstrap/Container';
import Link from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Item.css';




function Item({listProducts}){   
    return (
        <>
        <Row className="RowItems">
      <Col xs="12" sm="12" className="colDivItem">
                       <div className="img">
                  <img key={listProducts.id} src={listProducts.image}/>
              </div>
                    <div className="containerSection">
              <div className="info">
                    <p> <span className="detailDeport">RUNNING</span> </p>
                    <p> <span className="detailMarca"> {listProducts.marca}</span></p>
              </div>
          </div>
          <div className="containerSection">
      <div className="precio">
                    <h3><span className="sku">SKU:{listProducts.sku}</span></h3>
                    <h3><span className="cost">{listProducts.precio}</span></h3>
              </div>
          </div>
      </Col>
      </Row>
      </>
)
}

export default Item;