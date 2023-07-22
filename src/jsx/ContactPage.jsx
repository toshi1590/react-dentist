import { useState } from 'react';
import FormCreation from './FormCreation';

export const ContactPage = () => {
  const [result, setResult] = useState({});
  const [error, setError] = useState({});

  const send = () => {

  }

  return (
    <>
      <FormCreation 
        name="contact_form" 
        title="Contact" 
        result={result} 
        error={error} 
        elements={['name', 'email', 'message']} 
        values={['', '', '']} 
        hiddens={{}}
        submit_value="send" 
        onClick={send} 
        width="50vw" 
        position="absolute" 
        top="50%" 
        left="50%" 
        translate="-50% -50%" 
      />
    </>
  );
}
