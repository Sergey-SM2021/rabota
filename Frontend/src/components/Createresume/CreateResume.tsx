import { Layout } from 'antd'
import { Outlet } from 'react-router-dom'
import { LastStep } from './LastStep'
import Steps from './Steps/Steps'

const { Content, Footer } = Layout

const Resume = () => {
    return (<div style={{ display: 'flex', justifyContent: "space-around" }}>
        <Steps />
        <Layout className="layout" style={{ minHeight: "80vh" }}>
            <Content style={{ padding: '20px 50px' }}>
                <LastStep/>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    </div>)
}

export default Resume