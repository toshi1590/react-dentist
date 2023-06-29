import styled from "styled-components";

const Input = styled.input.attrs(props => ({
  type: props.type,
  name: props.name,
  value: props.value,
  onClick: props.onClick,
}))` 
  display: block;
  padding: 0.5em;
  width: 100%;
  box-sizing: border-box;
  margin: 0 0 5px;
  color: ${props => props.color};
  background: ${props => props.background};
`

export default Input;