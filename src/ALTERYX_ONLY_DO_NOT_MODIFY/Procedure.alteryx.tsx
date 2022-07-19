import React from 'react';
import { Grid, Typography } from '@material-ui/core';

function Procedure() {
  return (
    <Grid container spacing={4}>
      <Grid item style={{ paddingBottom: 0 }}>
        <Typography variant='h5'>Procedure</Typography>
      </Grid>

			<Grid item>
				<Typography variant="body1">
					We ask all candidates for Innovation Labs team to complete a homework as part of the interview process.
					We expect the candidates to spend about 2-4 hours on the assignment but it’s completely up to you.
					Spend as much or as little as you’d like that can really show off your skills.
					During your on-site interview, one of the sessions will consist of you presenting this homework, how you solved the problem, trade offs you made, any limitations, etc. so be ready to talk through it.
				</Typography>
			</Grid>
		</Grid>
	)
}

export default Procedure;
