// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
//
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }
//
// export default App;

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import AddReport from './components/reports/AddReport';
import NoPermission from './components/users/NoPermission';
import AllReports from './components/reports/AllReports';
import Report from './components/reports/Report';
import Login from './components/users/Login';
import Oops from './components/users/Oops';
import Logout from './components/users/Logout';
import NotFound from './components/NotFound';
import Deleted from './components/Deleted';
import Signup from './components/users/Signup';
import Urgent from './components/reports/Urgent';
import Secret from './components/Secret';
import Welcome from './components/Welcome';
import Home from './components/Home';
import { fetchReports } from './redux/actions/reports'


import './App.css';
class App extends Component {
  constructor() {
    super()
    this.ourGreatSecret = this.ourGreatSecret.bind(this)
    this.state = { title: "Team Collaberator" };
  }

  ourGreatSecret(e){
    e.preventDefault()
    let secrets = ["Meta Labor Locator", "Boar Mate Collator", "A Tame Collar Robot", "Meat Altar Bro Loco",
    "Arab Color Tea Molt", "Cobra, Atoll or Meat?", "Lab Coral Mare Toot", "Colt Bola Ate Armor","Boat Corral to Meal",
    "Abort Amoral Eclat","A Motorboat Caller", "Bromate Allocator", "Arboreal Tact Loom", "Clam Realtor Taboo",
    "Lateral Robot Coma", "Carrot Ablate Loom" ]
    let secret = secrets[Math.floor(Math.random()*secrets.length)]
    this.setState({title: secret})
  }

  componentDidMount() {
    this.props.fetchReports();
  }

  render() {
    return (
     <Router>
        <div className="App">
          <div className="header">
          <div className="navbar">

            <div className="user-admin">{this.props.isAdmin && "Logged in as Admin"} &nbsp; </div>
              {!this.props.isAuthenticated &&
                <span>
                  <NavLink className="navlink" to="/login">Log In</NavLink> |
                  <NavLink className="navlink" to="/signup">Sign Up</NavLink>
                </span>
              }
              {this.props.isAuthenticated &&
                <span>
                  <NavLink className="navlink" to="/">Home</NavLink> |
                  <NavLink className="navlink" to="/reports">All Reports</NavLink> |
                  <NavLink className="navlink" to="/urgent">Urgent</NavLink> |
                  <NavLink className="navlink" to="/reports/new">Submit Report</NavLink> |
                  <NavLink className="navlink" to="/logout">Logout</NavLink>
                </span>
              }
            </div>


            <h1 className="title">{this.state.title}</h1>
            <p className="catch-phrase">Too Meta (will change)</p>
          </div>
          <div className="wrapper">
          <Switch>
            <Route exact path="/" render={() => (
              !this.props.isAuthenticated ? (
                <Redirect to='/welcome'/>
              ) : (
                <Route render={(props) => (<Home userEmail={this.props.userEmail}/>)}/>
              )
            )}/>
             <Route exact path="/reports" render={() => (
              !this.props.isAuthenticated ? (
                <Redirect to='/oops'/>
              ) : (
                <Route component={AllReports} />
              )
            )}/>
            <Route exact path="/urgent" render={() => (
              !this.props.isAuthenticated ? (
                <Redirect to='/oops'/>
              ) : (
                <Route component={Urgent} />
              )
            )}/>
            <Route exact path="/reports/new" render={() => (
              !this.props.isAuthenticated ? (
                <Redirect to='/oops'/>
              ) : (
                <Route component={AddReport} />
              )
            )}/>
            <Route exact path="/super-secret" render={() => (
              !this.props.isAdmin ? (
                <Redirect to='/NoPermission'/>
              ) : (
                <Route render={(props) => (<Secret {...props} ourGreatSecret={this.ourGreatSecret}/>)}/>
              )
            )}/>
            <Route exact path="/login" component={Login} />
            <Route exact path="/logout" component={Logout} />
            <Route exact path="/deleted" component={Deleted} />
            <Route exact path="/welcome" component={Welcome} />
            <Route exact path="/NoPermission" component={NoPermission} />
            <Route exact path="/oops" component={Oops} />
            <Route exact path="/signup" component={Signup} />
            <Route path="/reports/:reportId" render={() => (
              !this.props.isAuthenticated ? (
                <Redirect to='/oops'/>
              ) : (
                <Route component={Report} />
              )
            )}/>
            <Route component={NotFound} />
          </Switch>
          </div>

          <div className="footer">
            <p>Copyright 2017. <NavLink className="hidden-link" to="/super-secret">All</NavLink> Rights Reserved.</p>
          </div>
        </div>
     </Router>
    );
  }
}

const mapStateToProps = state => ({
  reports: state.reports,
  isAuthenticated: state.auth.isAuthenticated,
  isAdmin: state.auth.currentUser.admin,
  userEmail: state.auth.currentUser.email
})

export default connect(mapStateToProps, { fetchReports })(App);
