import React, { FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from '../../atoms/Title';

interface Product {
  name: string;
  ean: string;
  type: string;
  weight: number;
  color: string;
  active: boolean;
}

// Generate Product Data
function createData({ name, ean, type, weight, color, active }: Product) {
  return { name, ean, type, weight, color, active };
}

const rows = [
  createData({ name: 'Apple', ean: 'X', type: 'Fruit', weight: 1, color: 'Red', active: true }),
  createData({ name: 'Apple2', ean: 'X2', type: 'Fruit', weight: 2, color: 'Orange', active: false }),
  createData({ name: 'Apple3', ean: 'X3', type: 'Fruit', weight: 11, color: 'Green', active: true }),
  createData({ name: 'Apple4', ean: 'X4', type: 'Fruit', weight: 12, color: 'Red', active: false }),
  createData({ name: 'Apple5', ean: 'X5', type: 'Fruit', weight: 3, color: 'Orange', active: true }),
];

const useStyles = makeStyles((theme) => ({
}));

const Orders: FunctionComponent = () => {
  const classes = useStyles();
  return (
    <>
      <Title>Recent Orders</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>EAN</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Weight</TableCell>
            <TableCell>Active</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row: Product) => (
            <TableRow key={row.name}>
              <TableCell>{row.ean}</TableCell>
              <TableCell>{row.type}</TableCell>
              <TableCell>{row.weight}</TableCell>
              <TableCell>{row.color}</TableCell>
              <TableCell align="right">{row.active}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}

export default Orders