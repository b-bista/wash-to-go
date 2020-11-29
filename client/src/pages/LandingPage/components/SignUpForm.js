import React from 'react';
import { Form, Button, Col, Card, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

import auth from '../../../services/auth';

class SignUpForm extends React.Component {
  state = {
    passMatch: false,
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    password2: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'USA',
    phone: ''
  }

  handleChange = (event) => {
    const value = event.target.value;

    this.setState({
      [event.target.name]: value
    });
  }

//   signUp = (event) => {
//     console.log(this.state);
//     if (this.state.passMatch){
//         event.preventDefault();
//         console.log('2');
//         auth.signup(this.state.email,
//             this.state.password,
//             this.state.firstName,
//             this.state.lastName,
//             this.state.phone,
//             this.state.address1,
//             this.state.address2,
//             this.state.city,
//             this.state.state,
//             this.state.zipCode,
//             this.state.country)
//     }
//   }

signUp = (event) => {
    if (this.state.passMatch) {
        event.preventDefault();
        fetch('/api/auth/signup', { 
            method: 'POST',
            //mode: 'cors', Included initially for
            body: JSON.stringify({
            email: this.state.email,
            password: this.state.password,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            phone: this.state.phone,
            address1: this.state.address1,
            address2: this.state.address2,
            city: this.state.city,
            state: this.state.state,
            zipCode: this.state.zipCode,
            country: this.state.country
            }),
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then((response) => {
            console.log(response);
            return response.json();
        })
        .catch((error) => {
            console.log(error);
        });
    }
    else {
        console.log('Password doesnt match');
    }
    
  }

  render() {

    return (
        <Card>
            <Card.Body>
                <p>Sign up to begin finding laundry service near you!</p>

                <Form>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridFirstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="John"
                            name="firstName"
                            value={this.state.firstName}
                            onChange={this.handleChange} 
                        />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridLastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Smith" 
                            name="lastName"
                            value={this.state.lastName}
                            onChange={this.handleChange}
                        />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control 
                            type="email" 
                            placeholder="Enter email"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange} 
                        />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                            type="password" 
                            placeholder="Enter Password" 
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword2">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control 
                            type="password" 
                            placeholder="Confirm Password"
                            name="password2"
                            value={this.state.password2}
                            onChange={(e) => {
                                if (e.target.value === this.state.password) 
                                    this.setState({
                                        passMatch: true,
                                        password2: e.target.value
                                    })
                                else
                                    this.setState({
                                        passMatch: false,
                                        password2: e.target.value
                                    })
                            }}
                        />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                        type="text" 
                        placeholder="1234 Main St"
                        name="address1"
                        value={this.state.address1}
                        onChange={this.handleChange}
                        />
                    </Form.Group>

                    <Form.Group controlId="formGridAddress2">
                        <Form.Label>Address 2</Form.Label>
                        <Form.Control
                        type="text" 
                        placeholder="Apartment, studio, or floor"
                        name="address2"
                        value={this.state.address2}
                        onChange={this.handleChange}
                        />
                    </Form.Group>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control 
                        type="text" 
                        placeholder="City"
                        name="city"
                        value={this.state.city}
                        onChange={this.handleChange}/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        <Form.Control 
                        type="text" 
                        placeholder="State"
                        name="state"
                        value={this.state.state}
                        onChange={this.handleChange}/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZipCode">
                        <Form.Label>Zip Code</Form.Label>
                        <Form.Control 
                        type="text" 
                        placeholder="Zip Code"
                        name="zipCode"
                        value={this.state.zipCode}
                        onChange={this.handleChange}/>
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridPhone">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Enter phone number"
                            name="phone"
                            value={this.state.phone}
                            onChange={this.handleChange} 
                        />
                        </Form.Group>
                    </Form.Row>

                    <Button 
                    variant="primary" 
                    onClick={this.signUp}>
                      Sign Up
                    </Button>
                </Form>

                <a onClick={this.props.toggleUser}>Already registered? Click here to log in</a>

            </Card.Body>
            
        </Card>
        
    );
  }
}

export default SignUpForm;