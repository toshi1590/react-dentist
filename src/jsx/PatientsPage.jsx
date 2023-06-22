import {React} from 'react';
import SearchForm from './SearchForm.jsx';
import PatientsTable from './PatientsTable';
import Pagination from './Pagination.jsx';

const PatientsPage = () => {
  return (
    <>      
      <SearchForm />
      <PatientsTable />
      <Pagination />
    </>
  );
}

export default PatientsPage;
