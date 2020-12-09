import { GoogleMap } from '@react-google-maps/api';
import React from 'react';
import {Card, Button} from "react-bootstrap";
import { Link } from 'react-router-dom';


class OrderPage extends React.Component{

  state = {
    store: {},
    services: [],
    loadSize: 1
  }

  calcTotal(){
    let totalPrice = 0;
    
    this.state.services.forEach(element => {
      totalPrice += element.price*element.loadSize;
    });

    return totalPrice;
  }

  handleSizeChange (e) {
    this.setState({loadSize: e.target.value})
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
              <p>Address: {`${this.state.store.address1}, ${this.state.store.address2}, ${this.state.store.state}`}</p>
              <p>Phone Number: {this.state.store.phone} </p>
            </Card.Header>
            <Card.Body>
                <p>*True pricing will be adjusted after the business weighs your laundry.</p>
                <h6>Typical Laundry Weight Range</h6>
                <div style={{"margin-bottom": "2em"}}>
                  <ul>
                    <li>Small Load: 6 lbs</li>
                    <li>Medium Load: 8-10 lbs</li>
                    <li>Large Load: 12-16 lbs</li>
                  </ul>
                </div>
                <Card.Title>Services offered:</Card.Title>
                <hr></hr>
                {
                  this.state.store.services && this.state.store.services.map(service => {
                    if (service.name){
                      let loadSize = 1;
                      return (
                        <Card>
                          <div style={{"margin": "0.5em 0 0.5em 0"}}>
                            <Card.Title>
                              {service.name}
                            </Card.Title>
                            <Card.Text>
                              {service.description}
                            </Card.Text>
                            <Card.Text>
                              {`Price: $${service.price} per lb`}
                            </Card.Text>
                          </div>
                          <form>
                            <label>
                              Estimated Load Size (lbs):
                              <input type="text" name="loadSize" onChange={(e)=>{
                                loadSize = e.target.value;
                              }} />
                            </label>
                          </form>
                          <Button variant="primary" style={{"margin-top": "0.2em"}} onClick={(e) => {
                            e.preventDefault();
                            this.addService({
                              name: service.name,
                              price: service.price,
                              loadSize: loadSize
                            })}
                            }>Add Service</Button>
                        </Card>
                        
                      )
                    }
                  })
                }
                <div style={{"margin": "2em 0 0.5em 0"}} >
                <Card.Title>Services in order:</Card.Title>
                <hr></hr>
                {
                  this.state.services && this.state.services.map(service => {
                    return (
                      <Card>
                        <Card.Text>
                          {`${this.state.services.indexOf(service)+1}.   ${service.name} - $${service.price} per lb (${service.loadSize} lbs in item)`}
                          <p>Subtotal: ${(service.price*service.loadSize).toFixed(2)}</p>
                        </Card.Text>
                      </Card>
                      
                    )
                  })
                }
                </div>
                <br></br>

              <Card.Title>Total: ${this.calcTotal().toFixed(2)}</Card.Title>

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