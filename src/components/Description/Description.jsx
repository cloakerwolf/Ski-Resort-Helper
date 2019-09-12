import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';



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

    // //calls the avg rating for this hill id
    // fetchAvgRating = () =>{
    //     let id = this.props.match.params.id;
    //     this.props.dispatch({
    //         type: 'FETCH_RATING',
    //         payload: id
    //     })
    // }

    
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
            <div>
                {/* {JSON.stringify(this.props.comments)} */}
                {/* {hill Name} */}
                <h1>{this.props.specificHill.name}</h1>
                {/* {Avg Rating out of 5} */}
                <p>Average Rating:  {this.props.rating.rating}/5</p>
                {/* {create a button that takes you to the add visit page} */}
                    <Button variant="contained" color="primary" onClick={() => this.props.history.push(`/addvisit/${this.props.match.params.id}`)} className="btn btn-secondary btn-lg checkoutBtn">Add Visit</Button>
            </div>
            {/* {display img on page for the trails} */}
            <img
                src={this.props.specificHill.picture}
                alt={this.props.specificHill.pic_gen_area}
                className= "descriptionImg"
            ></img>
            {/* {description} */}
                <p>Description: {this.props.specificHill.description}</p>
                {/* {# of lifts} */}
                <p># of lifts: {this.props.specificHill.number_of_lifts}</p>
                {/* {# of terrain parks} */}
                <p># of terrain Parks: {this.props.specificHill.terrain_park}</p>
                {/* {Do they make their own snow} */}
                <p>snowmaking: </p>{this.props.specificHill.snowmaking? <p>yes</p>: <p>no</p>}
                {/* {what is the address of the hill} */}
                <p>address: {this.props.specificHill.address}</p>
                {/* {image of the general area} */}
            <img
                    src={this.props.specificHill.pic_gen_area}
                    alt={this.props.specificHill.picture}
                    className= "descriptionImg"
            ></img>
            <br/>
            {/* {link this to the site of the hill} */}
            <div className="websiteLink">
                <a href={this.props.specificHill.website_url} >{this.props.specificHill.website_url}</a>
            </div>    
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