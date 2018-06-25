import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import ReportList from './ReportList';
import report from './Report';

const AllReports = ({ match, reports }) =>
  <div>
    <div className="main">
      <h2>&nbsp;</h2>
      <ReportList reports={reports} />
      <Route path={`${match.url}/:reportId`} component={report} />
    </div>
  </div>

const mapStateToProps = (state) => {
  return {
    reports: state.reports
  }
}

export default connect(mapStateToProps)(AllReports);
