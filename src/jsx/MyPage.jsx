import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export const MyPage = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    fetch('http://localhost//react_dentist/src/signin_check.php', {
      credentials: 'include'
    })
    .then(res => res.text())
    .then(text => {
      if (text == 'failure') {
        navigate('/signin');
      }
    })
  }, [])

  const sign_out = () => {
    fetch('http://localhost//react_dentist/src/signout.php', {
      credentials: 'include'
    })
    .then(() => {
      navigate('/signin');
    })
  }

  return (
    <>
      <h1>My page</h1>
      <div>hello: </div>
      <div>{document.cookie}</div>
      <button onClick={sign_out}>sign out</button>
    </>
  );
}
