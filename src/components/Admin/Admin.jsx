import React, { Component } from 'react';
import { connect } from 'react-redux';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';











class Admin extends Component {

    componentDidMount() {
        this.getHills();
    }

    getHills = () => {
        this.props.dispatch({
            type: 'FETCH_HILL_LIST'
        })
    }
    

    editHill = (id) => {
        console.log('clicked pic', id);
        this.props.history.push(`/edithill/${id}`);

    }

    deleteHill = (id) => {
        console.log('clicked pic', id);
        
    }


    render() {
       
        //loop through the list of hills
        let hills = this.props.hillList.map((hill) => {
            return (
                <TableRow key={hill.id}>
                    {/* <Hill hill={hill} seeDescription={this.seeDescription} key={hill.id} /> */}
                    <TableCell>{hill.name}</TableCell>
                    <TableCell>{hill.description}</TableCell>
                    <TableCell>{hill.address}</TableCell>
                    <TableCell>{hill.number_of_lifts}</TableCell>
                    <TableCell>{hill.terrain_park}</TableCell>
                    <TableCell>{hill.trails}</TableCell>
                    <TableCell><a href={hill.website_url}>{hill.website_url}</a></TableCell>
                    <TableCell>
                        <Button variant="contained" color="primary">Edit Hill</Button>
                    </TableCell>
                    <TableCell>
                        <Button variant="contained" color="secondary">Delete Hill</Button>
                    </TableCell>
                </TableRow>
            )
        })

        return (
            <Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Hill Name</TableCell>
                            <TableCell>Description</TableCell>
                            <TableCell>Address</TableCell>
                            <TableCell># of lifts</TableCell>
                            <TableCell># of terrain parks</TableCell>
                            <TableCell># of trails</TableCell>
                            <TableCell>Website url</TableCell>
                            <TableCell>Edit</TableCell>
                            <TableCell>Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {hills}
                    </TableBody>
                </Table>
            </Paper>

          
        )       
    }
}


const mapStateToProps = (reduxStore) => {
    return {
        hillList: reduxStore.hillList,
    }
}
export default connect(mapStateToProps)(Admin);
