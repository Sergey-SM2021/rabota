import { Formik } from 'formik'
import { FC } from 'react'
import Main from '../Main'
import bg from '../../assets/img/Dollarphotoclub_49188294-2.jpg'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { FillFirstFormAC } from '../../redux/form'
import { useNavigate } from 'react-router-dom'

const Resume1: FC = () => {
    useEffect(() => { }, [])
    const dispatch = useDispatch()
    const nav = useNavigate()

    type ErrorType = {
        firstname?: string,
        lastname?: string,
        namber?: string,
        data?: string
    }

    return (<Formik
        onSubmit={(values) => {
            dispatch(FillFirstFormAC(values))
            nav("/createResume2")
        }}
        validate={(values) => {
            let Error: ErrorType = {}
            const template = new RegExp(/[a-z 0-9/$/*/%/!/@/#]/)
            const phoneTemplate = new RegExp(/(^8|^\+7)\d{10}/)

            if (!values.firstname) {
                Error.firstname = "*Заполните это поле"
            } else if (template.test(values.firstname)) {
                Error.firstname = "*Поле содержит запрещённые символы"
            }

            if (!values.namber) {
                Error.namber = "*Заполните это поле"
            } else if (!phoneTemplate.test(values.namber)) {
                Error.namber = "*Не корректный номер"
            }

            if (!values.lastname) {
                Error.lastname = "*Заполните это поле"
            } else if (template.test(values.lastname)) {
                Error.lastname = "*Поле содержит запрещённые символы"
            }

            return Error
        }}
        initialValues={{ firstname: "", lastname: "", namber: "", data: "" }}>
        {
            ({ values, touched, errors, handleChange, handleSubmit, handleBlur }) =>
            (<>
                <Main img={bg}>
                    <Container>
                        <form onSubmit={handleSubmit}>
                            <H2>Ваше резюме</H2>
                            <Row>
                                <div>Навыки</div>
                                <Input onBlur={handleBlur} placeholder='Александр' value={values.firstname} name='firstname' onChange={handleChange} />
                            </Row>
                            {touched.firstname && errors.firstname ? <Errors>{errors.firstname}</Errors> : null}
                            <Row>
                                <div>Опыт работы</div>
                                <Input onBlur={handleBlur} placeholder='Князев' name='lastname' value={values.lastname} onChange={handleChange} />
                            </Row>
                            {touched.lastname && errors.lastname ? <Errors>{errors.lastname}</Errors> : null}
                            <Row>
                                <div>Языки</div>
                                <Input onBlur={handleBlur} placeholder='89163196280' value={values.namber} name='namber' onChange={handleChange} />
                            </Row>
                            {touched.namber && errors.namber ? <Errors>{errors.namber}</Errors> : null}
                            <Row>
                                <div>Детали</div>
                                <TextArea onBlur={handleBlur} placeholder='Люблю латте' name='data' value={values.data} onChange={handleChange} />
                            </Row>
                            <Center><Button type='submit'>Отправить</Button></Center>
                        </form>
                    </Container>
                </Main>
            </>
            )
        }
    </Formik>)
}

const TextArea = styled.textarea`
    height: 120px;
`

const Row = styled.div`
    width: 310px;
    margin: 0px auto;
`

const Input = styled.input`
    width: 100%;
    border: black solid 1px;
`

const H2 = styled.h2`
    text-align: center;
`

const Errors = styled.div`
    color: #ff0000;
    display: flex;
    justify-content: center;
`

const Center = styled.div`
    display: flex;
    justify-content: center;
`

const Button = styled.button`
    margin: 20px;
    border-radius: 5px;
    border: none;
    background: #6c8eeb;
    color: #fff;
    height: 27px;
    text-align: center;
    width: 270px;
    &:hover{
        transition: 0.6s;
        box-shadow: #0000009d 4px 4px 10px;
    }
`

const Container = styled.div`
    position: absolute;
    width: 500px;
    background: #fff;
    height: 88vh;
    margin: 30px 20px;
    box-shadow: #0000007a 10px 10px 16px;
`

export default Resume1