import {React} from 'react';
import SearchForm from './SearchForm.jsx';
import PatientsTable from './PatientsTable';
import Pagination from './Pagination.jsx';

const PatientsPage = () => {
  const the_number_of_pages = 4;

  return (
    <>      
      <SearchForm />
      <PatientsTable />
      <Pagination the_number_of_pages={the_number_of_pages} />
    </>
  );
}

export default PatientsPage;
