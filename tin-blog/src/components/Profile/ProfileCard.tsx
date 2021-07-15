import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { GatsbyImage } from "gatsby-plugin-image";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
    minHeight: 310,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

const ProfileCard = (props) => {
  const classes = useStyles();
  const ProfileLink = props => <Link to={props.path} {...props}>Read more</Link>;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary">
          {props.name}
        </Typography>
        <Typography variant="h5" component="h2">
        {props.picture &&
        <GatsbyImage alt="unknown" image={props.picture.childImageSharp.gatsbyImageData} />
      }
        </Typography>
        <Typography className={classes.pos} color="textSecondary" dangerouslySetInnerHTML={{ __html: 'TimeIsNowmember' }} />
      </CardContent>
      <CardActions>
        <Button size="small" path={props.path} component={ProfileLink}>Read more</Button>
      </CardActions>
    </Card>
  );
};

ProfileCard.propTypes = {
  classes: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  picture: PropTypes.object,
  path: PropTypes.string.isRequired
};

export default ProfileCard;
