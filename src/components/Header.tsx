import { Header as HeaderAnt } from "antd/lib/layout/layout"
import { Menu } from "antd"
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (<HeaderAnt>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="Employer"><NavLink to="employer">Employer</NavLink></Menu.Item>
            <Menu.Item key="Employee"><NavLink to="/">Employee</NavLink></Menu.Item>
        </Menu>
    </HeaderAnt>)
}

export default Header