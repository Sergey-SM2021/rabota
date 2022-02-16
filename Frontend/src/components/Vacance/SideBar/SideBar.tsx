import { FC } from "react"

import Style from './SideBar.module.sass'

const SideBar:FC = () => {
    return (<div className={`${Style.sideBar} ${Style.item}`}>
        <div className={Style.ava} />
        <h2 className={Style.name}>SoftTehno</h2>
        <p>Профессиональные услуги в сфере разработки заказного программного обеспечения, разработки веб- и мобильных приложений</p>
        <a href="#">link</a>
    </div>)
}

export default SideBar