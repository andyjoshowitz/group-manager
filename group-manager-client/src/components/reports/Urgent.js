import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import ReportList from './ReportList';
import Report from './Report';

class Urgent extends Component {
  render() {
    const urgent = this.props.reports.filter(report => report.assistance_needed === true)

    return (
      <div>
          <h2>Reports flagged for Assistance:</h2>
          <div className="main">
            <ReportList reports={urgent} />
            <Route path={`${this.props.match.url}/:reportId`} component={Report} />
          </div>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    reports: state.reports
  }
}

export default connect(mapStateToProps)(Urgent);
