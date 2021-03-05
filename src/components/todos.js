import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DoneIcon from '@material-ui/icons/Done';
import ClearIcon from '@material-ui/icons/Clear';

function TodosComponent({
    title,
    completed
}) {
    return (
    <TableContainer component={Paper} style={{width: '90%'}}>
        <Table aria-label="simple table">
            <TableHead>
            <TableRow style={{ background: "#a882a8"}}>
                <TableCell>Todo</TableCell>
                <TableCell align="right">Actions</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                <TableCell component="th" scope="row">
                    {title}
                </TableCell>
                <TableCell align="right">
                    {completed ? <DoneIcon/> : <ClearIcon/>}
                </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </TableContainer>
    )
}

export default TodosComponent
