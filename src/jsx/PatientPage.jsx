import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import FormCreation from './FormCreation';

const PatientPage = () => {
  const [result, setResult] = useState({text: '', color: ''});
  const [error, setError] = useState({id: '', name: '', address: '', email: ''});  
  const id = useParams().id;

  const update = (event) => {
    event.preventDefault();

    const id = document.forms.patient_edit_form.id.value;
    const name = document.forms.patient_edit_form.name.value;
    const address = document.forms.patient_edit_form.address.value;
    const email = document.forms.patient_edit_form.email.value;

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
      fetch(`http://localhost:8000/api/patients/${id}`, {
        method: "POST",
        body: new FormData(document.forms.patient_edit_form)
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
        name="patient_edit_form" 
        title="Patient edit" 
        result={result} 
        error={error} 
        elements={['id', 'name', 'address', 'email']} 
        values={[useParams().id, useLocation().state.name, useLocation().state.address, useLocation().state.email]} 
        hiddens={{_method: 'put'}}
        submit_value="update" 
        onClick={update} 
        width="50vw" 
        position="absolute" 
        top="50%" 
        left="50%" 
        translate="-50% -50%" 
      />
    </>
  )
}

export default PatientPage;
