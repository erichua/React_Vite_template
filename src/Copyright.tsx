import * as React from 'react';
import { Card, Button } from 'react-bootstrap';
import logo from './logo.svg';

export default function Copyright() {
  return (
    <Card>
      <Card.Img variant="top" src={logo} title="tess"></Card.Img>
      <Card.Header></Card.Header>
      <Card.Footer>
        {'Copyright © '}
        <Card.Link href="https://www.tntsupermarket.com/"> T&T Inc </Card.Link>
        {new Date().getFullYear()}.
      </Card.Footer>
    </Card>
  );
}
