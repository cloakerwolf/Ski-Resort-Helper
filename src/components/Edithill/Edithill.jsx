import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

class Edithill extends Component {
    //shows the old state of coming from the db which is later changed when things are editted
    // state = {
    //     name: '',
    //     description: '',
    //     picture: '',
    //     pic_gen_area: '',
    //     address: '',
    //     number_of_lifts: '',
    //     terrain_park: '',
    //     snowmaking: '',
    //     trails: '',
    //     website_url: ''
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
        // this.setState({
        //     ...this.state,
        //     name: this.props.specificHill.name,
        //     description: this.props.specificHill.description,
        //     picture: this.props.specificHill.picture,
        //     pic_gen_area: this.props.specificHill.pic_gen_area,
        //     address: this.props.specificHill.address,
        //     number_of_lifts: this.props.specificHill.number_of_lifts,
        //     terrain_park: this.props.specificHill.terrain_park,
        //     snowmaking: this.props.specificHill.snowmaking,
        //     trails: this.props.specificHill.trails,
        //     website_url: this.props.specificHill.website_url
        // })
    }


    edit = (event) => {
        event.preventDefault();
        //replaces the state with the new imputs
        let editted = {
            id: this.props.specificHill.id,
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
        //send the editted state back to the saga
        console.log('editted', editted);
        this.props.dispatch({
            type: 'EDIT_HILL',
            payload: editted
        })
        //sends you back to admin
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
                        {/* <input value={this.props.specificHill.name} /> */}
                        <textarea
                            rows="2"
                            col="200"
                            name="name"
                            value={this.props.specificHill.name}
                            onChange={(event) => this.props.dispatch(
                                {
                                    type: 'UPDATE_PROPERTY',
                                    payload: { key: 'name', newValue: event.target.value }
                                }
                            )}
                        />
                        <p>Hill Description:</p>
                        <textarea
                            rows="2"
                            col="200"
                            name="description"
                            value={this.props.specificHill.description}
                            onChange={(event) => this.props.dispatch(
                                {
                                    type: 'UPDATE_PROPERTY',
                                    payload: { key: 'description', newValue: event.target.value }
                                }
                            )}
                        />
                        <p>image address of Picture of the hills:</p>
                        <textarea
                            rows="2"
                            col="200"
                            name="picture"
                            value={this.props.specificHill.picture}
                            onChange={(event) => this.props.dispatch(
                                {
                                    type: 'UPDATE_PROPERTY',
                                    payload: { key: 'picture', newValue: event.target.value }
                                }
                            )}
                        />
                        <p>image address of a Picture of the general area:</p>
                        <textarea
                            rows="2"
                            col="200"
                            name="pic_gen_area"
                            value={this.props.specificHill.pic_gen_area}
                            onChange={(event) => this.props.dispatch(
                                {
                                    type: 'UPDATE_PROPERTY',
                                    payload: { key: 'pic_gen_area', newValue: event.target.value }
                                }
                            )}
                        />
                        <p>The Address of the hill:</p>
                        <textarea
                            rows="2"
                            col="200"
                            name="address"
                            value={this.props.specificHill.address}
                            onChange={(event) => this.props.dispatch(
                                {
                                    type: 'UPDATE_PROPERTY',
                                    payload: { key: 'address', newValue: event.target.value }
                                }
                            )}
                        />
                        <p>Number of Chairlifts:</p>
                        <textarea
                            rows="2"
                            col="200"
                            name="number_of_lifts"
                            value={this.props.specificHill.number_of_lifts}
                            onChange={(event) => this.props.dispatch(
                                {
                                    type: 'UPDATE_PROPERTY',
                                    payload: { key: 'number_of_lifts', newValue: event.target.value }
                                }
                            )}
                        />
                        <p>Number of terrain Parks:</p>
                        <textarea
                            rows="2"
                            col="200"
                            name="terrain_park"
                            value={this.props.specificHill.terrain_park}
                            onChange={(event) => this.props.dispatch(
                                {
                                    type: 'UPDATE_PROPERTY',
                                    payload: { key: 'terrain_park', newValue: event.target.value }
                                }
                            )}
                        />
                        <p>Do they make snow: true or false</p>
                        <textarea
                            rows="2"
                            col="200"
                            name="snowmaking"
                            value={this.props.specificHill.snowmaking}
                            onChange={(event) => this.props.dispatch(
                                {
                                    type: 'UPDATE_PROPERTY',
                                    payload: { key: 'snowmaking', newValue: event.target.value }
                                }
                            )}
                        />
                        <p>Number of Trails:</p>
                        <textarea
                            rows="2"
                            col="200"
                            name="trails"
                            value={this.props.specificHill.trails}
                            onChange={(event) => this.props.dispatch(
                                {
                                    type: 'UPDATE_PROPERTY',
                                    payload: { key: 'trails', newValue: event.target.value }
                                }
                            )}
                        />
                        <p>Website to the Hill</p>
                        <textarea
                            rows="2"
                            col="200"
                            name="website_url"
                            value={this.props.specificHill.website_url}
                            onChange={(event) => this.props.dispatch(
                                {
                                    type: 'UPDATE_PROPERTY',
                                    payload: { key: 'website_url', newValue: event.target.value }
                                }
                            )}
                        />
                        <br />
                        <br />
                        <br />
                        <br />
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