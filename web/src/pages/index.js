import React from 'react';
// Component imports
import Layout from '../components/layout';
// Page Import 
import Contact from '../components/contact';
import About from '../components/about';
import Work from '../components/work';
import Projects from '../components/projects';
import Facts from '../components/facts';
// Image
import HeaderImage from '../theme/HeaderImage'
import ResumeBackground from '../theme/ResumeImage'


const IndexPage = () => (

  <Layout>
    <HeaderImage>
        <About id='about' />
        <Facts id='facts' />
        <Work  id='work' />
    </HeaderImage>
    <ResumeBackground style={{ backgroundPosition: 'bottom' }}>
        <Projects id='projects' />
        <Contact id='contact' />
     </ResumeBackground>
  </Layout>
);

export default IndexPage;