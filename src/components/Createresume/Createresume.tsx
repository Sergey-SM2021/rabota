import { Formik } from "formik"
import Field from "./Field"
import Wrupper  from "../Container"
import styled from "styled-components"

const Createresume = () => {
    return (<Wrupper><Formik
        validate={() => { }}
        onSubmit={(values) => { alert(JSON.stringify(values)) }}
        initialValues={{ name: "", education: "", language: "",data:"", experience: "", phone: "", surename: "" }}>
        {({ handleChange, handleBlur, handleSubmit, values, touched }) => (
            <form onSubmit={handleSubmit}>
                <h2>Контактные данные</h2>
                <Field values={values.name} handleChange={handleChange} name="name" />
                <Field values={values.surename} handleChange={handleChange} name="surename" />
                <Field values={values.phone} handleChange={handleChange} name="phone" />
                <h2>Основная информация</h2>
                <Field values={values.education} handleChange={handleChange} name="education" />
                <Field values={values.language} handleChange={handleChange} name="language" />
                <Field values={values.experience} handleChange={handleChange} name="experience" />
                <h2>Дополнительная информация</h2>
                <Container><Textarea name="data" onChange={handleChange} value={values.data}></Textarea></Container>
                <input type="submit" />
            </form>
        )}
    </Formik></Wrupper>)
}

let Textarea = styled.textarea`
    width: 100%;
`

let Container = styled.div`
    width: 646px;
`

export default Createresume