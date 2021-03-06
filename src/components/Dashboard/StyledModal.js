import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
`;
const StyledModal = styled.div`
  position: fixed;
  background-color: #ffffff;
  padding: 5px 20px;
  top: 20%;
  right: 40%;
  z-index: 999;
  display: block;
  flex-direction: column;
  max-height: 550px;
  border-radius: 2px;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.3);
  outline-offset: 0.5px;
  justify-content: center;
  align-items: center;
  /* & > div {
    opacity: ${props => (props.disabled === true ? 0.5 : 1)};
  } */
  &:focus {
    outline: 0;
  }
`;

export default StyledModal;
