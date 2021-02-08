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

import myImage from '../images/Wavelarge.png';
// import myTexture from '../images/Texture.png';


const HeaderImage = styled.div`
  max-width: 100vw;
  height: auto;
  background: no-repeat url(${myImage});
`;

// const TextureImage = {
//   background: `center, no-repeat, url(${myTexture})`
// };


const IndexPage = () => (

  <Layout>
    <HeaderImage>
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