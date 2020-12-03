import React from 'react';
import {Card, Button, ListGroup, ListGroupItem} from "react-bootstrap";
import { Link } from 'react-router-dom';


export default function OrderSummary(){
    return (
        <div>
            <Card>
            <Card.Header as="h1" className="text-center">Order Summary</Card.Header>
            <Card.Img variant="top" src="https://www.powerhousearena.com/shop/media/catalog/product/cache/1/image/400x500/17f82f742ffe127f42dca9de82fb58b1/images/9781576876237.jpg"/>

            <Card.Body>
                <Card.Text>
                Prices will be calculated after weighing at the laundromat.
                </Card.Text>
                <ListGroup>
                <ListGroup.Item>Address: 68-27 fresh pond rd, ridgewood, NY 11385</ListGroup.Item>
                <ListGroup.Item>Number: (917)-865-4543</ListGroup.Item>
                <ListGroup.Item>Price: $1.50/LB</ListGroup.Item>
                </ListGroup>
                <Link exact to="/ordered">
                <Button variant="primary">Submit</Button>
                </Link>
            </Card.Body>
            </Card>
        </div>
    )
}