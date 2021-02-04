import React from "react";

const Footer = () => (
    <footer style= {{ textAlign: 'center', padding: '1.5rem' }}>
      <em>
          Designed & Developed by Dev_Bread
      </em>
      <br />
        © { new Date().getFullYear()}
    </footer>
  );
  
  export default Footer;