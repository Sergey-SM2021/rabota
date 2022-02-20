import { Button } from "antd"
import { useFormik } from "formik"
import { FC } from "react"
import { useNavigate } from "react-router-dom"

export const Skills:FC = () => {
    const nav = useNavigate()
    // const {} = useFormik()
    return(<div>
        <Button onClick={()=>{nav(-1)}}>back</Button>
    </div>)
}  