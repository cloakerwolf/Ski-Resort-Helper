import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

class AddHill extends Component {
    //shows the old state of coming from the db which is later changed when things are editted
    state = {
        name: '',
        description: '',
        picture: '',
        pic_gen_area: '',
        address: '',
        number_of_lifts: '',
        terrain_park: '',
        snowmaking: '',
        trails: '',
        website_url: ''
    }


    handleInputChangeFor = propertyName => (event) => {
        this.setState({
            [propertyName]: event.target.value,
        });
    }


   

    AddHill = (event) => {
        event.preventDefault();
        //replaces the state with the new imputs
        let added = {
            id: this.state.id,
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
        //send the added state back to the saga
        console.log('added', added);
        this.props.dispatch({
            type: 'ADD_HILL',
            payload: added
        })
        //sends you back to admin
        this.props.history.push(`/admin`)

    }


    render() {
        return (
            <>


                <div>
                    <h1>Add New Hill Information</h1>
                    <form>
                        <p>name of hill:</p>
                        <textarea
                            rows="2"
                            col="200"
                            name="name"
                            value={this.state.name}
                            onChange={this.handleInputChangeFor('name')}
                        />
                        <p>Hill Description:</p>
                        <textarea
                            rows="2"
                            col="200"
                            name="description"
                            value={this.state.description}
                            onChange={this.handleInputChangeFor('description')}
                        />
                        <p>image address of Picture of the hills:</p>
                        <textarea
                            rows="2"
                            col="200"
                            name="picture"
                            value={this.state.picture}
                            onChange={this.handleInputChangeFor('picture')}
                        />
                        <p>image address of a Picture of the general area:</p>
                        <textarea
                            rows="2"
                            col="200"
                            name="pic_gen_area"
                            value={this.state.pic_gen_area}
                            onChange={this.handleInputChangeFor('pic_gen_area')}
                        />
                        <p>The Address of the hill:</p>
                        <textarea
                            rows="2"
                            col="200"
                            name="address"
                            value={this.state.address}
                            onChange={this.handleInputChangeFor('address')}
                        />
                        <p>Number of Chairlifts:</p>
                        <textarea
                            rows="2"
                            col="200"
                            name="number_of_lifts"
                            value={this.state.number_of_lifts}
                            onChange={this.handleInputChangeFor('number_of_lifts')}
                        />
                        <p>Number of terrain Parks:</p>
                        <textarea
                            rows="2"
                            col="200"
                            name="terrain_park"
                            value={this.state.terrain_park}
                            onChange={this.handleInputChangeFor('terrain_park')}
                        />
                        <p>Do they make snow: true or false</p>
                        <textarea
                            rows="2"
                            col="200"
                            name="snowmaking"
                            value={this.state.snowmaking}
                            onChange={this.handleInputChangeFor('snowmaking')}
                        />
                        <p>Number of Trails:</p>
                        <textarea
                            rows="2"
                            col="200"
                            name="trails"
                            value={this.state.trails}
                            onChange={this.handleInputChangeFor('trails')}
                        />
                        <p>Website to the Hill</p>
                        <textarea
                            rows="2"
                            col="200"
                            name="website_url"
                            value={this.state.website_url}
                            onChange={this.handleInputChangeFor('website_url')}
                        />
                        <br />
                        <br />
                        <br />
                        <br />
                        <div>
                            <Button variant="contained" color="secondary" onClick={() => { this.props.history.push(`/admin`) }} >Cancel</Button>
                            <Button variant="contained" color="primary" onClick={this.AddHill} >Save Changes</Button>
                        </div>
                    </form>
                </div>
            </>
        );
    }
}
// const mapStateToProps = (reduxStore) => {
//     return {
//         specificHill: reduxStore.specificHill,
//     }
// }
export default connect()(AddHill);