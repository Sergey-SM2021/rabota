import { Steps } from "antd"
import { FC } from "react"
import { useLocation } from "react-router-dom"

const { Step } = Steps

const MySteps: FC = () => {
    const step = Number(useLocation().pathname.split('/')[2])
    return (<Steps direction="vertical" current={step}>
        <Step title="Личное">1</Step>
        <Step title="Скиллы">2</Step>
        <Step title="Портфолио">3</Step>
        <Step title="Последний шаг">3</Step>
    </Steps>)
}

export default MySteps