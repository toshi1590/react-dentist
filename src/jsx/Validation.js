import { useState } from "react";

function useValidation () {
  const [result, setResult] = useState({});
  const [error, setError] = useState({});

  function validate (elements) {    
    Object.entries(elements).map(element => {
      if (element[1] == '') {
        setError(error => ({...error, [element[0]]: 'must not be empty'}));
        setResult(result => ({...result, text: '', color: ''})); 
      } else {
        setError((error) => ({...error, [element[0]]: ''}));
      } 
    })
  }

  return [error, result, setResult, validate];
}

export default useValidation;