import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';






class Description extends Component {


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




    render() {
       

        
        return (
            <>
                <p>{this.props.specificHill.name}</p>
                <p>Average Rating:  /5</p>
            <img
                src={this.props.specificHill.picture}
                alt={this.props.specificHill.pic_gen_area}
                className= "descriptionImg"
            ></img>
                <p>Description: {this.props.specificHill.description}</p>
                <p># of lifts: {this.props.specificHill.number_of_lifts}</p>
                <p># of terrain Parks: {this.props.specificHill.terrain_park}</p>
                <p>snowmaking: {this.props.specificHill.snowmaking}</p>
                <p>address: {this.props.specificHill.address}</p>
            <img
                    src={this.props.specificHill.pic_gen_area}
                    alt={this.props.specificHill.picture}
                    className= "descriptionImg"
            ></img>

            </>
        );
    }
}
const mapStateToProps = (reduxStore) => {
    return {
        specificHill: reduxStore.specificHill,
    }
}
export default connect(mapStateToProps)(Description);