import styled from 'styled-components';

const NavButton = styled.div`
    display: flex;
    justify-content: center;
    border: 1px solid #06BDD6;
    border-radius: 4px;
    color:  #06BDD6;
    max-width: 23vw;
    padding: 0.25em 1em;
    margin: 1em 0em;
        a {
            font-size:  15px;
           
        }
        :hover {
            transition: all 0.3s ease 0s;
            background-color:  #8bedf8;
            color: #181a1f;
            text-decoration: none;
        }
`;

export default NavButton