import { Button, Layout } from "antd"
import { FC } from "react"
import { Private } from "../Private/Private"

const Content = Layout.Content

export const Form: FC<{next:()=>void, Return:()=>void}> = ({next,Return}) => {
    return (<Content>
        <Private/>
        <Button onClick={Return} type="primary">Назад</Button>
        <Button onClick={next}>Дальше</Button>
    </Content>)
}