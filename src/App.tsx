import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header'
import Employee from './components/Employee/Employee'
import Employer from './components/Employer/Employer'
import Createresume from './components/Createresume/Form1'
import Auth from './components/Auth/Auth'

function App() {
  return (<>
    <Header />
    <Routes>
      <Route path="/employer" element={<Employer />} />
      <Route path="*" element={<Employee />} />
      <Route path="/createresume" element={<Createresume />} />
      <Route path="/auth" element={<Auth />} />
    </Routes></>)
}

export default App;
