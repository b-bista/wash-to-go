import React from 'react';
import {Card, Button, ListGroup} from "react-bootstrap";
import maps from './maps.png';

export default function Ordered(){
    return(
        <div>
            <Card>
            <Card.Header as="h1" className="text-center">Order Summary</Card.Header>
            <Card.Img variant="top" src={maps} />

            
            <Card.Body>
                <Card.Text>
                Order Received. Processing!
                </Card.Text>
                <ListGroup>
                <ListGroup.Item>Address: 68-27 fresh pond rd, ridgewood, NY 11385</ListGroup.Item>
                <ListGroup.Item>Number: (917)-865-4543</ListGroup.Item>
                <ListGroup.Item>Price: $1.50/LB</ListGroup.Item>
                </ListGroup>

                
            </Card.Body>
            </Card>
        </div>
    )
}