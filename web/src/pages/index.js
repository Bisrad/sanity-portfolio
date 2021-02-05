import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Component imports
import styled from 'styled-components';
import Layout from '../components/layout';
// Page Import 
import Contact from '../components/contact';
import About from '../components/about';
import Work from '../components/work';
import Projects from '../components/projects';
import Facts from '../components/facts';

import myImage from '../images/backgroundImage.png';

const HeaderImage = styled.div`
  background: no-repeat url(${myImage});
`;

const IndexPage = () => (

  <Layout>
    <HeaderImage style={{ backgroundPosition: 'bottom' }}>
        <About id='about' />
        <Facts id='facts' />
        <Work  id='work' />
    </HeaderImage>
    <HeaderImage style={{ backgroundPosition: 'bottom' }}>
        <Projects id='projects' />
        <Contact id='contact' />
     </HeaderImage>
  </Layout>
);

export default IndexPage;