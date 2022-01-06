import { NavLink } from 'react-router-dom'
import Container from "../Container"
import styled from "styled-components";

const Header = () => {
    return (
        <Container>
            <HeaderStyled>
                <NavLink to="employer">Employer</NavLink>
                <NavLink to="/">Employee</NavLink>
            </HeaderStyled>
        </Container>)
}

let HeaderStyled = styled.div`
    display: flex;
    justify-content: space-between;
    height: 5vh;
    align-items: center;
`

export default Header