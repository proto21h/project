import styled from 'styled-components';
import {ArrowDropDown} from 'styled-icons/material/ArrowDropDown'

const ProfileBar = styled.div`
    display: flex;
    align-items: center;
    text-transform: capitalize;
`;

const ArrowDropDownIcon = styled(ArrowDropDown)`
    font-weight: ${props => (props.important ? 'bold' : 'normal')};
    padding: 0 0;
`;

export {ProfileBar, ArrowDropDownIcon}
