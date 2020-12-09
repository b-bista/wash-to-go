import React from 'react';
import {Card, Button, ListGroup, ListGroupItem} from "react-bootstrap";
import { Link } from 'react-router-dom';



class OrderSummary extends React.Component{

  

  state = {
    customer: {},
    totalPrice: 0
  }
  
  componentDidMount () {

    let {orderDetails} = this.props.location.state;  

    let totalPrice = 0;
    
    orderDetails.services.forEach(element => {
      totalPrice += element.price*element.loadSize;
    });

    this.setState({totalPrice: totalPrice.toFixed(2)})

    fetch("/api/auth/getCustomer")
    .then(res => res.json())
    .then(customer => {
        this.setState({
            customer
        });
    })
    .catch(err => console.log("API ERROR: ", err));
  }


  makeOrder = (e) => {
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
                <Card.Header as="h1" className="text-center">Confirm Order</Card.Header>
                <Card.Img variant="top" src="https://www.powerhousearena.com/shop/media/catalog/product/cache/1/image/400x500/17f82f742ffe127f42dca9de82fb58b1/images/9781576876237.jpg"/>
    
                <Card.Body>
                    <Card.Text>
                      Prices will be adjusted after weighing at the laundromat. 
                      <p>You will not be charged until then.</p>
                    </Card.Text>
                    <ListGroup>
                    <ListGroup.Item>
                      <Card.Title>Customer Information</Card.Title>
                      <p>Name: {this.state.customer.firstName+" "+this.state.customer.lastName}</p>
                      <p>Address: {this.state.customer.address1}, {this.state.customer.address2} 
                      <p>{this.state.customer.city}, {this.state.customer.state}, {this.state.customer.zipCode} </p></p>
                      <p>Phone: {this.state.customer.phone}</p>
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
                      <p>Total price: ${this.state.totalPrice}</p>
                    </ListGroup.Item>
                    </ListGroup>
                      
                    <Link to ={{
                      pathname: "/ordered", 
                      state: {
                        store: store,
                        customer: this.state.customer,
                        services: services,
                        totalPrice: this.state.totalPrice
                      }}
                      }>
                        <Button variant="primary">
                          Submit
                        </Button> 
                    </Link>
                    
                    
                </Card.Body>
                </Card>
            </div>
        )
    }
    
}

export default OrderSummary;