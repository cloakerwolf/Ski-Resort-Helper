import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import GridListTileBar from '@material-ui/core/GridListTileBar';

class Hill extends Component {



    render() {
        return (
            <div onClick={() => this.props.seeDescription(this.props.hill.id)}>
                <img src={this.props.hill.picture}
                     alt={this.props.hill.pic_gen_area}
                     
                     className="hillList"
                ></img>
                <GridListTileBar
                title={this.props.hill.name}
                subtitle={<span>click on image for hill description</span>}></GridListTileBar>
                {/* <h1>{this.props.hill.name}</h1> */}
                
            </div>
        )
    }
}

export default withRouter(connect()(Hill));