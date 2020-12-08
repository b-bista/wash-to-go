import { GoogleMap } from '@react-google-maps/api';
import React from 'react';
import {Card, Button} from "react-bootstrap";
import { Link } from 'react-router-dom';


class OrderPage extends React.Component{

  state = {
    store: {},
    services: []
  }

  addService = (newStore) => {
    this.setState(prevState => ({
      services: [...prevState.services, newStore]
    }))
    console.log('store added');
  }

  componentDidMount() {
    const {businessId} = this.props.match.params

    fetch(`/api/businesses/${businessId}`)
        .then(res => res.json())
        .then(business => {
            // businnesses.forEach(store => {
            //     store["long"] = "";
            //     store["lat"] = "";
            // });
            this.setState({
                store: business
            });
            console.log(business);
        })
        .catch(err => console.log("API ERROR: ", err));
  }
    
  render () {
    return (
      <div>
          
          <Card className="text-center h-100 w-100">
            <Card.Img variant="top" src="https://www.powerhousearena.com/shop/media/catalog/product/cache/1/image/400x500/17f82f742ffe127f42dca9de82fb58b1/images/9781576876237.jpg"/>
            <Card.Header>
              <p>Store: {this.state.store.name}</p>
              <p>Address: {this.state.store.address1, this.state.store.address2, this.state.store.state}</p>
            </Card.Header>
            <Card.Body>
                <Card.Title>Services offered:</Card.Title>
                {
                  this.state.store.services && this.state.store.services.map(service => {
                    return (
                      <Card>
                        <Card.Text>
                          {service.name}
                        </Card.Text>
                        <Card.Text>
                          {service.description}
                        </Card.Text>
                        <Card.Text>
                          {service.price}
                        </Card.Text>

                        <Button variant="primary" onClick={(e) => {
                          e.preventDefault();
                          this.addService({
                            name: service.name,
                            price: service.price
                          })}
                          }>Add Service</Button>
                      </Card>
                      
                    )
                  })
                }
                <Card.Title>Services in order:</Card.Title>
                {
                  this.state.services && this.state.services.map(service => {
                    return (
                      <Card>
                        <Card.Text>
                          {service.name}
                        </Card.Text>
                        <Card.Text>
                          {service.price}
                        </Card.Text>
                      </Card>
                      
                    )
                  })
                }

                <Link to ={{
                    pathname: "/summary", 
                    state: {
                      orderDetails: this.state
                    }
                  }} >

                <Button variant="primary">Confirm </Button>
                </Link>
            </Card.Body>
            </Card>

      </div>
    )
  }
}

export default OrderPage;