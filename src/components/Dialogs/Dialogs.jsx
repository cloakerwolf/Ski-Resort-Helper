import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';
import DeleteIcon from '@material-ui/icons/Delete';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';



// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'
function PaperComponent(props) {
  return (
    <Draggable>
      <Paper {...props} />
    </Draggable>
  );
}

class Dialogs extends Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  

  render(){
    return(
      <>
        {/* <Button variant="contained" color="primary" onClick={this.handleClickOpen}>
          go to:  {this.props.hill.website_url}
        </Button> */}
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          PaperComponent={PaperComponent}
          aria-labelledby="draggable-dialog-title"
        >
          <DialogTitle id="draggable-dialog-title">Leave Site?</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Are you sure you want to leave the site?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} variant="contained" color="primary">
              Stay on this page
            </Button>
            <Button  variant="contained" color="secondary" >
              <a href={this.props.hill.website_url} target="_blank" rel="noopener noreferrer" >{this.props.hill.website_url}</a>
            </Button>
          </DialogActions>
        </Dialog>
        <TableRow key={this.props.hill.id}>
          {/* <Hill hill={hill} seeDescription={this.seeDescription} key={hill.id} /> */}
          <TableCell>{this.props.hill.name}</TableCell>
          <TableCell>{this.props.hill.description}</TableCell>
          <TableCell>{this.props.hill.address}</TableCell>
          <TableCell>{this.props.hill.number_of_lifts}</TableCell>
          <TableCell>{this.props.hill.terrain_park}</TableCell>
          <TableCell>{this.props.hill.trails}</TableCell>
          {/* <TableCell><a href={hill.website_url}>{hill.website_url}</a></TableCell> */}
          <TableCell>
            <Button variant="contained" color="primary" onClick={this.handleClickOpen}>
              go to:  {this.props.hill.website_url}
            </Button>
            {/* <Button variant="contained" color="primary">{this.props.hill.website_url}</Button> */}
          </TableCell>
          <TableCell>
            <Button variant="contained" color="primary" onClick={() => this.props.history.push(`/edithill/${this.props.hill.id}`)}>Edit Hill</Button>
          </TableCell>
          <TableCell>
            <Button variant="contained" color="secondary" onClick={() => this.deleteHill(this.props.hill.id)}>Delete Hill<DeleteIcon /></Button>
          </TableCell>
        </TableRow>
      </>
      
    )
  }
};

export default withRouter(connect()(Dialogs));






