import { Input, Space } from "antd";
import { useFormik } from "formik";
import { FC } from "react";

export const Private: FC = () => {
    const { handleSubmit, handleChange,handleBlur, values } = useFormik({
        initialValues: { name:"", surename:"", phone:"" },
        onSubmit: ({ name }) => { alert(JSON.stringify(name)) }
    })
    return (<form onSubmit={handleSubmit}>
        <Space direction="vertical">
        <Space align="center">
            <h3>Имя</h3>
            <Input onBlur={handleBlur} value={values.name} onChange={handleChange} name="name" />
        </Space>
        <Space align="center">
            <h3>Фамилия</h3>
            <Input onBlur={handleBlur} value={values.name} onChange={handleChange} name="surename" />
        </Space>
        <Space align="center">
            <h3>Номер телефона</h3>
            <Input onBlur={handleBlur} value={values.name} onChange={handleChange} name="phone" />
        </Space>
        </Space>
    </form>)
}

