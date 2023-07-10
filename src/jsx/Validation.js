import { useState } from "react";

function useValidation () {
  // const [result, setResult] = useState({});
  const [error, setError] = useState('misssss');

  // for (const argument of arguments) {    
  //   if (argument == '') {
  //     setError(error => ({...error, id: 'must not be empty'}));
  //     // setResult(result => ({...result, text: '', color: ''})); 
  //   } else {
  //     setError((error) => ({...error, id: ''}));
  //   } 
  // }

  return [error, setError];
}

export default useValidation;