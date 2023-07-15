import Form from './components/Form';
import Title from './components/Title';
import Label from './components/Label';
import Input from './components/Input';
import Result from './components/Result';
import ErrorMsg from './components/ErrorMsg';
import { Fragment } from 'react';

const FormCreation = (props) => {
  const hiddens = Object.entries(props.hiddens).map((element, index) => {
    return (
      <Fragment key={index}>
        <Input 
          type="hidden" 
          name={element[0]} 
          defaultValue={element[1]} 
        /> 
      </Fragment>
    );
  })

  const labels_errors_inputs = [...Array(props.elements.length)].map((element, index) => {
    return (
      <Fragment key={index}>
        <Label children={props.elements[index]} htmlFor={props.elements[index]} />
        <ErrorMsg children={Object.values(props.error)[index]} />
        <Input 
          type="text" 
          name={props.elements[index]} 
          defaultValue={props.values[index]} 
        /> 
      </Fragment>   
    );
  })

  return (
    <Form name={props.name} width={props.width} position={props.position} top={props.top} left={props.left} translate={props.translate}>
      <Title children={props.title} />
      <Result children={props.result.text} color={props.result.color} />
      {hiddens}
      {labels_errors_inputs}
      <Input type="submit" value={props.submit_value} onClick={props.onClick} color="white" background="blue" />
    </Form>
  );
}

export default FormCreation;
