import * as React from 'react';
import { Card, Button } from 'react-bootstrap';
import logo from '@/logo.svg';
import { useLocation, useParams } from 'react-router-dom';

export default function Copyright() {
  const param = useParams();
  const name = param?.name || '';
  const license = param?.license || '';

  const location = useLocation();
  console.log(location);
  return (
    <Card>
      <Card.Img variant="top" src={logo} title="tess"></Card.Img>
      <Card.Header></Card.Header>
      <Card.Footer>
        {'Copyright © ' + name}
        <Card.Link href="https://www.tntsupermarket.com/"> T&T Inc </Card.Link>
        {new Date().getFullYear()}.{`License is ` + license}
      </Card.Footer>
    </Card>
  );
}
