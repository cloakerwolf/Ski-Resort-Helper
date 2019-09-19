import React, { Component } from 'react';
import { connect } from 'react-redux';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Hill from '../Hill/Hill';
import { withStyles } from '@material-ui/core/styles';





const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: 'auto',
    height: 'auto',
  },
});
// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

class InfoPage extends Component {
  componentDidMount() {
    this.getHillsVisited();
  }



  getHillsVisited = () => {
    this.props.dispatch({
      type: 'FETCH_HILLS_VISITED'
    })
  }

  seeDescription = (id) => {
    console.log('clicked pic', id);
    this.props.history.push(`/description/${id}`);

  }

  render() {
    let hills = this.props.hillsVisited.map((hill) => {
      return (
        <GridListTile key={hill.id} style={{ width: 'auto' }}>
          <Hill hill={hill} seeDescription={this.seeDescription} key={hill.id} />
        </GridListTile>
      )
    })

    const { classes } = this.props;
    return (
      <div>

        <GridList
          cols={2}
          cellHeight={200}
          spacing={50}
          className={classes.gridList}
        >

          {JSON.stringify(this.props.hillsVisited)}
          {hills}
        </GridList>
      </div>
    )
  }



}

const mapStateToProps = reduxStore => ({
  hillsVisited: reduxStore.hillsVisited,
});

export default connect(mapStateToProps)(withStyles(styles)(InfoPage));

