import { Field, Formik, Form, FieldArray } from 'formik'
import Container from '../Container'
import styled from "styled-components";
import { FormType } from "../../types";
import { useDispatch } from "react-redux";
import { SendResume } from "../../redux/form";

const Resume = () => {
    const dispatch = useDispatch()

    interface ErrorType {
        name?: string,
        surename?: string,
        number?: string,
        data?: string,
        skills?: [string],
        experience?: string
    }

    return (
        <Container>
            <h1>Создать резюме</h1>
            <Formik
                validate={(value: FormType) => {
                    let Error: ErrorType = {}

                    const NameTemplate = /[1-9 a-z]/
                    const NameValidate = new RegExp(NameTemplate)

                    if (!value.name) {
                        Error.name = "Заполните это поле"
                    } else if (NameValidate.test(value.name)) {
                        Error.name = "Содержит запрещённый символ"
                    }

                    if (!value.surename) {
                        Error.surename = "Заполните это поле"
                    } else if (NameValidate.test(value.surename)) {
                        Error.surename = "Содержит запрещённый символ"
                    }

                    if (!value.experience) {
                        Error.experience = "Укажите опыт работы"
                    }

                    if (!value.data) {
                        Error.data = "Это обязательное поле"
                    }

                    return Error
                }}
                onSubmit={(values) => {
                    dispatch(SendResume(values))
                }}
                initialValues={{
                    name: "",
                    surename: "",
                    number: "",
                    data: "",
                    skills: [""],
                    experience: "",
                    _id:""
                }}
                render={({ values, errors, touched }) => (
                    <Form>
                        <Block>
                            {touched.name && errors.name ? <ErrorMessage>*{errors.name}</ErrorMessage> : <div>Имя</div>}
                            <Field name={"name"} />
                        </Block>
                        <Block>
                            {touched.surename && errors.surename ? <ErrorMessage>*{errors.surename}</ErrorMessage> :
                                <div>Фамилия</div>}
                            <Field name={"surename"} />
                        </Block>
                        <Block>
                            <div>Номер телефона</div>
                            <Field name={"number"} />
                        </Block>
                        <Block>
                            {touched.data && errors.data ? <ErrorMessage>*{errors.data}</ErrorMessage> :
                                <div>Укажите специальность</div>}
                            <Field name={"data"}  as="textArea" />
                        </Block>
                        <Block>
                            {touched.experience && errors.experience ? <ErrorMessage>*{errors.experience}</ErrorMessage> :
                                <div>Укажите опыт работы</div>}
                            <div><label>есть<Field value={"есть"} name={"experience"} type={"radio"} /></label></div>
                            <label>нет<Field value={"нет"} name={"experience"} type={"radio"} /></label>
                        </Block>
                        <Block>
                            <FieldArray name={'skills'} render={(helpers) => (<div>
                                <div>Навыки
                                    <button type={"button"} onClick={() => {
                                        helpers.push("")
                                    }}>Добавить
                                    </button>
                                </div>
                                {
                                    values.skills.map((el, index) => (<Block>
                                        <Field name={`skills[${index}]`} />
                                        <button type={"button"} onClick={() => {
                                            helpers.remove(index)
                                        }}>Удалить
                                        </button>
                                    </Block>
                                    ))
                                }
                            </div>)} />
                        </Block>
                        <Block>
                            <button type="submit">Заполнить</button>
                        </Block>
                    </Form>
                )}
            />
        </Container>
    )
}
const ErrorMessage = styled.div`
    color: #ff0000;
`

const Block = styled.div`
    margin: 10px 0px;
`

export default Resume