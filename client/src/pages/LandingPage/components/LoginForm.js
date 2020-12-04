import React from 'react';
import {Link} from 'react-router-dom';
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
        this.props.loginToggle();
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
                    <Link to='/home'>
                      <Button 
                      variant="primary" 
                      type="submit"
                      onClick={this.login}>
                        Log in
                      </Button>
                    </Link>
                    
                </Form>

                <a onClick={this.props.toggleUser}>Don't have an account? Click here to sign up.</a>

            </Card.Body>
            
        </Card>
        
    );
  }
}

export default LoginForm;