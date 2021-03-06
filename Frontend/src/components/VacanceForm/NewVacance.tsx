import { FC } from 'react'
import { Field, FieldArray, Form, Formik } from 'formik'
import { Button } from 'antd'
import { useDispatch } from 'react-redux'

import { vacanceSubmit } from '../../redux/newVacance'

const VacanceForm: FC = () => {
    const dispatch = useDispatch()
    return <div>
        <Formik
            initialValues={{ skills: ["", ""], vacance: "", price: 0, description: "" }}
            validate={() => { }}
            onSubmit={(values, actions) => {
                // dispatch(vacanceSubmit(values))
                actions.resetForm()
            }}>
            {({ values }) => (<>
                <h2>Создать вакансию</h2>
                <Form>
                    <h4>Должность</h4>
                    <Field name={"vacance"} />
                    <h4>Ставка</h4>
                    <div style={{ display: 'inline-block', width: 30 }}>{values.price}</div><Field name={"price"} min={0} max={500} type={"range"} />
                    <h4>Описание</h4>
                    <Field as="textarea" name={"description"} />
                    <h4>Навыки:</h4>
                    <FieldArray name='skills'
                        render={(helpers) => (<>
                            {
                                values.skills.map((el, index) => (
                                    <div><label><button onClick={() => { helpers.remove(index) }} type='button'>-</button>
                                        <Field name={`skills.${index}`} />
                                    </label></div>
                                ))
                            }
                            <Button onClick={() => { helpers.push("") }}>+</Button>
                        </>)} />
                    <Button htmlType='submit'>Создать</Button>
                </Form>
            </>)}
        </Formik>
    </div>
}

export default VacanceForm