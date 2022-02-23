import { Button, Input, Popover, Space } from "antd"
import { Field, FieldProps, Form, Formik } from "formik"
import { FC } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { SendResume } from "../../redux/reducers/newResume/ANewResume"
import { NewResume } from "../../redux/selectors"

export const LastStep: FC = () => {
    const nav = useNavigate()
    const dispatch = useDispatch()

    const skills = useSelector(NewResume.getSkills)
    const gitHub = useSelector(NewResume.getGitHub)
    const personalDate = useSelector(NewResume.getPersonalData)

    return (<Formik
        onSubmit={ values => {
            dispatch(SendResume(values))
            nav("/employee")
        }}
        initialValues={{
            skills,
            gitHub,
            personalDate
        }}>
        {() => (<Form>
            <Space direction="vertical">
                <h2>Персональные данные</h2>
                <Field name="personalDate.name" component={MyField}>Имя</Field>
                <Field name="personalDate.surename" component={MyField}>Фамилия</Field>
                <Field name="personalDate.phone" component={MyField}>Телефон</Field>
                <Field name="personalDate.mail" component={MyField}>Почта</Field>
                <Field name="personalDate.sity" component={MyField}>Город</Field>
                <Field name="personalDate.country" component={MyField}>Страна</Field>
                <h2>Навыки</h2>
                <Field name="skills.description" component={MyField}>Описание</Field>
                <Field name="skills.profession" component={MyField}>Профессия</Field>
                <Field name="skills.skillLavel" component={MyField}>СкиллЛевел</Field>
                <Field name="skills.technologyStack" component={MyField}>Стек</Field>
                <Field name="skills.experience" component={MyField}>Опыт</Field>
                <h2>GitHub</h2>
                <Field name="gitHub" component={MyField}>gitHub</Field>
                <Button type="primary" htmlType="submit">Submit</Button>
                <Button onClick={()=>{nav(-1)}}>Back</Button>
            </Space>
        </Form>)}
    </Formik>)
}

const MyField: FC<FieldProps> = ({ field, ...props }) => {
    return (<Space style={{ display: "flex", justifyContent: "space-between" }} >
        <h3>{props.children}</h3>
        <Input value={field.value} />
    </Space>)
}