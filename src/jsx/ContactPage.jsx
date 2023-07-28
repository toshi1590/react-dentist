import FormCreation from './FormCreation';
import useValidtion from './Validation';
import styled from 'styled-components';

const Mordal = styled.div`
  height: 100%;
  background-color: red;
  position: absolute;
  z-index: 2;
  width: 100%;
  display: none;
  text-align: center;
`

const Spinner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
`

export const ContactPage = () => {
  const [error, result, setResult, validate] = useValidtion();

  const send = async (e) => {
    e.preventDefault();

    const name = document.forms.contact_form.name.value;
    const email = document.forms.contact_form.email.value;
    const message = document.forms.contact_form.message.value;

    validate({name: name, email: email, message: message});

    if (name !== '' && email !== '' && message !== '') {
      fetch('http://localhost/react_dentist/src/email.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        credentials: 'include',
        body: `name=${name}&email=${email}&message=${message}`
      })
      .then(res => {
        mordal.style.display = 'none';

        if (res.status == '200') {
          setResult((result) => {
            return {...result, text: 'Success', color: 'green'}
          });
        } else {
          throw new Error(res.statusText);
        }
      })
      .catch(error => {
        mordal.style.display = 'none';

        setResult((result) => {
          return {...result, text: 'Failure', color: 'red'}
        });
      });

      const mordal = document.getElementById('mordal');
      mordal.style.display = 'block';
    }
  }

  return (
    <>
      <Mordal id='mordal'>
        <Spinner>loading...</Spinner>
      </Mordal>
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
