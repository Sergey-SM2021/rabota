import { Button, Input, Popover, Space } from "antd"
import { Field, FieldProps, Form, Formik } from "formik"
import { FC } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { SendResume } from "../../redux/reducers/newResume/ANewResume"
import { NewResume } from "../../redux/selectors"
import * as yup from 'yup'
import { WarningTwoTone } from "@ant-design/icons"

export const LastStep: FC = () => {
    const validationSchema = yup.object({
        skills: yup.object({
            description: yup.string().required(),
            profession: yup.string(),
            skillLavel: yup.string(),
            experience: yup.string()
        })
    })

    const dispatch = useDispatch()

    const nav = useNavigate()

    const handleBack = () => {
        nav(-1)
    }

    const skills = useSelector(NewResume.getSkills)
    const gitHub = useSelector(NewResume.getGitHub)
    const personalDate = useSelector(NewResume.getPersonalData)

    return (<Formik
        onSubmit={values => {
            // dispatch(SendResume(values))
            // nav('/employee')
            alert(JSON.stringify(values))
        }}
        validationSchema={validationSchema}
        initialValues={{
            skills
        }}>
        {() => (<Form>
            <Field name="skills.description" component={MyField} />
            <Button htmlType="submit">Submit</Button>
        </Form>)}
    </Formik>)
}

const MyField: FC<FieldProps> = ({ field, form:{ errors } , ...props }) => {
    console.log(`--- form.errors ---${errors}`)
    console.log(`--- field.name ---${field.name}`)
    console.log(errors[field.name])
    return (<><input {...field} /><span>1</span></>)
}

{/* <form onSubmit={handleSubmit}>
<Space direction="vertical">
    <h2>Личная информация</h2>
    <Space align="center">
        <h3>Имя</h3>
        <Input onBlur={handleBlur} value={values.personalDate.name} onChange={handleChange} name="personalDate.name" />
    </Space>
    <Space align="center">
        <h3>Фамилия</h3>
        <Input onBlur={handleBlur} value={values.personalDate.surename} onChange={handleChange} name="personalDate.surename" />
    </Space>
    <Space align="center">
        <h3>Номер телефона</h3>
        <Input onBlur={handleBlur} value={values.personalDate.phone} onChange={handleChange} name="personalDate.phone" />
    </Space>
    <Space align="center">
        <h3>Почта</h3>
        <Input onBlur={handleBlur} value={values.personalDate.mail} onChange={handleChange} name="personalDate.mail" />
    </Space>
    <Space align="center">
        <h3>Страна</h3>
        <Input onBlur={handleBlur} value={values.personalDate.country} onChange={handleChange} name="personalDate.country" />
    </Space>
    <Space align="center">
        <h3>Город</h3>
        <Input onBlur={handleBlur} value={values.personalDate.sity} onChange={handleChange} name="personalDate.sity" />
    </Space>
    <h2>Карьера</h2>
    <Space align="center">
        <h3>Описание</h3>
        <Input onBlur={handleBlur} value={values.skills.description} onChange={handleChange} name="skills.description" />
    </Space>
    <Space align="center">
        <h3>Профессия</h3>
        <Input onBlur={handleBlur} value={values.skills.profession} onChange={handleChange} name="skills.profession" />
    </Space>
    <Space align="center">
        <h3>Позиция</h3>
        <Input onBlur={handleBlur} value={values.skills.skillLavel} onChange={handleChange} name="skills.skillLavel" />
    </Space>
    <Space align="center">
        <h3>Стек</h3>
        <Input onBlur={handleBlur} value={values.skills.technologyStack} onChange={handleChange} name="skills.technologyStack" />
    </Space>
    <Space align="center">
        <h3>Опыт работы</h3>
        <Input onBlur={handleBlur} value={values.skills.experience} onChange={handleChange} name="skills.experience" />
    </Space>
    <h2>GitHub</h2>
    <Space align="center">
        <h3>GitHub</h3>
        <Input onBlur={handleBlur} value={values.gitHub} onChange={handleChange} name="gitHub" />
    </Space>
    <Space >
        <Button onClick={handleBack}>Назад</Button>
        <Button htmlType="submit" type="primary">Создать</Button>
    </Space>
</Space>
</form> */}
