import { Space, Steps } from "antd"
import { FC } from "react"
import { useLocation } from "react-router-dom"
import { Typography } from 'antd';

const { Title } = Typography;

const { Step } = Steps

const MySteps: FC = () => {
    const step = Number(useLocation().pathname.split('/')[2])
    return (<Space direction="vertical" style={{height:"80vh",width:"30%"}}>
        <Title>Создать резюме</Title>
        <Steps direction="vertical" current={step}>
            <Step title="Личное">1</Step>
            <Step title="Скиллы">2</Step>
            <Step title="Портфолио">3</Step>
            <Step title="Последний шаг">3</Step>
        </Steps>
    </Space>)
}

export default MySteps