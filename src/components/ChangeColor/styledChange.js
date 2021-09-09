import styled from 'styled-components';

const Change = styled.section`
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  left: 100px;
  width: 400px;
  left: ${props => props.showContent ? '100px' : '-699px'};
`;

export default Change