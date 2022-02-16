import { FC } from "react"

import Style from './Header.module.sass'

const Header: FC<{title:string,price:number,skills:Array<string>,isDistantWork?:boolean,}> = ({title,price,skills,isDistantWork}) => {
    return (<div className={`${Style.header} ${Style.item}`}>
        <h2>{title}</h2>
        <div className={Style.grup}>
            <p className={Style.field}>зарплата</p>
            <p className={Style.value}>{price}$</p>
        </div>
        <div className={Style.grup}>
            <p className={Style.field}>Требуемые навыки</p>
            <p className={Style.value}>{skills.join(",")}</p>
        </div>
        <div className={Style.grup}>
            <p className={Style.field}>Местоположение и тип занятости</p>
            <p className={Style.value}>{isDistantWork ? <>Можно удаленно</> : <>Офис</>}</p>
        </div>
    </div>)
}

export default Header