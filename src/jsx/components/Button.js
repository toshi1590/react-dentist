import styled from "styled-components";

const Button = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background: ${props => props.background};
`

export default Button;