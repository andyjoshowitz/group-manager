import 'isomorphic-fetch';
const API_URL = 'http://localhost:3001/api';

function authenticationRequest(creds) {
  return {
    type: 'AUTHENTICATION_REQUEST',
    isAuthenticating: true,
    isAuthenticated: false,
    creds
  }
}

function setCurrentUser(user) {
  return {
    type: 'AUTHENTICATION_SUCCESS',
    isAuthenticating: false,
    isAuthenticated: true,
    currentUser: user
  }
}

function loginError(message) {
  return {
    type: 'AUTHENTICATION_FAILURE',
    isAuthenticating: false,
    isAuthenticated: false,
    message
  }
}

export default function login(creds, router) {
  let config = {
    method: 'POST',
    body: JSON.stringify({
      user: creds
    }),
    headers: {
      'Accept' : 'application/json',
      'Content-Type': 'application/json'
    }
  }

  return dispatch => {
    dispatch(authenticationRequest(creds))
    return fetch(`${API_URL}/auth`, config)
      .then(response => response.json())
      .then(body => {
        if (body.user.id) {
          localStorage.setItem('team_collab.token', body.token);
          localStorage.setItem('team_collab.admin', body.user.admin);
          localStorage.setItem('team_collab.email', body.user.email);
          dispatch(setCurrentUser(body.user));
          router.replace(`/`)
        } else {
          dispatch(loginError(body.error))
          return Promise.reject(body)
        }
    }).catch((err) => {console.log("Error:", err );
     alert("Error: Invalid credentials. Please try again.");})
  }
}
