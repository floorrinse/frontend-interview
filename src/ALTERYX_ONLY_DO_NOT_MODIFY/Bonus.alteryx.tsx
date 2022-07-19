import React from 'react';
import { Grid, Typography } from '@material-ui/core';

import RequirementsList from './RequirementsList.alteryx';

function Bonus() {
	return (
		<Grid container direction='column' spacing={4}>
			<Grid item style={{ paddingBottom: 0 }}>
				<Typography variant="h5">
					Bonus
				</Typography>
			</Grid>

			<Grid item>
				<RequirementsList
					items={[
						'A way to look at an individual (or group of) stock and see how they perform over the year.',
						'Allow users to buy and sell individual amounts of stocks on arbitrary dates (given budget constraint).',
						'Internationalization and localization',
						'Accessibility',
						'Anything else you can think of! 😃'
					]}
				/>
			</Grid>
		</Grid>
	)
}

export default Bonus;
