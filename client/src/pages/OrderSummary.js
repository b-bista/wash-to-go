import React from 'react';
import {Card, Button, ListGroup, ListGroupItem} from "react-bootstrap";
import { Link } from 'react-router-dom';



class OrderSummary extends React.Component{

  state = {
    totalPrice: 0
  }

  componentDidMount () {
    let {orderDetails} = this.props.location.state;  

    let totalPrice = 0;
    
    orderDetails.services.forEach(element => {
      totalPrice += element.price;
    });

    this.setState({totalPrice})
  }


  makeOrder = (e) => {
    e.preventDefault();
    let {orderDetails} = this.props.location.state;
    fetch(`/api/orders/${orderDetails.store.id}/createOrder`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          status: "Created",
          total: this.state.totalPrice,
          orderDate: new Date(),
          comments: "Hi",
          orderItems: orderDetails.services
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
        let {store} = this.props.location.state.orderDetails;
        let {services} = this.props.location.state.orderDetails;

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
                    <ListGroup.Item>Address: {store.address1}, {store.address2}, {store.city}, {store.state}, {store.zipCode} </ListGroup.Item>
                    <ListGroup.Item>Number: {store.phone}</ListGroup.Item>
                    <ListGroup.Item>Total price: {this.state.totalPrice}
                    </ListGroup.Item>
                    </ListGroup>

                    <Button variant="primary"> 
                      <Link to ={{
                      pathname: "/ordered", 
                      state: {
                        store: store,
                        services: services,
                        totalPrice: this.state.totalPrice
                      }}
                      }>
                        Submit
                      </Link>
                    </Button>
                    
                </Card.Body>
                </Card>
            </div>
        )
    }
    
}

export default OrderSummary;