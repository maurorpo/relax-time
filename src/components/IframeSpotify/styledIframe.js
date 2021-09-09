import styled from "styled-components";

const Iframe = styled.div`
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  transition: all .4s ease-in;
  width: 400px;
  background-color: rgb(255 255 255 / 31%);
  border-radius: 10px;
  overflow: hidden;
  backdrop-filter: blur(20px);
  box-shadow: 0px 0px 11px -2px #454545;
  left: ${props => props.showContent ? '100px' : '-699px'};
`;

export default Iframe;