import { Button, Space } from "antd"
import { useFormik } from "formik"
import { FC } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { setPortfolio } from "../../redux/reducers/newResume/ANewResume"
import { NewResume } from "../../redux/selectors"
import { MyField } from "./MyField"
import * as yup from 'yup'

export const Portfolio: FC = () => {
    const gitHub = useSelector(NewResume.getGitHub)
    const dispatch = useDispatch()
    const handleBack = () => {
        nav(-1)
    }
    const nav = useNavigate()
    const { handleSubmit, errors, handleBlur, handleChange, values } = useFormik({
        initialValues: {
            gitHub: gitHub
        },
        validationSchema: yup.object({
            gitHub: yup.string().required()
        }),
        onSubmit: values => {
            dispatch(setPortfolio(values.gitHub))
            nav("/createResume/3")
        }
    })
    return (<></>
    // <form onSubmit={handleSubmit}>
    //     <Space direction="vertical">
    //         <MyField title="GitHub" name="gitHub" value={values.gitHub} handleBlur={handleBlur} handleChange={handleChange} error={errors.gitHub} />
    //         <Space >
    //             <Button onClick={handleBack}>Назад</Button>
    //             <Button htmlType="submit" >Дальше</Button>
    //         </Space>
    //     </Space>
    // </form>
    )
}