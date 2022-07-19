import React from 'react';
import { Grid, Typography } from '@material-ui/core';

import RequirementsList from './RequirementsList.alteryx';

function Problem() {
  return (
    <Grid container spacing={4}>
      <Grid item style={{ paddingBottom: 0 }}>
        <Typography variant='h5'>Problem</Typography>
      </Grid>

      <Grid item>
        <Typography variant='body1'>
          We want you to build a web application to maintain and visualize an
          artificial portfolio containing a subset of 100 possible stocks (From
          S&P 500) for the user to buy and sell from the year 2017. To make this easier the user can pick a
          single day to buy all of their stocks and a single day to sell all of their stocks.
        </Typography>

        <Typography variant='body1' style={{ marginTop: 32 }}>
          While we are leaving this fairly open ended there are some rough base
          requirements we’d expect any solution to have:
        </Typography>

        <RequirementsList
          items={[
            'A user can pick a start date to buy all of their stocks and the amount of each stock to buy. For example on Jan 3 2017 I could buy 100 shares of GOOG and 200 shares of APPL. Same for selling their stocks.',
            'A user can see holdings in their portfolio.',
            'A user can see how a holding in their portfolio performed in 2017. This can be accomplished with an interactive chart.',
            'A user can add as many shares of as many stocks as they would like.',
            'The user should be able to update any of the above inputs and recalculate the results.'
          ]}
        />
      </Grid>

      <Grid item>
        <Typography variant='h6'>Out of Scope</Typography>
        <RequirementsList
          items={[
            'Authentication',
            'Input Validation'
          ]}
        />
      </Grid>
    </Grid>
  );
}

export default Problem;
