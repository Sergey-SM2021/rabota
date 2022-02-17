import { Field, Formik, Form, FieldArray } from 'formik'
import { useDispatch, useSelector } from "react-redux"

import { SendResume } from "../../redux/reducers/newResume";
import * as selecor from '../../redux/selectors'
import { Button, Spin } from 'antd'
import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { ClearState } from "../../redux/reducers/newResume"
import Style from './style.module.scss'

const Resume = () => {
    const nav = useNavigate()
    const loc = useLocation().pathname
    useEffect(() => (() => { dispatch(ClearState()) }), [loc])
    const err = useSelector(selecor.NewResume.errors)
    const formIsToggle = useSelector(selecor.NewResume.formIsToggle)
    const dispatch = useDispatch()

    interface ErrorType {
        name?: string,
        surename?: string,
        number?: string,
        data?: string,
        skills?: [string],
        experience?: string
    }

    return (<>
        <h1>Создать резюме</h1>
        <Formik
            validate={(value) => {
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

                return Error
            }}
            onSubmit={(values, actions) => {
                // @ts-ignore
                dispatch(SendResume(values))
                actions.resetForm()
                nav("employee")
            }}
            initialValues={{
                name: "",
                surename: "",
                number: "",
                skills: [""],
                experience: "",

                profession: "",
                description: "",
                skillLavel: "",
                gmail: "",
                sity: "",
                country: ""
            }}
            render={({ values, errors, touched }) => (<>
                {formIsToggle ? <div><Spin size={"large"} /></div> : err ? <h2>{err}</h2> :
                    <Form>
                        <div className={Style.Stylewrapper}>
                            <div></div>
                            <div></div>
                        </div>
                    </Form>}
            </>)}
        />
    </>)
}

export default Resume


                        // <div className={scss.block}>
                        //     {touched.name && errors.name ? <div className={scss.error}>*{errors.name}</div> : <div>Имя</div>}
                        //     <Field name={"name"} />
                        // </div>
                        // <div className={scss.block}>
                        //     {touched.surename && errors.surename ? <div className={scss.error}>*{errors.surename}</div> :
                        //         <div>Фамилия</div>}
                        //     <Field name={"surename"} />
                        // </div>
                        // <div className={scss.block}>
                        //     <div>Номер телефона</div>
                        //     <Field name={"number"} />
                        // </div>
                        // <div className={scss.block}>
                        //     {touched.profession && errors.profession ? <div className={scss.error}>*{errors.profession}</div> :
                        //         <div>Укажите специальность</div>}
                        //     <Field name={"profession"} as="textArea" />
                        // </div>
                        // <div className={scss.block}>
                        //     {touched.experience && errors.experience ? <div className={scss.error}>*{errors.experience}</div> :
                        //         <div>Укажите опыт работы</div>}
                        //     <div><label>есть<Field value={"есть"} name={"experience"} type={"radio"} /></label></div>
                        //     <label>нет<Field value={"нет"} name={"experience"} type={"radio"} /></label>
                        // </div>
                        // <div className={scss.block}>
                        //     <FieldArray name={'skills'} render={(helpers) => (<div>
                        //         <div>Навыки
                        //             <Button type={"link"} onClick={() => {
                        //                 helpers.push("")
                        //             }}>Добавить
                        //             </Button>
                        //         </div>
                        //         {
                        //             values.skills.map((el, index) => (<div className={scss.block}>
                        //                 <Field name={`skills[${index}]`} />
                        //                 <button type={"button"} onClick={() => {
                        //                     helpers.remove(index)
                        //                 }}>Удалить
                        //                 </button>
                        //             </div>
                        //             ))
                        //         }
                        //     </div>)} />
                        // </div>
                        // <div className={scss.block}>
                        //     <button type="submit" disabled={formIsToggle}>Заполнить</button>
                        // </div>