import Form from './components/Form';
import Title from './components/Title';
import Label from './components/Label';
import Input from './components/Input';
import Result from './components/Result';
import ErrorMsg from './components/ErrorMsg';

const FormCreation = (props) => {
  const labels_errors_inputs = [...Array(props.elements.length)].map((element, index) => {
    return (
      <>
        <Label children={props.elements[index]} htmlFor={props.elements[index]} />
        <ErrorMsg children={Object.values(props.error)[index]} />
        <Input type="text" name={props.elements[index]} /> 
      </>   
    );
  })

  return (
    <Form name={props.name} width={props.width} position={props.position} top={props.top} left={props.left} translate={props.translate}>
      <Title children={props.title} />
      <Result children={props.result.text} color={props.result.color} />
      {labels_errors_inputs}
      <Input type="submit" value={props.submit_value} onClick={props.onClick} color="white" background="blue" />
    </Form>
  );
}

export default FormCreation;