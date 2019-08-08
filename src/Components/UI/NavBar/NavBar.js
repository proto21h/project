import styled from 'styled-components';


const Wrap = styled.div`
    width: 100vw;
    background-color: ${props => props.light ? "white" : "black"};
`;

const NavBar = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${props => props.light ? "white" : "black"};
    color: ${props => props.light ? "black" : "white"};
    width: 960px;
    padding: .4em;
    margin: 0 auto;
`;

export {Wrap, NavBar}