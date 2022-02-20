import { Space } from 'antd'
import { Outlet } from 'react-router-dom'
import Steps from './Steps/Steps'

const Resume = () => {
    return (
        <Space direction='vertical'>
            <h2>Создать резюме</h2>
            <Space direction='horizontal' align='start'>
                <Steps/>
                <Outlet/>
            </Space>
        </Space>)
}

export default Resume
                // skills: [""],

                // profession: "",
                // description: "",
                // skillLavel: "",
                // gmail: "",
                // sity: "",
                // country: ""