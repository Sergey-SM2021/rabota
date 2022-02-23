import { Button, Layout, Space } from "antd"
import { useFormik } from "formik"
import { FC } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import * as yup from 'yup'

import { SetPersonalDate } from "../../../redux/reducers/newResume/ANewResume"
import { NewResume } from "../../../redux/selectors"
import { MyField } from "../MyField"

const { Content, Footer } = Layout

export const Private:FC = () => {
    const nav = useNavigate()

    const { name, phone, surename, country, mail, sity } = useSelector(NewResume.getPersonalData)
    const dispatch = useDispatch()

    const { handleSubmit, handleChange, handleBlur, values, errors } = useFormik({
        validationSchema: yup.object({
            name: yup.string().required(),
            surename: yup.string().required(),
            phone: yup.number().required(),
            mail: yup.string().email().required(),
            sity: yup.string().required(),
            country: yup.string().required()
        }),
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
    
    return (<></>
                // <form onSubmit={handleSubmit}>
                //     <Space direction="vertical">
                //         <MyField title="Имя" error={errors.name} handleBlur={handleBlur}
                //             handleChange={handleChange} name="name" value={values.name} />
                //         <MyField title="Фамилия" error={errors.surename} handleBlur={handleBlur}
                //             handleChange={handleChange} name="surename" value={values.surename} />
                //         <MyField title="Номер телефона" error={errors.phone} handleBlur={handleBlur}
                //             handleChange={handleChange} name="phone" value={values.phone} />
                //         <MyField title="Почта" error={errors.mail} handleBlur={handleBlur}
                //             handleChange={handleChange} name="mail" value={values.mail} />
                //         <MyField title="Страна" error={errors.country} handleBlur={handleBlur}
                //             handleChange={handleChange} name="country" value={values.country} />
                //         <MyField title="Город" error={errors.sity} handleBlur={handleBlur}
                //             handleChange={handleChange} name="sity" value={values.sity} />
                //         <Space >
                //             <Button type="primary" htmlType="submit" >Дальше</Button>
                //         </Space>
                //     </Space>
                // </form>
    )
}