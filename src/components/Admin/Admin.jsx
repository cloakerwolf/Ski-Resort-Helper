import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dialogs from '../Dialogs/Dialogs';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
// import Button from '@material-ui/core/Button';
// import DeleteIcon from '@material-ui/icons/Delete';











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
        console.log('clicked delete', id);
        this.props.dispatch({
            type: 'DELETE_HILL',
            payload: id
        })

    }


    render() {

        //loop through the list of hills
        let hills = this.props.hillList.map((hill) => {
            return (

                <Dialogs hill={hill} key={hill.id} deleteHill={this.deleteHill} />
                // <TableRow key={hill.id}>
                //     {/* <Hill hill={hill} seeDescription={this.seeDescription} key={hill.id} /> */}
                //     <TableCell>{hill.name}</TableCell>
                //     <TableCell>{hill.description}</TableCell>
                //     <TableCell>{hill.address}</TableCell>
                //     <TableCell>{hill.number_of_lifts}</TableCell>
                //     <TableCell>{hill.terrain_park}</TableCell>
                //     <TableCell>{hill.trails}</TableCell>
                //     {/* <TableCell><a href={hill.website_url}>{hill.website_url}</a></TableCell> */}
                //     <TableCell>
                //         <Button variant="contained" color="primary">{hill.website_url}</Button>
                //     </TableCell>
                //     <TableCell>
                //         <Button variant="contained" color="primary" onClick={() => this.props.history.push(`/edithill/${hill.id}`)}>Edit Hill</Button>
                //     </TableCell>
                //     <TableCell>
                //         <Button variant="contained" color="secondary" onClick={() => this.deleteHill(hill.id)}>Delete Hill<DeleteIcon/></Button>
                //     </TableCell>
                // </TableRow>
            )
        })

        return this.props.user.admin  ? (   
            <Paper style={{ opacity: "0.65" }}>
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

         
        ) : <p>Must be a Admin</p>
    }
}


const mapStateToProps = (reduxStore) => {
    return {
        hillList: reduxStore.hillList,
        user: reduxStore.user,
    }
}
export default connect(mapStateToProps)(Admin);
