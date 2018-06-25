import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteReport } from '../../redux/actions/reports'

class Report extends Component {

  handleOnDelete = () => {
    this.props.deleteReport(this.props.report, this.props.history)
  }


  render() {
    return (
      <div key={this.props.report.id} className="report-box">
        <h2>{this.props.report.title}</h2>
        <p className="description">{this.props.report.info}</p>
        {this.props.report.assistance_needed &&
        	<p className="flagged-red">The report creator has requested assistance</p>
        }
        {this.props.report.repo_url &&
         <div><a className="github_url" target="_blank" href={this.props.report.repo_url}>Link To Respository</a><br/><br/></div>
        }
        {this.props.isAdmin && this.props.report.user_email !== undefined &&
          <button onClick={this.handleOnDelete}>Delete </button>
        }
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const reports = state.reports || [];
  const report_target_id = parseInt((ownProps.match.params.reportId), 10);
  const too_high = (reports.find(report => report.id >= report_target_id) === undefined)
  const report_target = reports.find(report => report.id === report_target_id)
  console.log(too_high)
  if (report_target) {
    return { report: report_target, isAdmin: state.auth.currentUser.admin}
  } else if (too_high) {
    return { report: {title: "An Ode to the Uncreated",
	info: " One day to exist? Brimming possibilities... Or might never be"}, isAdmin: state.auth.currentUser.admin}
  } else if (!too_high) {
    return { report: {title: "An Ode to the Forgotton",
	info: "Brought low in its death, No one still remembers. Much like you, one day"}, isAdmin: state.auth.currentUser.admin}
  } else {
    return { report: {title: "Error: does not exist"}, isAdmin: state.auth.currentUser.admin}
  }
}

export default connect(mapStateToProps, { deleteReport })(Report);
