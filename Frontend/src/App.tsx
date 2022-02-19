import { Route, Routes } from 'react-router-dom'
import { FC } from 'react'
import { Layout } from 'antd';

import Employee from './components/Employee/Employee'
import Employer from './components/Employer/Employer'
import Createresume from './components/CreateResume/CreateResume'
import Auth from './components/Auth/Auth'
import ResumeAnyPerson from './components/Resume/someonesResume'
import VacanceForm from './components/CreateVacance/CreateVacance'
import Header from './Header'
import Vacance from './components/Vacance/Vacance'
import { Private } from './components/CreateResume/Private/Private';
import { Skills } from './components/CreateResume/Skills';
import { Portfolio } from './components/CreateResume/Portfolio';
import { LastStep } from './components/CreateResume/LastStep';

const { Content } = Layout;

const App: FC = () => {
  return (<Layout>
    <Header />
    <Content style={{ padding: '0 50px' }}>
      <div className="site-layout-content">
        <Routes>
          <Route path="vacance/:id" element={<Vacance />} />
          <Route path="newvacance" element={<VacanceForm />} />
          <Route path="/employer" element={<Employer />} >
            <Route path=":id" element={<ResumeAnyPerson />} />
          </Route>
          <Route path="*" element={<Employee />} />
          <Route path="/createresume" element={<Createresume />}>
            <Route path='0' element={<Private />}/>
            <Route path='1' element={<Skills />}/>
            <Route path='2' element={<Portfolio />}/>
            <Route path='3' element={<LastStep />}/>
          </Route>
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </div>
    </Content>
  </Layout>)
}

export default App