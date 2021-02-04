import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
// Styles
import { GlobalStyle } from '../theme/globalStyle';
import styled from 'styled-components';
// Component Imports
import Header from './header';
import Footer from './footer';


const ContentWrapper = styled.div`
  flex: 1 0 auto;
  max-width: 100vw;
`;

const FlexThisBox = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #101f2f;
  color: #06BDD6;
`;

const Layout = ({ children }) => (
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
        <GlobalStyle />
        <Helmet 
          title={data.site.siteMetadata.title} 
          meta={[
            { name: 'description', content: 'Sample' }, 
            { name: 'keywords', content: 'sample, something' }
          ]}
        >
          <html lang="en" />
        </Helmet>
          <FlexThisBox>
            <Header siteTitle={data.site.siteMetadata.title} />
            <ContentWrapper>{children}</ContentWrapper>
        
            <Footer />
          </FlexThisBox>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;