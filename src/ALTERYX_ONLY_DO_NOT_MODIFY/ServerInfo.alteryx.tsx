import React from 'react';
import {
  // Box,
  createStyles,
  Grid,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    code: {
      color: theme.palette.getContrastText(theme.palette.grey[800]),
      backgroundColor: theme.palette.grey[800],
      padding: theme.spacing(1),
    },
  })
);

function ServerInfo() {
  const classes = useStyles();
  return (
    <Grid container direction='column' spacing={4}>
      <Grid item style={{ paddingBottom: 0 }}>
        <Typography variant='h5'>Using the JSON Server</Typography>
      </Grid>

      <Grid item xs={10} sm={4}>
        <Typography variant='body1'>To get started, run</Typography>
        {/* <Box className={classes.code}>
          <code>$ npm run server</code>
        </Box> */}
      </Grid>

      <Grid item>
        <Typography variant='body1'>
          We have loaded in the stock data into the server under 'stockPrices'
          and the empty portfolio under 'portfolio'.
          <br />
          <br />-{' '}
          <a href='http://localhost:3001/stockPrices'>
            http://localhost:3001/stockPrices
          </a>{' '}
          - will give you all the data
          <br />-{' '}
          <a href='http://localhost:3001/stockPrices?date=1/5/17'>
            http://localhost:3001/stockPrices?date=1/5/17
          </a>{' '}
          - will filter by date
          <br />
          <br />
          It also supports full CRUD operations, see the json-server
          documentation for more options.
        </Typography>
      </Grid>
    </Grid>
  );
}

export default ServerInfo;
