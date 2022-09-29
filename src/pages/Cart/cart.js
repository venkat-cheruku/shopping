import React from "react";
import Grid from "@mui/material/Grid";
import { useSelector } from 'react-redux';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableFooter } from '@mui/material';
import Product from "../../components/Product";


const Cart = () => {
    const cartData = useSelector(state => state.cart.products)
    let totalprice = 0;
    cartData.forEach(item => {
        totalprice = totalprice + item.price
    });
    return (
        <div className="cart">
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>product image</TableCell>
                            <TableCell align="right">Brand</TableCell>
                            <TableCell align="right">productName</TableCell>
                            <TableCell align="right">product price</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {cartData.map((row) => (
                            <TableRow

                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    <img src={row.thumbnail} height={50} width={50} />
                                </TableCell>
                                <TableCell align="right">{row.brand}</TableCell>
                                <TableCell align="right">{row.title}</TableCell>
                                <TableCell align="right">{row.price}</TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                    <TableFooter>
                        <TableCell component="th" scope="row">
                            Totalprice
                        </TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="right">{totalprice}</TableCell>

                    </TableFooter>
                </Table>
            </TableContainer>


        </div>

    )
};
export default Cart;