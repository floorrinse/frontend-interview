import React, { useState, useEffect } from 'react';
// import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

export default function Orders() {

  const [portfolioStocks, setPortfolioStocks] = useState('');

  useEffect(() => {
    async function fetchPortfolioApi() {
      const response = await fetch('http://localhost:3001/portfolio');
      const data = await response.json();
      const state = {};
      data.forEach((stock) => {
        state[stock.Name] = state[stock.Name] || [];
        state[stock.Name].push({
          date: stock.date,
          name: stock.Name,
          price: stock.open,
        })
      })
      setPortfolioStocks(state);
    }
    fetchPortfolioApi();
  }, []);

  // const getTotalValueOfPortfolioStocks = (stockDetails) => stockDetails.map((stock) => ) //need to write func to get total holdings amount

  const getStockDetails = (stockDetails) => stockDetails.map((stock) => (
    <TableRow key={stock}>
      <TableCell>{stock.date}</TableCell>
      <TableCell>{stock.name}</TableCell>
      <TableCell>{stock.price}</TableCell>
      <TableCell align="right">{`$${stock.price}`}</TableCell>
    </TableRow>
  ));

  const getStock = (stockDetails) => Object.keys(stockDetails).map((stockName) => (
    getStockDetails(stockDetails[stockName])
  ))

  return (
    <React.Fragment>
      <Title>Holdings</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Symbol</TableCell>
            <TableCell>Purchase Price</TableCell>
            <TableCell align="right">Total Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {getStock(portfolioStocks)}
          {/* {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell>{row.amount}</TableCell>
              <TableCell>{row.qty}</TableCell>
              <TableCell align="right">{`$${row.totalValue}`}</TableCell>
            </TableRow>
          ))} */}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}