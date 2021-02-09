import styled from 'styled-components';

const NavStyle = styled.div`
  margin: 0;
  background-color: #181a1f; 
      #logo {
        color: #06BDD6;
        font-weight: 500;
      }
      #navlink {
        margin-right: 1rem;
        color: #06BDD6!important;
        text-decoration: none;
          :hover {
            color: #ffffff!important;
          }
          :active {
            color: #ffffff!important;
          }
      }
      #navToggle {
        border: none;
        color: #06BDD6;
        filter: invert(1);
      }
`;

export default NavStyle



