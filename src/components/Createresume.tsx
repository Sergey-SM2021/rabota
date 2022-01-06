import { Formik } from "formik"
import Container from "./Container"

const Createresume = () => {
    return (<Container><Formik validate={() => { }} onSubmit={(values) => { alert(JSON.stringify(values)) }} initialValues={{ name: "", surename: "" }}>
        {({ handleChange, handleBlur, handleSubmit, values, touched }) => (
            <form onSubmit={handleSubmit}>
                <span>name</span><input onChange={handleChange} value={values.name} name="name"></input>
                <span>surename</span><input onChange={handleChange} value={values.surename} name="surename"></input>
                <input type="submit" />
            </form>
        )}
    </Formik></Container>)
}

export default Createresume