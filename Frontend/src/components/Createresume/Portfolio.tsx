import { Button, Input, Space } from "antd"
import { useFormik } from "formik"
import { FC } from "react"
import { useNavigate } from "react-router-dom"

export const Portfolio: FC = () => {
    const handleBack = () => {
        nav(-1)
    }
    const nav = useNavigate()
    const { handleSubmit, handleBlur, handleChange, values } = useFormik({
        initialValues: {
            gitHub: ""
        },
        onSubmit: values => {
            
        }
    })
    return (<form onSubmit={handleSubmit}>
        <Space direction="vertical">
            <Space align="center">
                <h3>GitHub</h3>
                <Input onBlur={handleBlur} value={values.gitHub} onChange={handleChange} name="gitHub" />
            </Space>
            <Space >
                <Button onClick={handleBack}>Назад</Button>
                <Button htmlType="submit" >Дальше</Button>
            </Space>
        </Space>
    </form>)
}