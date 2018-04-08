import React, {Component} from 'react';
import {LineChart, Line} from 'recharts';
import { Row, Col, Input, Button, Card, CardTitle, CardPanel } from 'react-materialize';

class Profile extends Component {
  render() {
    return (
      <Col className="profileCard" m={6} s={12}>
        <Card className="profileContent" title="Profile">
            <Input s={6} label="Nickname" validate defaultValue='Alvin' alt="nickname" /> 
            <Input s={6} label="Email" validate defaultValue='alvin@alvin.com' alt="email" />
              <div>
                <Button waves='light'>Update Change</Button>
              </div>
        </Card>
      </Col>
      //   <div class>
      //     <Row> 
      //       <Input s={6} label="Nickname" validate defaultValue='Alvin' alt="nickname" /> 
      //       <Input s={6} label="Email" validate defaultValue='alvin@alvin.com' alt="email" />
      //         <div> 
      //           <Button waves='light'>Update Change</Button>
      //         </div>
      //     </Row>
      //  </div>
    );
  }  
}

export default Profile;