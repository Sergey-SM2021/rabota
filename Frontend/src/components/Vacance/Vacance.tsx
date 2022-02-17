import { FC, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import Style from './Vacance.module.sass'
import Header from './Header/Header'
import Content from "./Content/Content"
import SideBar from "./SideBar/SideBar"
import * as selectors from '../../redux/selectors'
import { setVacance } from "../../redux/reducers/vacance"

const Vacance: FC = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setVacance({
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, tempore vel. Animi distinctio in omnis molestiae eligendi debitis quaerat ullam asperiores facere commodi excepturi, inventore non, eaque optio modi? Minus.",
            price: 1400,
            skills: ["ts", "js", "react"],
            vacance: "Team lead"
        }
        ))
    }, [])
    const vacance = useSelector(selectors.Vacance.getVacance)
    return (<div className={Style.wrapper}>
        <Header isDistantWork={true} title={vacance.vacance} price={vacance.price} skills={vacance.skills} />
        <Content />
        <div className={`${Style.newBar} ${Style.item}`}>newBar</div>
        <div className={`${Style.chat} ${Style.item}`}>chat</div>
        <SideBar />
    </div>)
}

export default Vacance