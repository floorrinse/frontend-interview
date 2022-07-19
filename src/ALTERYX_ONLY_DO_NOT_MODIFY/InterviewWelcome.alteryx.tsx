import React from 'react';
import { Divider, Grid, makeStyles, Typography } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

import alteryxLogo from './assets/alteryx-blue-bg.jpeg';
import Procedure from './Procedure.alteryx';
import Problem from './Problem.alteryx';
import ServerInfo from './ServerInfo.alteryx';
import ToolsInstalled from './ToolsInstalled.alteryx';

const useStyles = makeStyles({
  ayxLogo: {
    borderRadius: 3,
    height: 80,
    margin: 4,
  },
  paper: {
    padding: 8,
    textAlign: 'center',
  },
});

function InterviewWelcome() {
  const classes = useStyles();
  return (
    <>
      <Grid
        alignItems='center'
        container
        direction='row'
        item
        justifyContent='space-evenly'
        wrap='nowrap'
      >
        <Grid item>
          <img
            className={classes.ayxLogo}
            src={alteryxLogo}
            alt='alteryx logo'
          />
        </Grid>
        <Grid item>
          <Typography variant='h4'>
            Welcome to the Alteryx Frontend Interview
          </Typography>
        </Grid>
      </Grid>

      <Divider style={{ margin: 16 }} />

      <Alert elevation={6} severity='info' variant='standard'>
        This template is written in TypeScript, though it is NOT a requirement
        to use. Feel free to use JavaScript.
        <br />
        <br />
        Please reach out to your recruiter with any questions and we'll get them
        answered as fast as we can.
      </Alert>

      <Divider style={{ margin: 16 }} />

      <ToolsInstalled />

      <Divider style={{ margin: 16 }} />

      <Typography variant='h4' style={{ marginBottom: 16 }}>
        Stock Market Simulator
      </Typography>

      <Procedure />

      <Divider style={{ margin: 16 }} />

      <Problem />

      <Divider style={{ margin: 16 }} />

      <ServerInfo />
    </>
  )
};

export default InterviewWelcome;
