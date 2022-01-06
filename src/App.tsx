import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header'
import Employee from './components/Employee/Employee'
import Employer from './components/Employer/Employer'
import Createresume from './components/Createresume'

function App() {
  return (<>
    <Header />
    <Routes>
      <Route path="/employer" element={<Employer />} />
      <Route path="*" element={<Employee />} />
      <Route path="/createresume" element={<Createresume />} />
    </Routes></>)
}

export default App;
