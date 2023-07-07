import React from 'react';
 import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import "./Table.css";

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

function createData(name, trackingId, date, status) {
    return { name, trackingId, date, status };
}

const rows = [
    createData("Lasania chicken Fri", 1234567, "2 March 2022", "Approved"),
    createData('Big Baza Bang', 8765465, "4 March 2022", "Pending"),
    createData('Mouth Freshner', 8765465, "4 March 2022", "Approved"),
    createData('Cupcake', 8765465, "4 March 2022", "Deleivered"),

];

const MakeStyles = (status) => {
    if (status === 'Pending') 
    {
        return {

            background: "red",
            color: "white",

        }
    } 
    else if (status === 'Approved') 
    {
        return {
            background: "Orange",
            color: "white",

        }
    } 
    else if (status === 'Deleivered')
     {
        return {
            background: "Green",
            color: "white",

        }
    }
}

export default function BasicTable() {
    const classes = useStyles();

    return (
        <div className="Table">
            <h3>Recent orders</h3>

            <TableContainer component={Paper}
                style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
            >
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Product</TableCell>
                            <TableCell align="left">Tracking ID</TableCell>
                            <TableCell align="left">Date</TableCell>
                            <TableCell align="left">Status</TableCell>
                            <TableCell align="left"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.name}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="left">{row.trackingId}</TableCell>
                                <TableCell align="left">{row.date}</TableCell>
                                <TableCell align="left">
                                    <span className='status' style={MakeStyles(row.status)}>
                                        {row.status}
                                    </span>
                                </TableCell>
                                <TableCell align="left"> <span className='Details'>Detail</span> </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
