import React, {Component} from 'react';
import {
  Row,
  Col,
  Input,
  Button,
  Card,
  CardTitle,
  CardPanel,
  Parallax
} from 'react-materialize';
import MyComponent from './Chart.js';

class Profile extends Component {
  constructor(props) {
    super(props);
    // console.log(this.state.nickname);
    this.state = {
      user: {}
    }
  }
  componentDidMount() {
    $.get('/me', (user) => {
      if (user) {
        // this.setState({ nickname: data.nickname, email: data.email })
        this.setState({ user });
      }
    });
  }

  updateUser = (name, value) => {
    const { user } = this.state;
    user[name] = value;
    this.setState({ user });
  }

  submitUser = (event) => {
    const { user } = this.state;
    $.ajax({
      url: `/users/${user.id}`,
      method: 'PUT',
      data: user
    })
    .done(res => {
      this.props.updateUserNickname(res.data.nickname);
      console.log('UPDATED USER: ', res)
    })
  }

  render() {

    const { user } = this.state;
    return (
      <div className="profilePage">
        <Col className="profileCard" m={6} s={12}>
          <Card className="profileContent" title="Profile">
            <Input className="profileNickname" s={6} label="Nickname" validate placeholder={user.nickname} value={user.nickname} onChange={e => this.updateUser('nickname', e.target.value) } alt="nickname"/>
            <Input className="profileEmail" s={6} label="Email" validate placeholder={user.email} value={user.email} onChange={e => this.updateUser('email', e.target.value) } alt="email"/>
            <div>
              <Button waves='light' onClick={this.submitUser}>Update Change</Button>
            </div>
          </Card>
        </Col>
        < MyComponent />
      </div>
    );
  }
}

export default Profile;