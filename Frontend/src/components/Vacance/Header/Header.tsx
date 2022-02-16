import { FC } from "react"

import Style from './Header.module.sass'

const Header: FC = () => {
    return (<div className={`${Style.header} ${Style.item}`}>
        <h2>Full-Stack developer</h2>
        <div className={Style.grup}>
            <p className={Style.field}>зарплата</p>
            <p className={Style.value}>180-278$</p>
        </div>
        <div className={Style.grup}>
            <p className={Style.field}>Требуемые навыки</p>
            <p className={Style.value}>Разрабаботка по, node js, react, redux, ts, js</p>
        </div>
        <div className={Style.grup}>
            <p className={Style.field}>Местоположение и тип занятости</p>
            <p className={Style.value}>Полный рабочий день • Можно удаленно</p>
        </div>
    </div>)
}

export default Header