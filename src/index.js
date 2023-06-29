import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Header} from './jsx/Header.jsx';
import HomePage from './jsx/HomePage.jsx';
import PatientsPage from './jsx/PatientsPage.jsx';
import PatientPage from './jsx/PatientPage.jsx';
import PatientRegisterPage from './jsx/PatientRegisterPage.jsx';
import {ReservationPage} from './jsx/ReservationPage.jsx';
import {MyPage} from './jsx/MyPage.jsx';
import {SignInPage} from './jsx/SignInPage.jsx';
import './index.css';

const App = ReactDOM.createRoot(document.querySelector('#App'));
App.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/patients" element={<PatientsPage />} />
      <Route path="/patients/:id" element={<PatientPage />} />
      <Route path="/patient_register" element={<PatientRegisterPage />} />
      <Route path="/reservation" element={<ReservationPage />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="*" element={<div>no page</div>} />
    </Routes>
  </BrowserRouter>
);
