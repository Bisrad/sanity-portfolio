import styled from 'styled-components';

const Button = styled.button`
    display: flex;
    justify-content: center;
    background-color: ${props => props.primary ? "#06BDD6" : "transparent"};   
    /* border: 1px solid #06BDD6; */
    border-radius: 4px;
    color:  #181a1f;
    max-width: 23vw;
    padding: 0.25em 1em;
    margin: 1rem 0em;
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

export default Button