import React from 'react';

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
      //
  }

  render() {

    return (
      <div>

        <p>Log in to begin finding laundry service near you!</p>
        
        <form>
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
            <input 
            type="submit" 
            value="Submit"
            onClick={this.login}
            />
        </form>

        <a onClick={this.props.toggleUser}>Already registered? Click here to log in</a>

      </div>
        
    );
  }
}

export default LoginForm;