import { Route, Routes, NavLink } from 'react-router-dom';
import { FC } from 'react'
import { Layout, Menu } from 'antd';

import Employee from './components/Employee/Employee'
import Employer from './components/Employer/Employer'
import Createresume from './components/Createresume/Form1'
import Auth from './components/Auth/Auth'
import ResumeAnyPerson from './components/ResumeAnyPerson'
import VacanceForm from './components/VacanceForm/VacanceForm'

const { Header, Content } = Layout;

const App: FC = () => {
  return (<Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item><NavLink to={"employer"}>Employer</NavLink></Menu.Item>
        <Menu.Item><NavLink to={"employee"}>Employee</NavLink></Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <div className="site-layout-content">
        <Routes>
          <Route path="newvacance" element={<VacanceForm />}/>
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