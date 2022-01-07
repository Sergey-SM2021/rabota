import styled from "styled-components"

const Content = () => {
    return (<Container>
        <h1>Работа найдется для каждого</h1>
        <InputContainer>
            <Input placeholder="Профессия, должность или компания" /><Button >Найти работу</Button>
        </InputContainer>
    </Container>)
}

const Input = styled.input`
    width: 560px;
    height: 100%;
    border: none;
`

const Button = styled.button`
    width: 300px;
    height: 100%;
    background: #40a9ff;
    border: #40a9ff;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    color: #fff;
`

const InputContainer = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    height: 49px;
`

const Container = styled.div`
    color: #fff;
`

export default Content