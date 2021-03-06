import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import { connect } from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'

import Dialogs from '../Dialogs/Dialogs';
import UserPage from '../UserPage/UserPage';
import InfoPage from '../InfoPage/InfoPage';
import Description from '../Description/Description';
import AddVisit from '../AddVisit/AddVisit';
import Admin from '../Admin/Admin';
import Edithill from '../Edithill/Edithill';
import AddHill from '../AddHill/AddHill';
// import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';
// import { withStyles } from '@material-ui/core/styles';

import './App.css';


// const styles = theme => ({
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     padding: theme.spacing.unit * 2,
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   },
// });


class App extends Component {
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_USER' })
  }



  render() {
    return (
      <Router>
        <div>
          {/* <Paper> */}
          {/* <Grid container spacing={24} alignItems={'center'} justify={'space-evenly'}> */}
          {/* <Grid item xs={24}> */}
          <Nav />
          {/* </Grid> */}
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/home" />
            {/* Visiting localhost:3000/about will show the about page.
            This is a route anyone can see, no login necessary */}
            <Route
              exact
              path="/dialogs"
              component={Dialogs}
            />
            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/home will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the 'Login' or 'Register' page.
            Even though it seems like they are different pages, the user is always on localhost:3000/home */}
            <ProtectedRoute
              exact
              path="/home"
              component={UserPage}
            />
            {/* This works the same as the other protected route, except that if the user is logged in,
            they will see the info page instead. */}
            <ProtectedRoute
              exact
              path="/info"
              component={InfoPage}
            />
            <ProtectedRoute
              exact
              path="/description/:id"
              component={Description}
            />
            <ProtectedRoute
              exact
              path="/addvisit/:id"
              component={AddVisit}
            />
            <ProtectedRoute
              exact
              path="/admin"
              component={Admin}
            />
            <ProtectedRoute
              exact
              path="/edithill/:id"
              component={Edithill}
            />
            <ProtectedRoute
              exact
              path="/addhill"
              component={AddHill}
            />
            {/* If none of the other routes matched, we will show a 404. */}
            <Route render={() => <h1>404</h1>} />
          </Switch>
          <Footer />
          {/* </Grid> */}
          {/* </Paper> */}
        </div>
      </Router>
    )
  }
}

export default connect()(App);

// export default withStyles(styles)(connect()(App));
