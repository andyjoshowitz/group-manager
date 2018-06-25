import React, { Component } from 'react';
import { connect } from 'react-redux';
import logout from '../../redux/actions/logout'

class Logout extends Component {

  componentWillMount(){
    this.props.logout();
  }

  render() {
    return (
      <div>
      <br/>
      You have Successfully Logged Out
      </div>
    )
  }
}

export default connect(null, { logout })(Logout)
