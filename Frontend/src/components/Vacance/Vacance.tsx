import { FC } from "react"
import { useSelector } from "react-redux"

import Style from './Vacance.module.sass'
import Header from './Header/Header'
import Content from "./Content/Content"
import SideBar from "./SideBar/SideBar"
import * as selectors from '../../redux/selectors' 

const Vacance: FC = () => {
    const vacance = useSelector(selectors.Vacance.getVacance)
    return (<div className={Style.wrapper}>
        <Header isDistantWork={vacance.isDistantWork} title={vacance.title} price={vacance.price} skills={vacance.skills}/>
        <Content />
        <div className={`${Style.newBar} ${Style.item}`}>newBar</div>
        <div className={`${Style.chat} ${Style.item}`}>chat</div>
        <SideBar />
    </div>)
}

export default Vacance