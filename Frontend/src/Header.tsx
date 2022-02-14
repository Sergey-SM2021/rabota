import { NavLink } from 'react-router-dom';
import { FC } from 'react'
import { Layout, Menu } from 'antd';

const { Header } = Layout;

const MyHeader:FC = () => {
    return (<Header >
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item><NavLink to={"employer"}>Работодатель</NavLink></Menu.Item>
            <Menu.Item><NavLink to={"employee"}>Соискатель</NavLink></Menu.Item>
            <Menu.Item><NavLink to={"auth"}>Войти</NavLink></Menu.Item>
        </Menu>
    </Header>)
}

export default MyHeader
