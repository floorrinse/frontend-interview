import React, { useState, useEffect } from 'react';
// import useFormContext from '../hooks/useFormContext';
import portfolioApi from '../api/portfolio'
// import Link from '@mui/material/Link';
// import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { v4 as uuid } from 'uuid';
// import Title from './Title';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
// import DatePickerField from './DatePickerField'
import Button from '@mui/material/Button';


function preventDefault(event) {
  event.preventDefault();
}

const actions = [
  {
    value: 'buy',
    label: 'Buy',
  },
  {
    value: 'sell',
    label: 'Sell',
  }
];

export default function TradeForm() {

  const [formData, setFormData] = useState({
    date: '',
    Name: '',
    volume: ''
  });

  const onChangeInput = (event) => {
    event.preventDefault();
    setFormData(prevState => ({
      ...prevState,
      [event.target.id]: event.target.value
    }))
    console.log(formData)
  }

  const [portfolioStocks, setPortfolioStocks] = useState([]);

  //getting the updated portfolio stocks upon render
  useEffect(() => {
    async function fetchPortfolioApi() {
      const response = await fetch('http://localhost:3001/portfolio');
      const data = await response.json();
      const state = {};
      data.forEach((stock) => {
        state[stock.Name] = state[stock.Name] || [];
        state[stock.Name].push({
          id: stock.id,
          date: stock.date,
          name: stock.Name,
          price: stock.price, //check if this should be updated
          volume: stock.volume,
          totalStockValue: stock.totalStockValue
        })
      })
      setPortfolioStocks(state);
    }
    fetchPortfolioApi();
  }, []);

  const [stockInfo, setStockInfo] = useState([]);
  //getting the stocks upon render based on formData.Name and formData.date (note: date may not exist for that stock)
  //http://localhost:3001/stockPrices?Name=AAPL&date=1/5/17
  useEffect(() => {
    async function fetchStockApi() {
      const response = await fetch(`http://localhost:3001/stockPrices?Name=${formData.Name}&date=${formData.date}`);
      const data = await response.json();
      // data.forEach((stock) => {
      //   stockInfo.push({
      //     open: stock.open,
      //     high: stock.high,
      //     low: stock.low,
      //     close: stock.close,
      //     volume: stock.volume,
      //   })
      // })
      setStockInfo(data);
    }
    fetchStockApi();
  }, []);

  const addStockHandler = (event) => {
    event.preventDefault();
    console.log('addstockhandler called')
    console.log(formData)
    console.log(`http://localhost:3001/stockPrices?Name=${formData.Name}&date=${formData.date}`)

    console.log('close price:', stockInfo[0].close)
    // setFormData({
    //   date: formData.date,
    //   id: uuid(),
    //   name: formData.name,
    //   volume: formData.value,
    //   price: String(Number(stockInfo[0].close).toFixed(2)),
    //   totalStockValue: String((Number(formData.price) * Number(formData.volume)).toFixed(2))
    // })

    formData.id = uuid();
    formData.price = String(Number(stockInfo[0].close).toFixed(2));
    formData.totalStockValue = String((Number(formData.price) * Number(formData.volume)).toFixed(2));

    console.log('stockInfo:', stockInfo)
    console.log('formdata in addStockHandler call', formData)
    fetch('http://localhost:3001/portfolio/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
  }

  const modifyStockHandler = async (event) => {
    event.preventDefault();
    console.log('modifystockhandler called')
    // console.log(`http://localhost:3001/stockPrices?Name=${formData.Name}&date=${formData.date}`)
    // console.log('stockinfo:', stockInfo)
    if (portfolioStocks[formData.Name]) {
      console.log(portfolioStocks[formData.Name])
      console.log('it exists! attempt to modify')
      const updatedData = {
        date: formData.date,
        volume: String(Number(formData.volume) + Number(portfolioStocks[formData.Name][0].volume)),
        price: String(Number(stockInfo[0].close).toFixed(2)),
        totalStockValue: String(((Number(formData.price) * Number(formData.volume)).toFixed(2) + portfolioStocks[formData.Name][0].totalStockValue))
      }
      // setPortfolioStocks(prevState => ({
      //   ...prevState,
      //   : event.target.value
      // }));
      console.log('updatedData', updatedData)
      fetch(`http://localhost:3001/portfolio/${portfolioStocks[formData.Name][0].id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: portfolioStocks[formData.Name][0].id,
          date: formData.date,
          name: formData.Name,
          volume: updatedData.volume,
          price: updatedData.price,
          totalStockValue: updatedData.totalStockValue
        })
      });
    }
    else {
      console.log('it doesnt exist')
    }
  }

  // const getStockHandler = async (event) => {
  //   console.log('getstockhandler called')
  //   event.preventDefault();
  //   try {
  //     const response = await portfolioApi.get('http://localhost:3001/portfolio', {
  //       method: 'GET',
  //       headers: {
  //         Accept: 'application/json', 'Content-Type': 'application/json',
  //       }
  //     });
  //     const data = await response.json();
  //     console.log(data);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }

  const [action, setAction] = useState('');

  const onChangeAction = (event) => {
    setAction(event.target.value);
    setFormData(prevState => ({
      ...prevState,
      action: event.target.value
    }))
    console.log('oncahngeaction:', formData)
  };

  return (
    <React.Fragment>
      <Box component="form">
        <FormControl fullWidth sx={{ m: 1 }}>
          <TextField id="Name" label="Symbol" variant="outlined" value={formData.Name} onChange={onChangeInput} />
        </FormControl>
        <FormControl sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' }
        }} >
          <div>
            <TextField
              select
              id="action"
              label="Action"
              value={action}
              onChange={onChangeAction}
              wrap="nowrap"
            >
              {actions.map((option) => (
                <MenuItem key={option.value} id={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField id="volume" label="Quantity" variant="outlined" value={formData.volume} onChange={onChangeInput} />
          </div>
        </FormControl>
        <FormControl fullWidth sx={{ m: 1 }}>
          <TextField id="date" label="Date" variant="outlined" value={formData.date} onChange={onChangeInput} />
        </FormControl>
        <FormControl fullWidth sx={{ m: 1 }}>
          <Button type="submit" onClick={addStockHandler} variant="outlined">Add Order</Button>
          <Button type="submit" onClick={modifyStockHandler} variant="outlined">Modifty Order</Button>
        </FormControl>
      </Box>
    </React.Fragment>
  );
}
