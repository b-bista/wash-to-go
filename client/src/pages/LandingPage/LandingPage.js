import React from 'react'
import SignUpForm from './components/SignUpForm'
//import PostsListPage from '../PostsListPage' 
import LoginForm from './components/LoginForm'

class LandingPage extends React.Component {
    state = {
      newUser: false
    }

    newUserToggle = (e) => {
      e.preventDefault();
      this.setState({newUser: !this.state.newUser});
    }

    isLoggedInToggle = (e) => {
      e.preventDefault();
      this.setState({isLoggedIn: !this.state.isLoggedIn});
    }
  
    render() {
      if (this.state.newUser)
        return <SignUpForm toggleUser={this.newUserToggle}/>;
      else
        return <LoginForm toggleUser={this.newUserToggle}/>;
    }

  }
  
  export default LandingPage;