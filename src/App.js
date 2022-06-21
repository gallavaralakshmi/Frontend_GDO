
import './App.css';
import MainPage from './components/MainPage/MainPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Employee from './components/Roles/Employee/Employee';
import Addgoal from './components/ViewandUpdating/Addgoal';
import Admin from './components/Roles/Admin/Admin';
import SAdmin from './components/Roles/SAdmin/SAdmin';
import ViewGoals from './components/ViewandUpdating/ViewGoals';
import ViewAdmins from './components/ViewandUpdating/ViewAdmins';
import Adminsadmin from './components/Roles/AdminSAdmin/SAdmin_Employees';
import Updategoal from './components/ViewandUpdating/Updategoal';
import UpdateStatus from './components/ViewandUpdating/UpdateStatus';


function App() {
  return (
    <div>
      <Router>
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/mainpage' element={<MainPage />} />
          <Route path='/employees' element={<Employee />} />
          <Route path='/admins' element={<Admin />} />
          <Route path='/superadmin' element={<SAdmin />} />
          <Route path='/addgoal' element={<Addgoal />} />
          <Route path='/updategoal' element={<Updategoal />} />
          <Route path='/updatestatus' element={<UpdateStatus />} />
          <Route path='/viewgoals' element={<ViewGoals />} />
          <Route path='/viewadmins' element={<ViewAdmins />} />
          <Route path='/adminsadmin' element={<Adminsadmin/>} />
          <Route path="*" element={<MainPage/>}/>
        </Routes>

      </Router>
    </div>
  );
}

export default App;
