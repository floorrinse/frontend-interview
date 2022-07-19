import React from 'react';
import {
  Box,
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
        <Typography variant='h5'>Other Scripts</Typography>
      </Grid>

      <Grid item xs={10} sm={4}>
        <Typography variant='body1'>lint</Typography>
        {/* <Box className={classes.code}>
          <code>$ npm run lint</code>
        </Box> */}
      </Grid>

      <Grid item xs={10} sm={4}>
        <Typography variant='body1'>lint w/ fixes</Typography>
        {/* <Box className={classes.code}>
          <code>$ npm run lint:fix</code>
        </Box> */}
      </Grid>

      <Grid item xs={10} sm={4}>
        <Typography variant='body1'>test</Typography>
        {/* <Box className={classes.code}>
          <code>$ npm run test</code>
        </Box> */}
      </Grid>
    </Grid>
  );
}

export default ServerInfo;
