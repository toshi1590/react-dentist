import { useLocation, useParams, useSearchParams } from "react-router-dom";

const PatientPage = () => {
  return (
    <>
      <div>Patient</div>
      <form action="">
        form table???
        <div>
          <label htmlFor="">id</label>
          <input type="text" defaultValue={useParams().id} autoFocus />
        </div>
        <div>
          <label htmlFor="">name</label>
          <input type="text" defaultValue={useLocation().state.name} />
        </div>
        <div>
          <label htmlFor="">address</label>
          <input type="text" defaultValue={useLocation().state.address} />
        </div>
        <div>
          <input type="button" value="update" />
        </div>
      </form>
    </>
  )
}

export default PatientPage;
