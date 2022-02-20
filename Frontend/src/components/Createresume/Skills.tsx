import { Button, Input, Space } from "antd"
import { useFormik } from "formik"
import { FC } from "react"
import { useNavigate } from "react-router-dom"

export const Skills: FC = () => {

    const backHandler = () => {
        nav(-1)
    }

    const nav = useNavigate()
    const { handleBlur, handleSubmit, handleChange, values } = useFormik({
        onSubmit: () => {
            nav("/createResume/2")
        },
        initialValues: {
            description: "",
            profession: "",
            skillLavel: "",
            technologyStack: [""],
            experience: ""
        }
    })
    return (<form onSubmit={handleSubmit}>
        <Space direction="vertical">
            <Space align="center">
                <h3>Описание</h3>
                <Input onBlur={handleBlur} value={values.description} onChange={handleChange} name="description" />
            </Space>
            <Space align="center">
                <h3>Профессия</h3>
                <Input onBlur={handleBlur} value={values.profession} onChange={handleChange} name="profession" />
            </Space>
            <Space align="center">
                <h3>Позиция</h3>
                <Input onBlur={handleBlur} value={values.skillLavel} onChange={handleChange} name="skillLavel" />
            </Space>
            <Space align="center">
                <h3>Стек</h3>
                <Input onBlur={handleBlur} value={values.technologyStack} onChange={handleChange} name="technologyStack" />
            </Space>
            <Space align="center">
                <h3>Опыт работы</h3>
                <Input onBlur={handleBlur} value={values.experience} onChange={handleChange} name="experience" />
            </Space>
            <Space >
                <Button onClick={backHandler}>Назад</Button>
                <Button htmlType="submit" >Дальше</Button>
            </Space>
        </Space>
    </form>)
}