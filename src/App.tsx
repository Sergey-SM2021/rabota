import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header'
import Employee from './components/Employee/Employee'
import Employer from './components/Employer/Employer'

function App() {
  return (<>
    <Header />
    <Routes>
      <Route path={"employer"} element={<Employer />} />
      <Route path="*" element={<Employee />} />
    </Routes></>)
}

export default App;