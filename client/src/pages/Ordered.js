import React from 'react';
import {Card, Button, ListGroup} from "react-bootstrap";
import maps from './maps.png';

class Ordered extends React.Component {
    
    render () {

        let {store, services, totalPrice} = this.props.location.state;

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
                    <ListGroup.Item>Address: {store.address1}, {store.address2}, {store.city}, {store.state}, {store.zipCode}</ListGroup.Item>
                    <ListGroup.Item>Number: {store.phone}</ListGroup.Item>
                    <ListGroup.Item>Total Price: ${totalPrice}</ListGroup.Item>
                    </ListGroup>
    
                    
                </Card.Body>
                </Card>
            </div>
        )
    }

}

export default Ordered;