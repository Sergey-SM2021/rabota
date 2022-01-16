import { NavLink } from 'react-router-dom'
import styled from "styled-components";

const Header = () => {
    return (<HeaderStyled>
        <NavLink to="employer">Employer</NavLink>
        <NavLink to="/">Employee</NavLink>
    </HeaderStyled>)
}

let HeaderStyled = styled.div`
    background: #00aa87;
    display: flex;
    justify-content: space-around;
    height: 5vh;
    align-items: center;
`

export default Header