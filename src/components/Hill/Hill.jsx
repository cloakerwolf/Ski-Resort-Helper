import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Hill extends Component {



    render() {
        return (
            <div >
                <img src={this.props.hill.picture}
                     alt={this.props.hill.pic_gen_area}
                     onClick={() => this.props.seeDescription(this.props.hill.id)}
                     className="hillList"
                ></img>
                <h1>{this.props.hill.name}</h1>
                
            </div>
        )
    }
}

export default withRouter(connect()(Hill));