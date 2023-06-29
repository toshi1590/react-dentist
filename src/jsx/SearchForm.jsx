import FormCreation from './FormCreation';

const SearchForm = () => {
  const search = (e) => {
    e.preventDefault();

    const name = document.forms[0].name.value;

    fetch(`http://localhost:8000/api/patients?name=${name}`)
    .then(res => res.json())
    .then(json_data => console.log(json_data))   
  }

  return (
    <>
      <FormCreation 
        name="patient_search_form" 
        title="Patient search" 
        result="" 
        error="" 
        elements={['name']}
        values={['']}
        hiddens={{}}
        submit_value="search" 
        onClick={search}
        width="calc(100% / 3)"
      />
    </>
  )
}

export default SearchForm;