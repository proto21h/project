import styled from 'styled-components';

const UserPic = styled.img`
  border-radius: 50%;
  border: solid 2px #fff;
  width:${props=>props.size || "32px"};
  height:${props=>props.size || "32px"};
`;

export default UserPic