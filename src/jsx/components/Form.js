import styled from "styled-components";

const Form = styled.form.attrs(props => ({
  name: props.name  
}))`
  // border: double 1px red;
  width: ${props => props.width ? props.width : ''};
  position: ${props => props.position ? props.position : ''};
  top: ${props => props.top ? props.top : ''};
  left: ${props => props.left ? props.left : ''};
  translate: ${props => props.translate ? props.translate : ''};
`

export default Form;