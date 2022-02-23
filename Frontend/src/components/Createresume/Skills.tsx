import { Button, Space } from "antd"
import { useFormik } from "formik"
import { FC } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { setSkills } from "../../redux/reducers/newResume/ANewResume"
import { NewResume } from '../../redux/selectors'
import { MyField } from "./MyField"
import * as yup from "yup"

export const Skills: FC = () => {
    const { description, experience, profession, skillLavel, technologyStack } = useSelector(NewResume.getSkills)

    const dispatch = useDispatch()

    const backHandler = () => {
        nav(-1)
    }

    const nav = useNavigate()

    const { handleBlur, handleSubmit, handleChange, values, errors } = useFormik({
        onSubmit: values => {
            dispatch(setSkills(values))
            nav("/createResume/2")
        },
        validationSchema: yup.object({
            description:yup.string().required(),
            profession:yup.string().required(),
            skillLavel:yup.string().required(),
            technologyStack:yup.string().required(),
            experience:yup.string().required()
        }),
        initialValues: {
            description,
            profession,
            skillLavel,
            technologyStack,
            experience
        }
    })
    return (<></>
    // <form onSubmit={handleSubmit}>
    //     <Space direction="vertical">
    //         <MyField error={errors.description} handleBlur={handleBlur} handleChange={handleChange} name="description" title={"Описание"} value={values.description} />
    //         <MyField error={errors.profession} handleBlur={handleBlur} handleChange={handleChange} name="profession" title={"Профессия"} value={values.profession} />
    //         <MyField error={errors.skillLavel} handleBlur={handleBlur} handleChange={handleChange} name="skillLavel" title={"Позиция"} value={values.skillLavel} />
    //         <MyField title="Стек" handleBlur={handleBlur} value={values.technologyStack} handleChange={handleChange} error={errors.technologyStack} name="technologyStack" />
    //         <MyField title="Опыт работы" handleBlur={handleBlur} value={values.experience} handleChange={handleChange} error={errors.experience} name="experience" />
    //         <Space >
    //             <Button onClick={backHandler}>Назад</Button>
    //             <Button htmlType="submit" >Дальше</Button>
    //         </Space>
    //     </Space>
    // </form >
    )
}