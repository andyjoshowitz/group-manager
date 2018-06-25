const initialState = {
  isAuthenticated: localStorage.getItem('team_collab.token') ? true : false,
  isAuthenticating: false,
  currentUser: { admin: (localStorage.getItem('team_collab.admin')=== 'true'), email: localStorage.getItem('team_collab.email')},
  errorMessage: ''
}

export default (state = initialState, action) => {
  switch(action.type) {
    case 'AUTHENTICATION_REQUEST':
      return {
        ...state,
        isAuthenticating: true,
      }
    case 'AUTHENTICATION_SUCCESS':
      return {
        isAuthenticated: true,
        isAuthenticating: false,
        currentUser: action.currentUser
      }
    case 'AUTHENTICATION_FAILURE':
      return Object.assign({}, state, {
        isAuthenticating: false,
        isAuthenticated: false,
        currentUser: {},
        errorMessage: action.message
      })
    case 'LOGOUT_SUCCESS':
      return Object.assign({}, state, {
        isAuthenticating: true,
        isAuthenticated: false,
        currentUser: {},
        errorMessage: ''
      })
    default:
      return state;
  }
}
