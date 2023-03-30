/* eslint-disable prettier/prettier */
import styled from 'styled-components';

// background-color: ${props: => props.primary ? "#3f52b5" : "#f50057"};
// eslint-disable-next-line @typescript-eslint/naming-convention
const StyledButton = styled.button`
  appearance: none;
  background: none;
  font-size: 32px;
  padding-left: 12px;
  padding-right: 12px;
  outline: none;
  border: 2px solid transparent;
  color: white;
  padding-bottom: 4px;
  cursor: pointer;
  border-radius: 2px;
  transition: all 0.15s;

  &:hover,
  &:focus {
    border: 2px solid rgba(112, 76, 182, 0.4);
  }

  &:active {
    background-color: rgba(112, 76, 182, 0.2);
  }
`;

export default StyledButton;
