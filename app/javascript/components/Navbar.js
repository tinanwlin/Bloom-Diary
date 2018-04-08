import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Link } from 'react-router-dom'
import {Navbar,NavItem,Modal,Input,Button} from "react-materialize"
class NavbarComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loginEmailValue:"",
      loginPasswordValue:""
    }
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.loginEmailOnChange = this.loginEmailOnChange.bind(this);
    this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this);
    this.handleUserLogout = this.handleUserLogout.bind(this);
  }
  //should I use Jquery to get the value of form or react states?
  loginEmailOnChange(event){
    this.setState({ loginEmailValue:event.target.value});
  }
  
  handleLoginSubmit(event){
    console.log("Login Sumbit Clicked!");
    let $email = $("#loginEmail").val();
    let $password= $("#loginPassword").val();
    console.log("$Email",$email,"$Password",$password);
    $.post("/sessions",{email:$email,password:$password},(response)=>{
      console.log("this is response:",response);
        console.log("nickname:",response.data.nickname);
        this.props.setUser(response.data.nickname);
        $('#loginModal').modal('close');
    });
  }

  handleRegisterSubmit(event) {
    console.log("Register Submit Clicked!");
    let $email = $("#registerEmail").val();
    let $nickname = $("#registerNickname").val();
    let $password = $("#registerPassword").val();
    let $confirmpassword =$("#registerConfirmPassword").val();
    $.post('/users',{email:$email,nickname:$nickname,password:$password,password_confirmation:$confirmpassword},(err)=>{
      if (err){
        err.errors.forEach((msg)=>{
          alert(msg);
        });
      }else{
        $('#registerModal').modal('close');
      }
    })
  }

  handleUserLogout(){
    $.ajax({
      url:'/sessions',
      type:'DELETE',
      success:()=>{
        this.props.setUser(null);
      }
    })
  }

  navManagement(sessionState){
    if (sessionState){
      return(
        <React.Fragment>
          <NavItem onClick={this.handleUserLogout}>Logout</NavItem>
          <NavItem>Welcome {this.props.userSession}</NavItem>
        </React.Fragment>
      );
    }else{
      return(
        <React.Fragment>
          <NavItem onClick={() => { $('#loginModal').modal('open') }}>Login</NavItem>
          <NavItem onClick={() => { $('#registerModal').modal('open') }}>Register</NavItem>
        </React.Fragment>
      );
    }

  }


  render () {
    //  const Nav = styled.nav`
    //   margin: 0;
    //   padding: 0;
    //   font-size: 1.5em;
    //   text-align: center;
    //   color: palevioletred;
    //   background-color: black;
    // `;

    return (
      <React.Fragment>
        
          <Navbar brand='logo' right className="topNav">
            <ul>
              <li><Link to='/' className="NavItem">Home</Link></li>
              <li><Link to='/journals'>Journals</Link></li>
              <li><Link to='/profile'>Profile</Link></li>
              {this.navManagement(this.props.userSession)}
            </ul> 
          </Navbar>

        <Modal
          header='Login'
          id="loginModal">
          <Input id="loginEmail" type="email" label="Email" s={6} onChange={this.loginEmailOnChange}/>
          <Input id="loginPassword" type="password" label="Password" s={6} />
          <Button id="loginSubmit" waves='light' onClick={this.handleLoginSubmit}>Submit</Button>
        </Modal>

        <Modal
          header='Register'
          id="registerModal">
            <Input id="registerEmail" type="email" label="Email" s={12} />
            <Input id="registerNickname" s={12} label="Nickname" />
            <Input id="registerPassword" type="password" label="Password" s={12} />
            <Input id="registerConfirmPassword" type="password" label="Confirm Password" s={12} />
            <Button id="registerSumbit" waves='light' onClick={this.handleRegisterSubmit}>Submit</Button>
        </Modal>
       
      </React.Fragment>
    );
  }
}

export default NavbarComponent
