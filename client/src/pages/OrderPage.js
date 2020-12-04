import { GoogleMap } from '@react-google-maps/api';
import React from 'react';
import {Card, Button} from "react-bootstrap";
import { Link } from 'react-router-dom';


export default function orderPage(){
    return (
      <div>
          
          <Card className="text-center h-100 w-100">
            <Card.Img variant="top" src="https://www.powerhousearena.com/shop/media/catalog/product/cache/1/image/400x500/17f82f742ffe127f42dca9de82fb58b1/images/9781576876237.jpg"/>
            <Card.Header>Store: Tina's Laundromat & Dry Cleaners</Card.Header>
            <Card.Body>
                <Card.Title>Price Per LB:</Card.Title>
                <Card.Text>
                $1.50
                </Card.Text>
                <Link exact to="/summary">
                <Button variant="primary">Confirm </Button>
                </Link>
            </Card.Body>
            </Card>

      </div>
    )
}