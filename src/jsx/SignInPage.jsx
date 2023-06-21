import { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
  width: calc(100% / 3);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  // border: solid 1px red;
`;

const FormTitle = styled.div`
  font-size: 2em;
  margin: 0 0 5px 0;
`;

const Input = styled.input`
  display: block;
  margin: 0 0 5px 0;
  width: 100%;
  height: 2.2em;
  box-sizing: border-box;
`;

export const SignInPage = () => {
  const [SignedIn, setSignedIn] = useState(false);
  const [cook, setCook] = useState('no cookie');

  const sign_in = (event) => {
    event.preventDefault();
    const email = document.forms.sign_in_form.email.value;
    const password = document.forms.sign_in_form.password.value;
  
    fetch('http://localhost//react_dentist/src/signin.php', {
      method: "POST", 
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `email=${email}&password=${password}`
    })
    .then((res) => {
      return res.text();
    })
    .then(text => {
      if (text == 'signed in') {
        setSignedIn(true);
      } 

      setCook(document.cookie);
    })
  }

  return (
    <>
      <Form name="sign_in_form">
        <FormTitle>Sign in</FormTitle>
        <Input type="email" name="email" placeholder="email" required autoFocus />
        <Input type="text" name="password" placeholder="password" required />
        <Input type="submit" value="sign in" onClick={sign_in} />
        {SignedIn == true ? <div>signed in</div> : <div>not signed in</div>}
        <div>{cook}</div>
      </Form>
    </>
  );
}
