import styled from 'styled-components';
const BookingTime = styled.div`
  color: ${props => props.theme.color.none};
  font-family: Muli;
  font-size: 11px;
  font-weight: 500;
  line-height: 14px;
  margin-right: ${props => (props.isHovered ? '0px' : '8px')};
  margin-left: auto;
`;
export default BookingTime;
