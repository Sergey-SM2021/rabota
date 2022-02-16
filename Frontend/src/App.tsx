import { Route, Routes } from 'react-router-dom'
import { FC } from 'react'
import { Layout } from 'antd';

import Employee from './components/Employee/Employee'
import Employer from './components/Employer/Employer'
import Createresume from './components/CreateResume/CreateResume'
import Auth from './components/Auth/Auth'
import ResumeAnyPerson from './components/someonesResume/someonesResume'
import VacanceForm from './components/CreateVacance/CreateVacance'
import Header from './Header'
import Vacance from './components/Vacance/Vacance';

const { Content } = Layout;

const App: FC = () => {
  return (<Layout className="layout">
    <Header />
    <Content style={{ padding: '0 50px' }}>
      <div className="site-layout-content">
        <Routes>
          <Route path="vacance" element={<Vacance />} />
          <Route path="newvacance" element={<VacanceForm />} />
          <Route path="/employer" element={<Employer />} />
          <Route path="/employer/:id" element={<ResumeAnyPerson />} />
          <Route path="*" element={<Employee />} />
          <Route path="/createresume" element={<Createresume />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </div>
    </Content>
  </Layout>)
}

export default App