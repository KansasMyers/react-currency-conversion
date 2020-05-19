import React from 'react';
import './style.css';

import { Jumbotron, Button, Form, Col, Spinner, Alert, Modal } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight, faAngleRight } from '@fortawesome/free-solid-svg-icons';

function CurrencyConverter() {
  return (
    <div>
      <h1>Currency Converter</h1>

      <Alert variant="danger" show={true}>Error.</Alert>

      <Jumbotron>
        <Form>
          <Form.Row>
            <Col sm="3">
              <Form.Control placeholder="0" value={1} required></Form.Control>
            </Col>
            
            <Col sm="3">
              <Form.Control as="select"></Form.Control>
            </Col>
            
            <Col sm="1" className="text-center" style={{
              paddingTop: '5px'
            }}>
              <FontAwesomeIcon icon={faAngleDoubleRight}></FontAwesomeIcon>
            </Col>
            
            <Col sm="3">
              <Form.Control as="select"></Form.Control>
            </Col>

            <Col sm="2">
              <Button variant="success" type="submit">
                <Spinner animation="border" size="sm"></Spinner>
                <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
              </Button>
            </Col>
          </Form.Row>
        </Form>

        <Modal show={true}>
          <Modal.Header closeButton>
            <Modal.Title>Result</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            RESULT IS HERE
          </Modal.Body>

          <Modal.Footer>
            <Button variant="success">New Conversion</Button>
          </Modal.Footer>
        </Modal>
      </Jumbotron>
    </div>
  );
}

export default CurrencyConverter;