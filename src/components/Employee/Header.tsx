import styled from "styled-components";
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/img/noroot.png'

const Header = () => {
    let nav = useNavigate()
    return (<Container>
        <Container_inner>
            <Logo />
            <Help>Помощь</Help>
        </Container_inner>
        <Container_inner>
            <Button onClick={() => { nav("/createresume") }}>Создать резюме</Button>
            <Button onClick={() => { nav("/auth") }}>Войти</Button>
        </Container_inner>
    </Container>)
}

const Logo = styled.img.attrs({ src: logo })`
    height: 60px;
`

const Help = styled.div`
    margin-left: 19px;
    display: flex;
    align-items: center;
`

let Container = styled.div`
    margin: 43px 0px;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

let Container_inner = styled.div`
    display: flex;
    justify-content: space-between;
`

let Button = styled.button`
    height: 45px;
    background: none;
    border-radius: 25px;
    border: solid 1px #a3daa5;
    color: #a3daa5;
    margin-left: 19px;
`

export default Header