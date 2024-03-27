import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { Box } from '@mui/system';
import React from 'react'
function createData(
    date: string,
    location: string,
    distance: string,
    description: string,
) {
    return { date, location, distance, description };
}

const rows = [
    createData('8/8/12', 'Ward Nest,Texas, 7777', '214 km ', 'Shipment delayed'),
    createData('8/8/12', 'Ward Nest,Texas, 7777', '214 km ', 'Shipment delayed'),
    createData('8/8/12', 'Ward Nest,Texas, 7777', '214 km ', 'Shipment delayed'),
    createData('8/8/12', 'Ward Nest,Texas, 7777', '214 km ', 'Shipment delayed'),
    createData('8/8/12', 'Ward Nest,Texas, 7777', '214 km ', 'Shipment delayed'),
    createData('8/8/12', 'Ward Nest,Texas, 7777', '214 km ', 'Shipment delayed'),
];
function DetailsTable() {
    return (
        <TableContainer component={Paper} sx={{ height: '450px' }} >
            <Table aria-label="simple table" >
                <TableHead>
                    <TableRow>
                        <TableCell >Date</TableCell>
                        <TableCell align="right">Location</TableCell>
                        <TableCell align="right">Distance</TableCell>
                        <TableCell align="right">Description</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.date}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.date}
                            </TableCell>
                            <TableCell align="right" component="th" scope="row">
                                {row.location}
                            </TableCell>
                            <TableCell align="right">{row.distance}</TableCell>
                            <TableCell align="right">{row.description}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>

    )
}

export default DetailsTable