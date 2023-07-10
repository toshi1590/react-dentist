import { useState } from "react";
import FormCreation from './FormCreation';

const PatientRegisterPage = () => {
  const [result, setResult] = useState({});
  const [error, setError] = useState({});

  const register = (event) => {
    event.preventDefault();

    const id = document.forms.patient_register_form.id.value;
    const name = document.forms.patient_register_form.name.value;
    const address = document.forms.patient_register_form.address.value;
    const email = document.forms.patient_register_form.email.value;
    
    if (id == '') {
      setError(error => ({...error, id: 'must not be empty'}));
      setResult(result => ({...result, text: '', color: ''})); 
    } else {
      setError((error) => ({...error, id: ''}));
    }

    if (name == '') {
      setError(error => ({...error, name: 'must not be empty'}));
      setResult(result => ({...result, text: '', color: ''})); 
    } else {
      setError((error) => ({...error, name: ''}));
    }

    if (address == '') {
      setError(error => ({...error, address: 'must not be empty'}));
      setResult(result => ({...result, text: '', color: ''})); 
    } else {
      setError((error) => ({...error, address: ''}));
    }
    
    if (email == '') {
      setError(error => ({...error, email: 'must not be empty'}));
      setResult(result => ({...result, text: '', color: ''})); 
    } else {
      setError((error) => ({...error, email: ''}));
    }
    
    if (id !== '' && name !== '' && address !== '' && email !== '') {
      fetch('http://localhost:8000/api/patients', {
        method: 'POST',
        body: new FormData(document.forms[0])
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
        elements={['id', 'name', 'address', 'email']} 
        values={['', '', '', '']} 
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