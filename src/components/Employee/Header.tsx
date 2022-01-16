import styled from "styled-components";
import { useNavigate } from 'react-router-dom'

const Header = () => {
    let nav = useNavigate()
    return (<Container>
            <Button onClick={() => { nav("/createresume") }}>Создать резюме</Button>
            <Button onClick={() => { nav("/auth") }}>Войти</Button>
        </Container>)
}

let Container = styled.div`
    display: flex;
    justify-content: space-between;
`

let Button = styled.button`
    margin: 10px 0px;
    height: 45px;
    background: none;
    border-radius: 25px;
    border: solid 1px #a3daa5;
    color: #a3daa5;
`

export default Header