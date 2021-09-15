import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

import Navigation from './Navigation/Navigation';
import drupalOauth from './drupal-oauth/drupalOauth';
import withDrupalOauthProvider from './drupal-oauth/withDrupalOauthProvider';

// Initialize a new drupalOauth client which we can use to seed the context
// provider.
const drupalOauthClient = new drupalOauth({
  drupal_root: 'https://tin-users.ddev.site',
  client_id: '74ffd7ad-aca2-4074-9d32-98e8d565af8c',
  client_secret: 'abc123',
});

const Layout = (props) => {
  const {children} = props;

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              {name: 'description', content: 'Sample'},
              {name: 'keywords', content: 'sample, something'},
            ]}
          >
            <html lang="en"/>
          </Helmet>
          <Container maxWidth="lg">
            <Navigation siteTitle={data.site.siteMetadata.title}/>
            <Box component="main">
              {children}
            </Box>
          </Container>
        </>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default withDrupalOauthProvider(drupalOauthClient, Layout);
