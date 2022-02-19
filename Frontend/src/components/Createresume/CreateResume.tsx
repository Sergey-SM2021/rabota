import { Space } from 'antd'
import { Form } from './Form/Form'
import Steps from './Steps/Steps'

const Resume = () => {
    return (
        <Space direction='vertical'>
            <h2>Создать резюме</h2>
            <Space direction='horizontal' align='start'>
                <Steps/>
                <Form />
            </Space>
        </Space>)
}

export default Resume






































































                //         name: "",
                // surename: "",
                // number: "",
                // skills: [""],
                // experience: "",

                // profession: "",
                // description: "",
                // skillLavel: "",
                // gmail: "",
                // sity: "",
                // country: ""