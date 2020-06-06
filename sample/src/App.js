import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Container, Row, Col, Button} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Container fluid={true} className="bg-dark App-body">
        <Row className="fixed-top m-3">
          <Col xs={3} className="text-center text-warning border border-warning py-3">1/3</Col>
          <Col xs={6} className="text-center text-warning border border-warning py-3">2/3</Col>
          <Col xs={3} className="text-center text-warning border border-warning py-3">3/3</Col>
        </Row>
        <Row className="justify-content-around fixed-bottom mb-2">
          <Col xs={2} className="btn btn-warning my-2 ml-3 py-3">冒険</Col>
          <Col xs={2} className="btn btn-primary my-2 mx-0 py-3">編成</Col>
          <Col xs={2} className="btn btn-info    my-2 mx-0 py-3">強化</Col>
          <Col xs={2} className="btn btn-danger  my-2 mx-0 py-3 px-0">ガチャ</Col>
          <Col xs={2} className="btn btn-success my-2 mr-3 py-3">設定</Col>
        </Row>
      </Container>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
