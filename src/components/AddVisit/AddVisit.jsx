import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';



class AddVisit extends Component {

    // state = {

    // }


    componentDidMount() {
        this.fetchHillInformation();
    }


    fetchHillInformation = () => {
        let id = this.props.match.params.id;
        this.props.dispatch({
            type: 'FETCH_SPECIFIC_Hill',
            payload: id
        });
    }

    handleRadio = (event) => {
        this.setState({ ...this.state,
            rating: event.target.value
        })
    }


    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.comments === '' || this.state.rating === '') { alert('ENTER A INPUT And A Comment!') }
        else {
            console.log(this.state);
            
            let userComment = {
                id: this.props.specificHill.id,
                rating: this.state.rating,
                comments: this.state.comments
            }
            console.log('userComment', userComment);
            
            this.props.dispatch({
                type: 'ADD_USER_COMMENT_RATING',
                payload: userComment
                // {
                //     hillId: this.props.specificHill.id,
                //     rating: this.state.rating,
                //     comments: this.state.comments
                // }
            });
            this.props.history.push(`/home`);
        }
    }







    render() {



        return (
            <>
                <div>
                    <h1>Add Visit</h1>
                    <h2>{this.props.specificHill.name}</h2>
                    
                    <form  >
                    <input className="inputs" type="radio" name="feeling" value="1" onChange={this.handleRadio} />1
                    <input className="inputs" type="radio" name="feeling" value="2" onChange={this.handleRadio} />2
                    <input className="inputs" type="radio" name="feeling" value="3" onChange={this.handleRadio} />3
                    <input className="inputs" type="radio" name="feeling" value="4" onChange={this.handleRadio} />4
                    <input className="inputs" type="radio" name="feeling" value="5" onChange={this.handleRadio} />5
                    <br />
                        <textarea
                            rows="20"
                            col="100"
                            name="comments"
                            width= "50%"
                            placeholder="comments"
                            onChange={(event) => this.setState({ ...this.state, comments: event.target.value })}
                        />
                        <div>
                            <Button variant="contained" color="secondary" onClick={() => { this.props.history.push(`/description/${this.props.match.params.id}`) }} className="btn btn-secondary btn-lg checkoutBtn">Back</Button>
                            <Button variant="contained" color="primary" onClick={this.handleSubmit} className="btn btn-secondary btn-lg checkoutBtn">Save</Button>
                        </div>
                    </form>
                    {/* <textarea
                        rows="20"
                        col="100"
                        name="comments"
                        placeholder="comments"
                        onChange={(event) => this.setState({ comments: event.target.value })}
                    /> */}
                </div>
                {/* <div>
                    <Button variant="contained" color="secondary" onClick={() => { this.props.history.push(`/description/${this.props.match.params.id}`) }} className="btn btn-secondary btn-lg checkoutBtn">Cancel</Button>
                    <Button variant="contained" color="primary" onClick={this.edit} className="btn btn-secondary btn-lg checkoutBtn">Save</Button>
                </div> */}
            </>
        );
    }
}
const mapStateToProps = (reduxStore) => {
    return {
        specificHill: reduxStore.specificHill,
    }
}
export default connect(mapStateToProps)(AddVisit);