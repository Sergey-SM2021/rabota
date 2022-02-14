import { Route, Routes } from 'react-router-dom'
import { FC } from 'react'
import { Layout } from 'antd';

import Employee from './components/Employee/Employee'
import Employer from './components/Employer/Employer'
import Createresume from './components/Createresume/NewResume'
import Auth from './components/Auth/Auth'
import ResumeAnyPerson from './components/ResumeAnyPerson'
import VacanceForm from './components/CreateVacance/NewVacance'
import Header from './Header'

const { Content } = Layout;

const App: FC = () => {
  return (<Layout className="layout">
    <Header />
    <Content style={{ padding: '0 50px'}}>
      <div className="site-layout-content">
        <Routes>
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