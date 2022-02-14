import { FC } from 'react'
import { Button, Card } from 'antd'
import { useNavigate } from 'react-router-dom'
import { IVacance } from '../../Models/types'
import Style from './Style.module.sass'

const Vacance: FC<IVacance> = ({ vacance, description, price, skills }) => {
    const HandleRespondClick = () => { nav("/") }
    const nav = useNavigate()
    return (<Card className={Style.card}>
        <h3>{vacance}</h3>
        <h4 className={Style.price}>{price}тыс. руб</h4>
        <p>{description}</p>
        <Button onClick={HandleRespondClick} type='primary'>Откликнуться</Button>
        <Button className={Style.call}>Позвонить</Button>
    </Card>)
}

export default Vacance
