import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createReport } from '../../redux/actions/reports';

class AddReport extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      assistance_needed: false,
      info: '',
      repo_url: '',
      user_email: localStorage.getItem('team_collab.email')
    }
  }

  handleOnChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }

  handleRadio = event => {
    const needsAssistance = event.currentTarget.value === "true" ? true: false;
    this.setState({
      assistance_needed: needsAssistance
    })
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.createReport(this.state, this.props.history);
    this.setState({
      title: '',
      assistance_needed: false,
      info: '',
      repo_url: ''
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleOnSubmit} className="report-form">
        <h2 className="report-form-title">Report Form</h2>
        <div>
          <label htmlFor="report_title">Report Name</label><br/>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleOnChange}
            required
            />
        </div><br/>

        <div>
          <label htmlFor="report_description">Info</label><br/>
          <textarea
            name="info"
            value={this.state.info}
            onChange={this.handleOnChange}
            required
            />
        </div><br/>

        <div>
          <label htmlFor="report_repo_url">Repo URL (optional)</label><br/>
          <input
            type="url"
            name="repo_url"
            value={this.state.repo_url}
            onChange={this.handleOnChange}
            />
        </div><br/>

	    <div>
            <label htmlFor="featured">Need Assistance?</label>
            <input type="radio" name="featured" value="true" onClick={this.handleRadio} /> Yes
            <input type="radio" name="featured" value="false" onClick={this.handleRadio} /> No
	    </div><br/><br/>

        <button>Submit</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    admin: state.auth.currentUser.admin
  }
}

export default connect(mapStateToProps, { createReport })(AddReport);
