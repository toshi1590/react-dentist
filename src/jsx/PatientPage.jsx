import { useLocation, useParams, useSearchParams } from "react-router-dom";
import PatientPageModule from '../module_css/PatientPage.module.css';

const PatientPage = () => {
  return (
    <>
      <div>Patient</div>
      <form action="" className={PatientPageModule.table}>
        <div className={PatientPageModule.th}>id</div>
        <div className={PatientPageModule.td}>
          <input className={PatientPageModule.text} type="text" defaultValue={useParams().id} autoFocus />
        </div>
        <div className={PatientPageModule.th}>name</div>
        <div className={PatientPageModule.td}>
          <input className={PatientPageModule.text} type="text" defaultValue={useLocation().state.name} />
        </div>
        <div className={PatientPageModule.th}>address</div>
        <div className={PatientPageModule.td}>
          <input className={PatientPageModule.text} type="text" defaultValue={useLocation().state.address} />
        </div>
        <div className={PatientPageModule.th}></div>
        <div className={PatientPageModule.td}>
          <input className={PatientPageModule.btn} type="button" value="update" />
        </div>
      </form>
    </>
  )
}

export default PatientPage;
