import React from 'react';

class SignUpForm extends React.Component {
  state = {
    passMatch: false,
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    password2: ''
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
        <div>
            <p>Sign up to begin finding laundry service near you!</p>

            <form>
                <label>
                    First name
                    <input
                    type="text"
                    name="firstName"
                    value={this.state.firstName}
                    onChange={this.handleChange}
                    />
                </label>
                <label>
                    Last name
                    <input
                    type="text"
                    name="lastName"
                    value={this.state.lastName}
                    onChange={this.handleChange}
                    />
                </label>
                <label>
                    Email
                    <input
                    type="text"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    />
                </label>
                <label>
                    Password
                    <input
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    />
                </label>
                <label>
                    Confirm password
                    <input
                    type="password"
                    name="confirmPassword"
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
                </label>
                <input 
                type="submit" 
                value="Submit"
                onClick={this.signUp}
                />
            </form>

        </div>
        
    );
  }
}

export default SignUpForm;