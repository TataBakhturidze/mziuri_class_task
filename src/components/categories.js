import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


function CategoriesComponent({
    name,
    description
}) {
    return (
        <TableContainer component={Paper} style={{width: '90%'}}>
            <Table aria-label="simple table">
                <TableHead>
                <TableRow style={{ background: "#a882a8"}}>
                    <TableCell>{name}</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                    <TableCell component="th" scope="row" >
                        {description}
                    </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default CategoriesComponent
