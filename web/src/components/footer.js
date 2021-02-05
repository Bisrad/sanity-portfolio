import React from "react";

const Footer = () => (
    <footer style= {{ fontSize: 11 , textAlign: 'center', padding: '1rem' }}>
      <em>
          Designed & Developed by Dev_Bread
      </em>
      <br />
        © { new Date().getFullYear()}
    </footer>
  );
  
  export default Footer;