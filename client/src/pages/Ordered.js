import React from 'react';
import {Card, Button, ListGroup} from "react-bootstrap";
import maps from './maps.png';

class Ordered extends React.Component {

    componentDidMount(){
        let {store, services, totalPrice} = this.props.location.state;
        fetch(`/api/orders/${store.id}/createOrder`, {
            method: 'POST',
            credentials: 'include',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                status: "Created",
                total: totalPrice,
                orderDate: new Date(),
                comments: "Hi",
                orderItems: services
            }),
        })
        .then(res => {
            if(res.ok) {
                return res.json()
            }

            throw new Error('Content validation');
        })
    }
    
    render () {

        let {customer, store, services, totalPrice} = this.props.location.state;

        return(
            <div>
                <Card>
                <Card.Header as="h1" className="text-center">Order Summary</Card.Header>
                <Card.Img variant="top" src={maps} />
    
                <Card.Body>
                    <Card.Title>
                        Order Received. Processing! 
                    </Card.Title>
                    <ListGroup>
                    <ListGroup.Item>
                      <Card.Title>Customer Information</Card.Title>
                      <p>Name: {customer.firstName+" "+customer.lastName}</p>
                      <p>Address: {customer.address1}, {customer.address2} 
                      <p>{customer.city}, {customer.state}, {customer.zipCode} </p></p>
                      <p>Phone: {customer.phone}</p>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Card.Title>Business Information</Card.Title>
                      <p>Address: {store.address1}, {store.address2}, {store.city}, {store.state}, {store.zipCode} </p>
                      <p>Phone: {store.phone}</p>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Card.Title>Order Details:</Card.Title>
                      {
                        services && services.map(service => {
                          return (
                            <p>{`${services.indexOf(service)+1}.   ${service.name} - $${service.price*service.loadSize} total for ${service.loadSize} est lbs`}</p>
                          )
                        })
                      }
                      <p>Total price: ${totalPrice}</p>
                    </ListGroup.Item>
                    </ListGroup>
                </Card.Body>
                </Card>
            </div>
        )
    }

}

export default Ordered;