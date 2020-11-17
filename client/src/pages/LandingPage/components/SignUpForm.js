import React from 'react';
import { Form, Button, Col, Card, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

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
    zip: '',
    cellPhone: '',
    homePhone: ''
  }

  handleChange = (event) => {
    const value = event.target.value;

    this.setState({
      [event.target.name]: value
    });
  }

  signUp = (event) => {
    event.preventDefault();
    if (this.state.passMatch)
        //later will contain sign up logic
        console.log('Passwords Match');
    else
        //some sort of ui logic to remind user
        console.log(`Passwords don't match`)

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
                            name="firstName"
                            value={this.state.firstName}
                            onChange={this.handleChange} 
                        />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridLastName">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Password" 
                            name="password"
                            value={this.state.password}
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
                            value={this.state.password2}
                            onChange={this.handleChange}
                        />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                        type="text" 
                        placeholder="1234 Main St"
                        value={this.state.address1}
                        onChange={this.handleChange}
                        />
                    </Form.Group>

                    <Form.Group controlId="formGridAddress2">
                        <Form.Label>Address 2</Form.Label>
                        <Form.Control
                        type="text" 
                        placeholder="Apartment, studio, or floor"
                        value={this.state.address2}
                        onChange={this.handleChange}
                        />
                    </Form.Group>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        <Form.Control as="select" defaultValue="Choose...">
                            <option>Choose...</option>
                            <option>...</option>
                        </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridCellPhone">
                        <Form.Label>Cell Phone</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Enter cell number"
                            name="cellPhone"
                            value={this.state.cellPhone}
                            onChange={this.handleChange} 
                        />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridHomePhone">
                        <Form.Label>Home Phone</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Enter home number" 
                            name="homePhone"
                            value={this.state.homePhone}
                            onChange={this.handleChange}
                        />
                        </Form.Group>
                    </Form.Row>

                    <Button variant="primary" type="submit">
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