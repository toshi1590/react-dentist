import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FormCreation from './FormCreation';

export const SignInPage = () => {
  const [result, setResult] = useState({text: '', color: ''});
  const [error, setError] = useState({email: '', password: ''});
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost//react_dentist/src/signin_check.php', {
      credentials: 'include'
    })
    .then(res => res.status)
    .then(status => {
      if (status == '200') {
        navigate('/mypage');
      }
    })
  }, [])

  const sign_in = (event) => {
    event.preventDefault();
    const email = document.forms.sign_in_form.email.value;
    const password = document.forms.sign_in_form.password.value;

    if (email == '') {
      setError(error => ({...error, email: 'must not be empty'}));
      setResult(result => ({...result, text: '', color: ''})); 
    } else {
      setError((error) => ({...error, email: ''}));
    }
    
    if (password == '') {
      setError(error => ({...error, password: 'must not be empty'}));
      setResult(result => ({...result, text: '', color: ''})); 
    } else {
      setError((error) => ({...error, password: ''}));
    }
    
    if (email !== '' && password !== '') {
      fetch('http://localhost//react_dentist/src/signin.php', {
        method: "POST", 
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        credentials: 'include',
        body: `email=${email}&password=${password}`
      })
      .then(res => res.status)
      .then(status => {
        if (status == '200') {
          navigate('/mypage');
        } else {
          setResult(result => ({...result, text: 'Failure', color: 'red'}));          
        }
      })
    }
  }

  return (
    <>
      <FormCreation 
        name="sign_in_form" 
        title="Sign in" 
        result={result} 
        error={error} 
        elements={['email', 'password']} 
        values={['', '']} 
        hiddens={{}}
        submit_value="sign in" 
        onClick={sign_in} 
        width="50vw" 
        position="absolute" 
        top="50%" 
        left="50%" 
        translate="-50% -50%" 
      />
    </>
  );
}
