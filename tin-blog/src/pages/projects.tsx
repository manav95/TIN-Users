import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { makeStyles, Paper } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    color: "black"
  },
}));

const ProjectsPage = () => {
  const classes = useStyles();
  return (
    <Layout>
      <Seo title="Projects" />
      <Paper className={classes.root}>
      <h1>Projects</h1>
      <p>Welcome to the projects site.</p>
      </Paper>
    </Layout>
  );
};

export default ProjectsPage;
