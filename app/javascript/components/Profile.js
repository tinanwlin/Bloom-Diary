import React, {Component} from 'react';
import { Row, Col, Input, Button, Card, CardTitle, CardPanel, Parallax } from 'react-materialize';
import MyComponent from './Chart.js';

class Profile extends Component {
  render() {
    return (
      <div className="profilePage parallax-container">
        <Col className="profileCard" m={6} s={12}>
          <Card className="profileContent" title="Profile">
            <Input s={6} label="Nickname" validate defaultValue='Alvin' alt="nickname" /> 
            <Input s={6} label="Email" validate defaultValue='alvin@alvin.com' alt="email" />
              <div>
                <Button waves='light'>Update Change</Button>
              </div>
          </Card>
        </Col>
          < MyComponent />
      </div>
    );
  }  
}

export default Profile;