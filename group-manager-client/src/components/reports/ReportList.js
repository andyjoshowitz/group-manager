import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class ReportList extends Component {


  render() {
    const sorted_reports = this.props.reports.sort(function(a,b) {
      let timeA = new Date(a.created_at);
      let timeB = new Date(b.created_at);
      if(timeA < timeB) return 1;
      if(timeA > timeB) return -1;
      return 0;
    })
    const renderReports = sorted_reports.map(report =>
    <tr key={report.id} className="table-row"  >
      <td> <Link to={`/reports/${report.id}`}><h4 >{report.title}</h4></Link> </td>
      <td> {report.created_at.substring(0, 10)}</td>
      <td> {report.created_at.substring(11, 19)}</td>
      <td> {report.info}</td>
      <td> {report.user_email}</td>
      {report.assistance_needed ? (<td className="flagged-red"> yes </td>) : (<td> no </td>)}
    </tr>
    );

    return (
      <table className="reports-table">
        <tbody>
          <tr className="table-header">
            <th>Report Name</th><th>Date</th><th>Time</th><th>Info</th><th>User</th><th>Assistance needed?</th>
          </tr>
          {renderReports}
        </tbody>
      </table>
    )
  }
}

export default ReportList;
