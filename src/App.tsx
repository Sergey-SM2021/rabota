import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header'
import Employee from './components/Employee/Employee'
import Employer from './components/Employer/Employer'
import Createresume from './components/Createresume/Form1'
import Auth from './components/Auth/Auth'
import ResumeAnyPerson from './components/ResumeAnyPerson'
import styled from 'styled-components'
import {FC} from 'react'


function App() {
  return (<>
    <Header />
    <Bg>
      <Container>
          <Routes>
            <Route path="/employer" element={<Employer />} />
            <Route path="/employer/:id" element={<ResumeAnyPerson />} />
            <Route path="*" element={<Employee />} />
            <Route path="/createresume" element={<Createresume />} />
            <Route path="/auth" element={<Auth />} />
          </Routes>
      </Container>
    </Bg>
  </>)
}

const Bg = styled.div`
    background: #eeeeee;
`

let Container = styled.div`
    position: absolute;
    width: 930px;
    margin: 0px auto;
    display: flex;
    flex-direction: column;
`

export default App;
