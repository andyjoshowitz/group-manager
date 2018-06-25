import React, { Component } from 'react';
import { connect } from 'react-redux';
import login from '../../redux/actions/auth'

class LoginForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }

  handleOnChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.login(this.state, this.props.history);
    this.setState({
      email: '',
      password: ''
    })
  }

  render() {
    return (
      <div>
        <form className="user-form">
          <h3>Log In</h3>
          <div>
            <label>Email:</label><br />
            <input name="email" type="email" value={this.state.email} onChange={this.handleOnChange}/>
          </div>
          <br></br>
          <div>
            <label>Password:</label><br />
            <input name="password" type="password" value={this.state.password} onChange={this.handleOnChange} />
          </div>
          <br></br>
          <button onClick={this.handleOnSubmit}>Log in</button>
        </form>
      </div>
    )
  }
}

export default connect(null, { login })(LoginForm)
