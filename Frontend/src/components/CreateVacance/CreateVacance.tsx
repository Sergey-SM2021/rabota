import { FC } from 'react'
import { Field, FieldArray, Form, Formik } from 'formik'
import { Button } from 'antd'
import { useDispatch } from 'react-redux'

import { vacanceSubmit } from '../../redux/reducers/newVacance'

const VacanceForm: FC = () => {
    const dispatch = useDispatch()
    return <div>
        <Formik
            initialValues={{
                title: "",
                price: "",
                skills: [""],
                isDistantWork: false,
                phone: "",
                description: ""
            }}
            onSubmit={(values, actions) => {
                // @ts-ignore
                dispatch(vacanceSubmit({...values, phone: Number(values.phone)}))
                actions.resetForm()
            }}>
            {({ values }) => (<>
                <h2>Создать вакансию</h2>
                <Form>
                    <h4>Должность</h4>
                    <Field name={"title"} />
                    <h4>Ставка</h4>
                    <div style={{ display: 'inline-block', width: 30 }}>{values.price}</div><Field name={"price"} min={0} max={500} type={"range"} />
                    <h4>Выберите тип работы</h4>
                    <div>
                        <label>
                            <Field type="radio" name="isDistantWork" value={"false"} />
                            Работа в офисе
                        </label>
                        <label>
                            <Field type="radio" name="isDistantWork" value={"true"} />
                            Удалённая работа
                        </label>
                    </div>
                    <h4>Опишите вакансию:</h4>
                    <Field as="textArea" name="description"/>
                    <h4>Введите номер для связи</h4>
                    <Field name="phone"/>
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