import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const TableHeader = () => { 
    return (
        <TableHead>
            <TableRow>
                <TableCell>id</TableCell>
                <TableCell>ФИО</TableCell>
                <TableCell>e-mail</TableCell>
                <TableCell>телефон</TableCell>
                <TableCell>адрес</TableCell>
                <TableCell>Удалить</TableCell>
            </TableRow>
        </TableHead>
    );
}

const TableBodyRender = props => { 
    const rows = props.peopleData.map((row, index) => {
        return (
            <TableRow key={index}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.fullName}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.phone}</TableCell>
                <TableCell>{row.address}</TableCell>
                <TableCell>
                    <Button variant="contained" color="primary" onClick={() => props.removePeople(index)}
                    >Удалить</Button>
                </TableCell>
            </TableRow>
        );
    });

    return <TableBody>{rows}</TableBody>;
}

class TableRender extends Component {
    render() {
        const { peopleData, removePeople } = this.props;

        return (
            <Table>
                <TableHeader />
                <TableBodyRender peopleData={peopleData} removePeople={removePeople} />
            </Table>
        );
    }
}

export default TableRender;