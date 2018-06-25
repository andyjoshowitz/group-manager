function receiveLogout() {
  return {
    type: 'LOGOUT_SUCCESS',
    isAuthenticating: false,
    isAuthenticated: false
  }
}

export default function logoutUser() {
  return dispatch => {
    localStorage.removeItem('team_collab.token')
    localStorage.removeItem('team_collab.admin')
    localStorage.removeItem('team_collab.email')
    dispatch(receiveLogout())
  }
}
