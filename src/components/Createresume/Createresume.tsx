import { Formik } from 'formik'
import { FC } from 'react'
import Main from '../Main'
import bg from '../../assets/img/Dollarphotoclub_49188294-2.jpg'
import styled from 'styled-components'

const Resume: FC = () => {

    type ErrorType = {
        firstname?: string,
        lastname?: string
    }

    return (<Formik onSubmit={(values) => { alert(JSON.stringify(values)) }}
        validate={(values) => {
            let Error: ErrorType = {}
            const template = new RegExp(/[a-z 0-9/$/*/%/!/@/#]/)

            if (!values.firstname) {
                Error.firstname = "*Заполните это поле"
            } else if (template.test(values.firstname)) {
                Error.firstname = "*Поле содержит запрещённые символы"
            }

            if (!values.lastname) {
                Error.lastname = "*Заполните это поле"
            } else if (template.test(values.lastname)) {
                Error.lastname = "*Поле содержит запрещённые символы"
            }

            return Error
        }}
        initialValues={{ firstname: "", lastname: "" }}>
        {
            ({ values, touched, errors, handleChange, handleSubmit, handleBlur }) =>
            (<>
                <Main img={bg}>
                    <Container>
                        <form onSubmit={handleSubmit}>
                            <H2>Ваше резюме</H2>
                            <Row>
                                <div>Имя</div>
                                <Input onBlur={handleBlur} placeholder='Введите имя' value={values.firstname} name='firstname' onChange={handleChange} />
                            </Row>
                            {touched.firstname && errors.firstname ? <Center><Errors>{errors.firstname}</Errors></Center> : null}
                            <Col>
                                <input onBlur={handleBlur} placeholder='Введите фамилию' name='lastname' value={values.lastname} onChange={handleChange} />
                            </Col>
                            {touched.lastname && errors.lastname ? <Center><Errors>{errors.lastname}</Errors></Center> : null}
                            <Center><Button type='submit'>Отправить</Button></Center>
                        </form>
                    </Container>
                </Main>
            </>
            )
        }
    </Formik>)
}

const Row = styled.div`
    width: 310px;
    background: #234;
    margin: 0px auto;
`

const Input = styled.input`
    width: 100%;
    border: 0px;
    background: #145;
`

const H2 = styled.h2`
    text-align: center;
`

const Errors = styled.div`
    color: #ff0000;
`

const Center = styled.div`
    display: flex;
    justify-content: center;
`

const Col = styled(Center)`
    flex-direction: column;
`

const Button = styled.button`
    margin: 20px;
    border-radius: 5px;
    border: none;
    background: #6c8eeb;
    color: #fff;
    height: 27px;
    text-align: center;
    width: 200px;
    &:hover{
        box-shadow: #0000009d 4px 4px 10px;
    }
`

const Container = styled.div`
    width: 500px;
    background: #fff;
    height: 80vh;
    margin: 30px 20px;
    box-shadow: #0000007a 10px 10px 16px;
`

export default Resume