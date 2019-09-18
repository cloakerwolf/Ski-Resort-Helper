import React, {Component} from 'react';
import { connect } from 'react-redux';
// import LogOutButton from '../LogOutButton/LogOutButton';
import Hill from '../Hill/Hill';
//material-ui
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ListSubheader from '@material-ui/core/ListSubheader';



const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    // backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: 'auto',
    height: 'auto',
  },
});


// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`
// const UserPage = (props) => (
//   <div>
//     <h1 id="welcome">
//       Welcome, { props.user.username }!
//     </h1>
//     <p>Your ID is: {props.user.id}</p>
//     <LogOutButton className="log-in" />
//   </div>
// );

class UserPage extends Component {
  componentDidMount() {
    this.getHills();
  }

 

  getHills = () => {
    this.props.dispatch({
      type: 'FETCH_HILL_LIST'
    })
  }

  seeDescription = (id) => {
    console.log('clicked pic', id);
    this.props.history.push(`/description/${id}`);
    
  }


  render() {
    //loop through the list of hills
    let hills = this.props.hillList.map((hill) => {
      return (
        <GridListTile key={hill.id} style={{width: 'auto', border: "inset", borderColor: "Yellow"}}>
          <Hill hill={hill} seeDescription={this.seeDescription} key={hill.id} />
        </GridListTile>
      )
    })

    const {classes} = this.props;
    return (
      <div className={classes.root} >
        {/* <h1 id="welcome">
          Welcome, {this.props.user.username}!
          <p>Your ID is: {this.props.user.id}</p>
        </h1> */}
        
       
        {/* <LogOutButton className="log-in" /> */}
        <ListSubheader component="div" style={{textDecoration: "underline", fontWeight: "bold", fontSize: "2.5em", color: "White", backgroundColor: "blue", fontFamily: "Snowtop"}}>Hill List</ListSubheader>
        <GridList
            cols={2}
            cellHeight={200}
            spacing={50}
            className={classes.gridList}
            >
        
        {/* {JSON.stringify(this.props.hillList)} */}
        {hills}
        </GridList>
      </div>
    )
  }

}

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
  hillList: state.hillList,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(withStyles(styles)(UserPage));
