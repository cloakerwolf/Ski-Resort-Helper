import React, { Component } from 'react';
import { connect } from 'react-redux';
//material-ui 
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';








class Description extends Component {

    //renders once
    componentDidMount() {
        this.fetchHillInformation();
        this.fetchComments();
    }

    //calls the information for the hill id selected
    fetchHillInformation = () => {
        let id = this.props.match.params.id;
        this.props.dispatch({
            type: 'FETCH_SPECIFIC_Hill',
            payload: id
        });
    }

    //calls the comments, username, and rating  that go with this hill id
    fetchComments = () => {
        let id = this.props.match.params.id;
        this.props.dispatch({
            type: 'FETCH_USER_COMMENTS',
            payload: id
        })
    }




    render() {
        //loops through the username and comments
        let comment = this.props.comments.map((Comment, index) => {
            return (
                <TableRow key={index} >
                    {/* <div key={Comment.id}>{Comment.comments}</div> */}
                    <TableCell>{Comment.user}</TableCell>
                    <TableCell>{Comment.comments}</TableCell>
                </TableRow>

            )
        })





        return (
            <>

                <Grid container spacing={1} alignItems={'center'} justify={'space-evenly'}>
                    <Grid item xs={2} style={{ padding: 20, marginTop: 20, marginBottom: 20 }}>
                        <div>
                            {/* {JSON.stringify(this.props.comments)} */}
                            {/* {hill Name} */}
                            <h1>{this.props.specificHill.name}</h1>
                            {/* {Avg Rating out of 5} */}
                            <p>Average Rating:  {this.props.rating.rating}/5</p>
                            {/* {create a button that takes you to the add visit page} */}
                            <Button variant="contained" color="primary" onClick={() => this.props.history.push(`/addvisit/${this.props.match.params.id}`)} >Add Visit</Button>
                        </div>
                    </Grid>
                    {/* {display img on page for the trails} */}

                    <img
                        src={this.props.specificHill.picture}
                        alt={this.props.specificHill.pic_gen_area}
                        className="descriptionImg"
                    ></img>

                    {/* {description} */}
                    <Grid container spacing={1} alignItems={'center'} justify={'space-evenly'}>
                        <Grid item xs={12} style={{ padding: 20, marginTop: 20, marginBottom: 20, textAlign: "center" }}>
                            <Paper>Description: {this.props.specificHill.description}</Paper>
                        </Grid>
                        {/* {# of lifts} */}
                        <Grid item xs={6} style={{ padding: 20, marginTop: 20, marginBottom: 20 }}>
                            <Paper># of lifts: {this.props.specificHill.number_of_lifts}</Paper>
                        </Grid>
                        {/* {# of terrain parks} */}
                        <Grid item xs={6} style={{ padding: 20, marginTop: 20, marginBottom: 20 }}>
                            <Paper># of terrain Parks: {this.props.specificHill.terrain_park}</Paper>
                        </Grid>
                        {/* {Do they make their own snow} */}
                        <Grid item xs={6} style={{ padding: 20, marginTop: 20, marginBottom: 20 }}>
                            <Paper>snowmaking: {this.props.specificHill.snowmaking ? <>yes</> : <>no</>}</Paper>
                        </Grid>
                        {/* {what is the address of the hill} */}
                        <Grid item xs={6} style={{ padding: 20, marginTop: 20, marginBottom: 20 }}>
                            <Paper>address: {this.props.specificHill.address}</Paper>
                        </Grid>
                        {/* {image of the general area} */}
                    </Grid>
                    <Grid item xs={12} style={{ padding: 20, marginTop: 20, marginBottom: 20, textAlign: "center" }}>
                        <img
                            src={this.props.specificHill.pic_gen_area}
                            alt={this.props.specificHill.picture}
                            className="descriptionImg"
                        ></img>
                    </Grid>
                    <br />
                    {/* {link this to the site of the hill} */}
                    <Grid item xs={12} style={{ padding: 20, marginTop: 20, marginBottom: 20 }}>
                        <div className="websiteLink">
                            <Button variant="contained" color="inherit"><a href={this.props.specificHill.website_url} target="_blank" rel="noopener noreferrer" >{this.props.specificHill.website_url} </a></Button>
                        </div>
                    </Grid>
                    <Paper>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Username</TableCell>
                                    <TableCell>Comments</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>

                                {comment}

                            </TableBody>
                        </Table>
                    </Paper>
                </Grid>
            </>
        );
    }
}
const mapStateToProps = (reduxStore) => {
    return {
        specificHill: reduxStore.specificHill,
        comments: reduxStore.comment,
        rating: reduxStore.rating,
    }
}
export default connect(mapStateToProps)(Description);