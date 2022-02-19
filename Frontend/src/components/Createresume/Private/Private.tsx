import { Button, Input, Space } from "antd"
import { useFormik } from "formik"
import { FC } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { SetPersonalDate } from "../../../redux/reducers/newResume/ANewResume"
import { NewResume } from "../../../redux/selectors"

export const Private: FC = () => {
    const nav = useNavigate()

    const backHandler = () => {
        nav(-1)
    }
    const { name, phone, surename } = useSelector(NewResume.getState)
    const dispatch = useDispatch()

    const { handleSubmit, handleChange, handleBlur, values } = useFormik({
        initialValues: {
            name,
            surename,
            phone
        },
        onSubmit: (values) => {
            dispatch(SetPersonalDate(values))
            nav("/createResume/1")
        }
    })
    return (<form onSubmit={handleSubmit}>
        <Space direction="vertical">
            <Space align="center">
                <h3>Имя</h3>
                <Input onBlur={handleBlur} value={values.name} onChange={handleChange} name="name" />
            </Space>
            <Space align="center">
                <h3>Фамилия</h3>
                <Input onBlur={handleBlur} value={values.surename} onChange={handleChange} name="surename" />
            </Space>
            <Space align="center">
                <h3>Номер телефона</h3>
                <Input onBlur={handleBlur} value={values.phone} onChange={handleChange} name="phone" />
            </Space>
            <Space >
                <Button onClick={backHandler}>Назад</Button>
                <Button htmlType="submit" >Дальше</Button>
            </Space>
        </Space>
    </form>)
}

