import { Button, Input, Space } from "antd"
import { useFormik } from "formik"
import { FC } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { setPortfolio } from "../../redux/reducers/newResume/ANewResume"
import { NewResume } from "../../redux/selectors"

export const Portfolio: FC = () => {
    const gitHub = useSelector(NewResume.getGitHub)
    const dispatch = useDispatch()
    const handleBack = () => {
        nav(-1)
    }
    const nav = useNavigate()
    const { handleSubmit, handleBlur, handleChange, values } = useFormik({
        initialValues: {
            gitHub: gitHub
        },
        onSubmit: values => {
            dispatch(setPortfolio(values.gitHub))
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