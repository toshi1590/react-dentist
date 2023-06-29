import { useLocation, useParams, useSearchParams } from "react-router-dom";
import PatientPageModule from '../module_css/PatientPage.module.css';

const PatientPage = () => {
  const id = useParams().id;

  const update = () => {
    fetch(`http://localhost:8000/api/patients/${id}`, {
      method: "POST",
      body: new FormData(document.forms[0])
    })
    .then(res => res.json())
    .then(json_data => {
      console.log(json_data);     
    })
  }

  return (
    <>
      <div>Patient edit</div>
      result ... with props of styled components
      <form action="" className={PatientPageModule.table}>
        <input type="hidden" name="_method" value="put" />
        <div className={PatientPageModule.th}>id</div>
        <div className={PatientPageModule.td}>
          <input className={PatientPageModule.text} type="text" name="id" defaultValue={useParams().id} autoFocus />
        </div>
        <div className={PatientPageModule.th}>name</div>
        <div className={PatientPageModule.td}>
          <input className={PatientPageModule.text} type="text" name="name" defaultValue={useLocation().state.name} />
        </div>
        <div className={PatientPageModule.th}>address</div>
        <div className={PatientPageModule.td}>
          <input className={PatientPageModule.text} type="text" name="address" defaultValue={useLocation().state.address} />
        </div>
        <div className={PatientPageModule.th}>email</div>
        <div className={PatientPageModule.td}>
          <input className={PatientPageModule.text} type="text" name="email" defaultValue={useLocation().state.email} />
        </div>
        <div className={PatientPageModule.th}></div>
        <div className={PatientPageModule.td}>
          <input className={PatientPageModule.btn} type="button" value="update" onClick={update} />
        </div>
      </form>
    </>
  )
}

export default PatientPage;
