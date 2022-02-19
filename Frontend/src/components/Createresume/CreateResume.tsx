import { Space } from 'antd'
import { useNavigate, useParams } from 'react-router-dom'
import { Form } from './Form/Form'
import Steps from './Steps/Steps'

const Resume = () => {
    const step = Number(useParams().step)
    const nav = useNavigate()

    return (
        <Space direction='vertical'>
            <h2>Создать резюме</h2>
            <Space direction='horizontal' align='start'>
                <Steps step={Number(step)}/>
                <Form Return={() => { nav(`/createresume/${step-1}`) }} next={() => { nav(`/createresume/${step+1}`) }}/>
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