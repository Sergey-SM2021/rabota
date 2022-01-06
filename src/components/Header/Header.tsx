import { NavLink } from 'react-router-dom'
import Container from "../Container"
import HeaderStyle from './HeaderStyle'

const Header = () => {
    return (
        <Container>
            <HeaderStyle>
                <NavLink to="employer">Employer</NavLink>
                <NavLink to="/">Employee</NavLink>
            </HeaderStyle>
        </Container>)
}

export default Header