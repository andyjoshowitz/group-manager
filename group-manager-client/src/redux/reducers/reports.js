export default function reports(state = [], action){
  switch(action.type) {
    case 'SUCCESSFUL_REPORTS_FETCH':
      return action.reports
    case 'SUCCESSFUL_CREATE_REPORT':
      let report = Object.assign({}, action.payload)
      return state.concat(report)
    case 'SUCESSFUL_DELETE_REPORT':
      return state.filter(report => report.id !== action.id)
    default:
      return state;
  }
}
