import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { List, ListItem, ListItemText } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
  })
);

interface ICheckoboxListProps {
  items: string[];
}

function BaseRequirementsList({ items }: ICheckoboxListProps) {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      {items.map((item, idx) => {
        const labelId = `checkbox-list-label-${idx}`;

        return (
          <ListItem key={labelId} role={undefined} dense>
            <ListItemText id={labelId} primary={`${idx + 1}. ${item}`} />
          </ListItem>
        );
      })}
    </List>
  );
}

export default BaseRequirementsList;
