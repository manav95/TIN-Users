import * as React from "react"
import { makeStyles } from '@material-ui/core/styles';
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Paper } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    color: "black"
  },
}));

const MarketplacePage = (props) => {
  const classes = useStyles();
  return (
    <Layout>
      <Seo title="MarketPlace" />
      <Paper className={classes.root}>
        <h1>Marketplace</h1>
        <p>Welcome to the marketplace, where we highlight goods and services.</p>
      </Paper>
    </Layout>
  );
};

export default MarketplacePage;
