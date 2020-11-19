import React from 'react';
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";



function AccountPage(props) {
  return (
    <div>
  <Form class="form-inline">
        {/* RENDER original credentials */}

  <Form.Group controlId="formBasicfName">
    <Form.Label>First Name</Form.Label>
    <Form.Control type="password" placeholder="First Name" />
  </Form.Group>

  <Form.Group controlId="formBasiclName">
    <Form.Label>Last Name</Form.Label>
    <Form.Control type="password" placeholder="Last Name" />
  </Form.Group>

  <Form.Group controlId="formBasicPhoneNumber">
    <Form.Label>Phone Number</Form.Label>
    <Form.Control type="password" placeholder="Phone Number" />
  </Form.Group>

  <Form.Group controlId="formBasicAddress">
    <Form.Label>Address</Form.Label>
    <Form.Control type="password" placeholder="Address" />
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>



  <Button variant="primary" type="submit">
    Save
  </Button>
</Form>
    </div>
  );
}

export default AccountPage;