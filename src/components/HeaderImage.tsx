import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
  mainHeader: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(http://localhost:3000/static/cat2-min.jpeg)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  mainHeaderContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
}));

const HeaderImage = () => {
  const classes = useStyles({});

  return (
    <Paper className={classes.mainHeader}>
      <div className={classes.overlay} />
      <Grid container>
        <Grid item md={4}>
          <div className={classes.mainHeaderContent}>
            <Typography
              component="h1"
              variant="h3"
              color="inherit"
              gutterBottom
            >
              nekochans
            </Typography>
            <Typography variant="h4" color="inherit" paragraph>
              We are a Freelance Web Engineer Organization.
            </Typography>
            <Link variant="subtitle1" href="https://github.com/nekochans">
              https://github.com/nekochans
            </Link>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default HeaderImage;
