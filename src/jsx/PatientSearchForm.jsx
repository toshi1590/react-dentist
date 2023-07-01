import FormCreation from './FormCreation';

const PatientSearchForm = (props) => {
  const search = (e) => {
    e.preventDefault();

    const name = document.forms.patient_search_form.name.value;
    let found_patients;

    if (name == '') {
      found_patients = props.patients;
    } else {
      found_patients = props.patients.filter(patient => {
        if (patient.name == name) {
          return patient
        }
      })      
    }

    props.setFountPatients(found_patients);
    props.setPage(1);
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

export default PatientSearchForm;