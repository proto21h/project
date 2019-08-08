import styled from 'styled-components';

const Search = styled.input`
    width: 20em;
    font-size: 1em;
    margin: 0 1em;
    padding: .5em 1em;
    padding-bottom: .2em;
    border-width:0px;
    border-bottom: 1px solid white;
    background-color: ${props => props.light ? "white" : "black"};
    color: ${props => props.light ? "black" : "white"};
    outline: none;
`;

export {Search}