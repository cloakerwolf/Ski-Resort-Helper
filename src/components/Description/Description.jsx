import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

//material-ui
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





class Description extends Component {


    componentDidMount() {
        this.fetchHillInformation();
        this.fetchComments();
    }


    fetchHillInformation = () => {
        let id = this.props.match.params.id;
        this.props.dispatch({
            type: 'FETCH_SPECIFIC_Hill',
            payload: id
        });
    }


    fetchComments = () => {
        let id = this.props.match.params.id;
        this.props.dispatch({
            type: 'FETCH_USER_COMMENTS',
            payload: id
        })
    }


    
    render() {
       let comment = this.props.comments.comments.map((Comment) => {
           return (
               <GridListTile key={Comment} cols={1} row={1}>
                   <div key={Comment}>{Comment}</div>
               </GridListTile>

           )
       })

        const { classes } = this.props;
        return (
            <>
            <div>
                <h1>{this.props.specificHill.name}</h1>
                <p>Average Rating:  {this.props.comments.rating}/5</p>
                    <Button variant="contained" color="primary" onClick={() => this.props.history.push(`/addvisit/${this.props.match.params.id}`)} className="btn btn-secondary btn-lg checkoutBtn">Add Visit</Button>
            </div>
            <img
                src={this.props.specificHill.picture}
                alt={this.props.specificHill.pic_gen_area}
                className= "descriptionImg"
            ></img>
                <p>Description: {this.props.specificHill.description}</p>
                <p># of lifts: {this.props.specificHill.number_of_lifts}</p>
                <p># of terrain Parks: {this.props.specificHill.terrain_park}</p>
                <p>snowmaking: </p>{this.props.specificHill.snowmaking? <p>yes</p>: <p>no</p>}
                <p>address: {this.props.specificHill.address}</p>
            <img
                    src={this.props.specificHill.pic_gen_area}
                    alt={this.props.specificHill.picture}
                    className= "descriptionImg"
            ></img>
            <br/>
                <a href={this.props.specificHill.website_url}>{this.props.specificHill.website_url}</a>
                <div className={classes.root}>
                    <GridList 
                        cols={1}
                        cellHeight={20}
                        spacing={20}
                        className={classes.gridList}
                    >
                        {comment}
                    </GridList>
                </div>
            </>
        );
    }
}
const mapStateToProps = (reduxStore) => {
    return {
        specificHill: reduxStore.specificHill,
        comments: reduxStore.comment,
    }
}
export default connect(mapStateToProps)(withStyles(styles)(Description));