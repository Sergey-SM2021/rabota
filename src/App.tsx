import { Route, Routes } from 'react-router-dom';
import { Layout } from 'antd';
import Header from './components/Header'

const { Content, Footer } = Layout;

const Employer = () => {
  return (<>Employer</>)
}

const Employee = () => {
  return (<>Employee</>)
}

function App() {
  return (
    <Layout className="layout">
      <Header />
      <Content style={{ padding: '0 50px' }}>
        <Routes>
          <Route path={"employer"} element={<Employer />} />
          <Route path="*" element={<Employee />} />
        </Routes>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>)
}

export default App;