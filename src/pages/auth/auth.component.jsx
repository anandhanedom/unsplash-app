import React, { Component } from 'react';

//Components
import SignIn from '../../components/signIn/signIn.component';
import SignUp from '../../components/signUp/signUp.component';

class AuthenticationPage extends Component {
  constructor(props) {
    super(props);
    this.state = { showSignIn: true };
  }

  toggleSignIn = () => {
    this.setState({ showSignIn: !this.state.showSignIn });
  };

  render() {
    return this.state.showSignIn ? (
      <SignIn toggleSignIn={this.toggleSignIn} />
    ) : (
      <SignUp toggleSignIn={this.toggleSignIn} />
    );
  }
}

export default AuthenticationPage;
