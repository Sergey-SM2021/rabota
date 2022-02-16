import { FC } from "react"

import Style from './Vacance.module.sass'
import Header from './Header/Header'
import Content from "./Content/Content"
import SideBar from "./SideBar/SideBar"

const Vacance: FC = () => {
    return (<div className={Style.wrapper}>
        <Header title="Full" price={300} skills={["js","ts"]}/>
        <Content />
        <div className={`${Style.newBar} ${Style.item}`}>newBar</div>
        <div className={`${Style.chat} ${Style.item}`}>chat</div>
        <SideBar />
    </div>)
}

export default Vacance