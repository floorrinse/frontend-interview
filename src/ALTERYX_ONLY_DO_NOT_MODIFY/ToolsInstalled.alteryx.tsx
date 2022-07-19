import React from 'react';
import { Grid, Link, Typography } from '@material-ui/core';

function ToolsInstalled() {
	return (
		<Grid container item xs={12} spacing={4}>
			<Grid alignItems='center' container direction='row' item>
				<Typography variant='h6' style={{ marginRight: 8 }}>
					Tools installed with this project
				</Typography>
				<Typography variant='body2'>
					(Feel free to add any 3rd party libraries that you like to use.)
				</Typography>
			</Grid>

      <Grid container item justifyContent='space-evenly' spacing={3}>
        <Link
          href='https://create-react-app.dev/'
          rel='noreferrer'
          target='_blank'
        >
          Create React App
        </Link>
        <Link
          href='https://www.typescriptlang.org/'
          rel='noreferrer'
          target='_blank'
        >
          TypeScript
        </Link>
        <Link
          href='https://github.com/typicode/json-server'
          rel='noreferrer'
          target='_blank'
        >
          json-server
        </Link>
        <Link href='https://material-ui.com' rel='noreferrer' target='_blank'>
          Material-UI
        </Link>
      </Grid>
    </Grid>
  );
}

export default ToolsInstalled;
