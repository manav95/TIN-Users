import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Layout from '../components/layout'
import Seo from '../components/seo';
import { Slide } from 'react-slideshow-image';
import { siteMetadata } from '../../gatsby-config';
import { Paper, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    color: "black"
  },
}));
const slideImages = [
  '../images/graphIcon.png',
  '../images/hunab_cube.png',
  '../images/creative_co.png',
  '../images/group_circle.png'
];


const IndexPage = (props) => {
  const classes = useStyles();
  return (
    <Layout>
      <Seo title={siteMetadata.title} description={siteMetadata.description} />
      <Paper className={classes.root}>
      <Typography variant="body1" paragraph>
          <h1> Our Mission and Vision </h1>
          Through our various festivals and retreats where we teach ancient wisdoms from lost civilizations, we seek to bring humanity back to a deeper connection and appreciation for our planet, the cosmos and ourselves.<br/> <br/>As a nonprofit, our mission is to equip and empower people with the tools and conducive environment vital to achieving the highest level of human potential in today’s time.<br/> <br/>
          <div>
          <Slide easing="ease">
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
              <span>Slide 1</span>
            </div>
          </div>
           <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
              <span>Slide 2</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
              <span>Slide 3</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[3]})`}}>
              <span>Slide 4</span>
            </div>
          </div>
        </Slide>
      </div>
          <h1> How we are making this happen </h1><br /> <br />
          <b>On the physical level -</b> In addition to organizing impactful socially and environmentally conscious festivals, TIN plans to build self-sustainable, self-governing communities/retreat centers which host events, seminars, workshops, retreats, ceremonies, festivals, etc. for attendees from around the world that at the same time operate as community centers providing ongoing services to the local/indigenous people of a given center’s region. The centers provide alternative healing, education on health, wellness, fitness, arts, crafts, agriculture, trade, etc., basically all practical and relevant tools to help people live abundantly in today’s world. The first of its kind being in Hawaii, with Nicaragua, Belize, Israel, and Palestine to follow and then the rest of the world.<br/> <br/>
          <b>On the spiritual level -</b> Through the use of ancient wisdoms from various lost cultures, we are bringing humanity back to a much deeper connection with mother earth, the cosmos and ourselves. We are weaving the matrix of our consciousness and turning ON the light of the flower of life that surrounds our planet earth<br/><br/>
          <b>On the digital plane –</b> Many of the social platforms out there today manipulate, rip off the user and use their data and intellectual property as currency. Our platform will do the opposite. We are creating an online platform that connects people around the world and elevates their individual world improvement projects. The platform will do this and more and is already in the development phase. We know this is partly a digital world and therefore say "As on the ground, so online."<br/> <br/>
          <b>WE ARE NOT LEAVING ANYONE BEHIND :)</b>
      </Typography>
      </Paper>
    </Layout>
  );
};


export default IndexPage;
