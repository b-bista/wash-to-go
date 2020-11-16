import React from 'react';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';

const useStyles = makeStyles({

    spacing: {
        
    }

});

class EditAccount extends React.Component {

    state = {
        firstName: '',
        lastName: '',
        Adress: '',
        Phone: '',
        Email: '',
      }

      confirm(){
          alert("Are you sure these are the changes you wanted?");
      }

    render() {
        return (
            <div>
                <p>Edit Your Account Information</p>
                <form>
                <label>
                    First Name 
                    <input
                    type="text"
                    name="firstName"
                    value={this.state.firstName}
                    onChange={this.handleChange}
                    style= {{marginLeft: '5px'}}
                    />
                </label>
                <br/>
                <label>
                    Last Name 
                    <input 
                    type="text"
                    name="lastName"
                    value={this.state.lastName}
                    onChange={this.handleChange}
                    style= {{marginLeft: '5px'}}
                    />
                </label>
                <br/>
                <label>
                    Address 
                    <input
                    type="text"
                    name="Address"
                    value={this.state.Address}
                    onChange={this.handleChange}
                    style= {{marginLeft: '20px'}}
                    />
                </label>
                <br/>
                <label>
                    Phone 
                    <input
                    type="text"
                    name="Phone"
                    value={this.state.Phone}
                    onChange={this.handleChange}
                    style= {{marginLeft: '30px'}}
                    />
                </label>
                <br/>
                <label>
                    Email 
                    <input
                    type="text"
                    name="Email"
                    value={this.state.Email}
                    onChange={this.handleChange}
                    style= {{marginLeft: '35px'}}
                    />
                </label>
                <br/>
                <input 
                type="submit" 
                value="Confirm Changes"
                style = {{marginTop: '50px'}}
                onClick= {this.confirm()}
                />
                </form>
            </div>
        )
    }
}


export default EditAccount;



