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
    const { name, phone, surename,country,mail,sity } = useSelector(NewResume.getPersonalData)
    const dispatch = useDispatch()

    const { handleSubmit, handleChange, handleBlur, values } = useFormik({
        initialValues: {
            name,
            surename,
            phone,
            mail,
            sity,
            country
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
            <Space align="center">
                <h3>Почта</h3>
                <Input onBlur={handleBlur} value={values.mail} onChange={handleChange} name="mail" />
            </Space>
            <Space align="center">
                <h3>Страна</h3>
                <Input onBlur={handleBlur} value={values.country} onChange={handleChange} name="country" />
            </Space>
            <Space align="center">
                <h3>Город</h3>
                <Input onBlur={handleBlur} value={values.sity} onChange={handleChange} name="sity" />
            </Space>
            <Space >
                <Button onClick={backHandler}>Назад</Button>
                <Button htmlType="submit" >Дальше</Button>
            </Space>
        </Space>
    </form>)
}

