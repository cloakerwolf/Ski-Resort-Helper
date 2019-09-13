import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

class Edithill extends Component {
    //shows the old state of coming from the db which is later changed when things are editted
    state = {
        name: this.props.specificHill.name,
        description: this.props.specificHill.description,
        picture: this.props.specificHill.picture,
        pic_gen_area: this.props.specificHill.pic_gen_area,
        address: this.props.specificHill.address,
        number_of_lifts: this.props.specificHill.number_of_lifts,
        terrain_park: this.props.specificHill.terrain_park,
        snowmaking: this.props.specificHill.snowmaking,
        trails: this.props.specificHill.trails,
        website_url: this.props.specificHill.website_url
    }


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


    edit = (event) => {
        event.preventDefault();
        //replaces the state with the new imputs
        let editted = {
            id: this.props.specificHill.id,
            name: this.state.name,
            description: this.state.description,
            picture: this.state.picture,
            pic_gen_area: this.state.pic_gen_area,
            address: this.state.address,
            number_of_lifts: this.state.number_of_lifts,
            terrain_park: this.state.terrain_park,
            snowmaking: this.state.snowmaking,
            trails: this.state.trails,
            website_url: this.state.website_url
        }
        //send the editted state back to the saga
        console.log('editted', editted);
        this.props.dispatch({

        })
        //sends you back to details for the one you just changed
        this.props.history.push(`/admin`)

    }


    render() {
        return (
            <>


                <div>
                    <h1>Edit Hill Information</h1>
                    <h2>{this.props.specificHill.name}</h2>
                    <form>
                        <p>name of hill:</p>
                        <textarea
                            rows="2"
                            col="200"
                            name="name"
                            
                            value={this.props.specificHill.name}
                            onChange={(event) => this.setState({ ...this.state, name: event.target.value })}
                        />
                        <p>Hill Description:</p>
                        <textarea
                            rows="2"
                            col="200"
                            name="name"
                            
                            value={this.props.specificHill.description}
                            onChange={(event) => this.setState({ ...this.state, name: event.target.value })}
                        />
                        <div>
                            <Button variant="contained" color="secondary" onClick={() => { this.props.history.push(`/admin`) }} >Cancel</Button>
                            <Button variant="contained" color="primary" onClick={this.edit} >Save Changes</Button>
                        </div>
                    </form>
                </div>
            </>
        );
    }
}
const mapStateToProps = (reduxStore) => {
    return {
        specificHill: reduxStore.specificHill,
    }
}
export default connect(mapStateToProps)(Edithill);