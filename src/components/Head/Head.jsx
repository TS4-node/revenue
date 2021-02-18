import React from 'react';
import './Head.css';
import { Row, Col } from 'reactstrap';
import HeadMenu from './HeadMenu'

const Head = () => {
  return (
    <>
      <Row className='mt-3 nav d-flex flex-nowrap justify-content-center'style={{height: '55px'}}>
        <Col xs='4' sm='4'>
          <h1 className='combos-generator text-center mb-0 mt-3'>Combos Generator</h1>
        </Col>
        <Col xs='4' sm='4' className='text-center'>
          <img src='images/header/ABInBev-logo.png' alt='ABInBev Logo' />
        </Col>
        <Col xs='4' sm='4' className='mt-3'>
          <HeadMenu/>
        </Col>
      </Row>
      <hr className='my-0'/>
    </>
  );
};

export default Head;
