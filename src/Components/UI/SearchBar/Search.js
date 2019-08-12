import styled from 'styled-components';
import {Search} from 'styled-icons/evil/Search'

const SearchInput = styled.input`
    width: 20em;
    font-size: 1em;
    margin: 0 1em;
    padding: .5em 2em;
    padding-bottom: .2em;
    border-width:0px;
    border-bottom: 1px solid white;
    background-color: ${props => props.light ? "white" : "black"};
    color: ${props => props.light ? "black" : "white"};
    outline: none;
`;

const SearchIcon = styled(Search)`
  position: relative;
  right: -2.5em;
  bottom: 2px;
  font-weight: ${props => (props.important ? 'bold' : 'normal')};
`

export {SearchInput, SearchIcon}