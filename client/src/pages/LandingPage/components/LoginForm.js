import React from 'react';
import { Form, Button, Col, Card, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

import auth from '../../../services/auth';

class LoginForm extends React.Component {
  state = {
    email: '',
    password: ''
  }

  handleChange = (event) => {
    const value = event.target.value;

    this.setState({
      [event.target.name]: value
    });
  }

  login = (event) => {
    event.preventDefault();
    let { email, password } = this.state;
    auth.authenticate(email, password)
      .then((user) => {
        this.setState({ redirectToReferrer: true });
      })
      .catch((err) => {
        this.setState({ failed: true });
      });
  }

  render() {

    return (
      <Card>
            <Card.Body>
                <p>Log in and begin finding laundry service near you!</p>

                <Form>
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

                    <Button 
                    variant="primary" 
                    type="submit"
                    onClick={(e)=>{}}>
                      Log in
                    </Button>
                </Form>

                <a onClick={this.props.toggleUser}>Already registered? Click here to log in</a>

            </Card.Body>
            
        </Card>
        
    );
  }
}

export default LoginForm;