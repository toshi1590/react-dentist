import { useEffect, useState } from "react";
import CalenderModule from '../module_css/Calender.module.css';

export const Calender = (props) => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [day, setDay] = useState(new Date().getDate());

  useEffect(() => {
    props.setYear(year);
    props.setMonth(month);
    props.setDay(day); 
  }, [day]);

  const displayTable = () => {
    const days = new Date(year, month, 0).getDate()
    const grid_column_start = new Date(year, month - 1, 1).getDay() + 1;
    let tds = [];

    for (let i = 1; i <= days; i++) {
      i == 1 ? 
      tds = [...tds, 
        <div key={i} style={{gridColumnStart: grid_column_start}} className={CalenderModule.td}>
          <button className={CalenderModule.button} onClick={() => {setDay(i)}}>{i}</button>
        </div>
      ] :
      tds = [...tds, 
        <div key={i} className={CalenderModule.td}>
          <button className={CalenderModule.button} onClick={() => {setDay(i)}}>{i}</button>
        </div>
      ];  
    }

    return tds;
  }

  const Next = () => {
    (month !== 12) ?
    (function(){
      setMonth(month + 1);
    }()) :
    (function(){
      setMonth(1);
      setYear(year => year + 1);
    }());

    displayTable();
  }

  const Back = () => {
    (month !== 1) ? 
    (function(){
      setMonth(month => month - 1);
    }()) :
    (function () {
      setMonth(12); 
      setYear(year => year - 1);
    } ());

    displayTable();
  } 

  return (
    <div className="calender">
      <div className={CalenderModule.title}>
        <button className={CalenderModule.button} onClick={Back}>{'<'}</button>
        <span>{year}/{month}</span>
        <button className={CalenderModule.button} onClick={Next}>{'>'}</button>
      </div>
      <div className={CalenderModule.table}>
        <div className={CalenderModule.th}>Sun</div> 
        <div className={CalenderModule.th}>Mon</div> 
        <div className={CalenderModule.th}>Tue</div> 
        <div className={CalenderModule.th}>Wed</div> 
        <div className={CalenderModule.th}>Thu</div> 
        <div className={CalenderModule.th}>Fri</div> 
        <div className={CalenderModule.th}>Sat</div> 
        {displayTable()}
      </div>
    </div>
  );
}