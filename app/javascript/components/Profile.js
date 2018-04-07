import React, {Component} from 'react';
import {LineChart, Line} from 'recharts';

class Profile extends Component {
  render() {
    return (
      <form> 
        <label>Name:
          <input type="text" name="name" />
        </label>
          <label>Email:
            <input type="email" name="email" />
        </label> 
          <input type = "submit" value = "Submit" /> 
      </form>
    );
  }  
}

export default Profile;