import { Button } from "antd"
import { FC } from "react"
import { useNavigate } from "react-router-dom"

export const Skills:FC = () => {
    const nav = useNavigate()
    return(<div>
        <Button onClick={()=>{nav(-1)}}>onClick</Button>
    </div>)
}  