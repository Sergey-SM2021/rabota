import { Formik } from "formik"
import Field from "./Field"
import Wrupper from "../Container"
import styled from "styled-components"
import Main from "../Main"
import path from '../../assets/img/Dollarphotoclub_49188294-2.jpg'

// type Error = null | {
//     name:string,
//     education:string,
//     language:string,
//     data:string,
//     experience:string,
//     phone:string,
//     surename:string
// }

const Createresume = () => {
    return (<Main img={path}><Wrupper><Formik
        validate={(values) => {
            let errors: any = {}
            if (!values.name) { errors.name = "заполните поле !" }
            return errors
        }}
        onSubmit={(values) => { alert(JSON.stringify(values)) }}
        initialValues={{ name: "", education: "", language: "", data: "", experience: "", phone: "", surename: "" }}>
        {({ handleChange, handleBlur, handleSubmit, values, touched, errors }) => (
            <form onSubmit={handleSubmit}>
                <h2>Контактные данные</h2>
                <Field touched={touched} error={errors.name} values={values.name} handleChange={handleChange} name="name" />
                <Field touched={touched} error={errors.surename} values={values.surename} handleChange={handleChange} name="surename" />
                <Field touched={touched} error={errors.phone} values={values.phone} handleChange={handleChange} name="phone" />
                <h2>Основная информация</h2>
                <Field touched={touched} error={errors.education} values={values.education} handleChange={handleChange} name="education" />
                <Field touched={touched} error={errors.language} values={values.language} handleChange={handleChange} name="language" />
                <Field touched={touched} error={errors.experience} values={values.experience} handleChange={handleChange} name="experience" />
                <h2>Дополнительная информация</h2>
                <Container><Textarea name="data" onChange={handleChange} value={values.data}></Textarea></Container>
                <Button type="submit" />
            </form>
        )}
    </Formik></Wrupper></Main>)
}

let Textarea = styled.textarea`
    width: 100%;
`

const Button = styled.input`
    border-radius: 3px;
    width: 300px;
    height: 40px;
    background: #40a9ff;
    border: none;
    color: white;
`

let Container = styled.div`
    width: 646px;
`

export default Createresume