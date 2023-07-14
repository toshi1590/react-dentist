import FormCreation from './FormCreation';
import useValidation from './Validation';

const PatientRegisterPage = () => {
  const [error, result, setResult, validate] = useValidation();

  const register = (event) => {
    event.preventDefault();

    const name = document.forms.patient_register_form.name.value;
    const address = document.forms.patient_register_form.address.value;
    const email = document.forms.patient_register_form.email.value;
    
    validate({name: name, address: address, email: email});
 
    if (name !== '' && address !== '' && email !== '') {
      fetch('http://localhost:83/api/patients', {
        method: 'POST',
        body: new FormData(document.forms.patient_register_form)
      })
      .then(res => res.json())
      .then(json_data => {
        setResult((result) => {
          return {...result, text: 'Success', color: 'green'}
        });
      })
      .catch(() => {
        setResult((result) => {
          return {...result, text: 'Failure', color: 'red'}
        });
      })
    }
  }

  return (
    <>
      <FormCreation 
        name="patient_register_form" 
        title="Patient Register" 
        result={result} 
        error={error} 
        elements={['name', 'address', 'email']} 
        values={['', '', '']} 
        hiddens={{}}
        submit_value="register" 
        onClick={register} 
        width="50vw" 
        position="absolute" 
        top="50%" 
        left="50%" 
        translate="-50% -50%" 
      />
    </>
  );
}

export default PatientRegisterPage;