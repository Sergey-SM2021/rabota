import { Button, Layout } from "antd"
import { FC } from "react"
import { Outlet, useNavigate } from "react-router-dom"

const Content = Layout.Content

export const Form: FC = () => {
    const nav = useNavigate()
    
    const back = () => {
        nav(-1)
    }

    const next = () => {
        nav("/createresume/1")
    }

    return (<Content>
        <Outlet/>
        <Button onClick={back} type="primary">Назад</Button>
        <Button onClick={next}>Дальше</Button>
    </Content>)
}