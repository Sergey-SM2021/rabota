import { FC, useState } from 'react'
import { Button, Card } from 'antd'
import { useNavigate } from 'react-router-dom'
import { TIVacance } from '../../Models/Models'
import Style from './Style.module.sass'
import { Modal } from 'antd'

const Vacance: FC<TIVacance> = ({ title, price, _id }) => {
    const [isVisible,setVisibility] = useState(false)
    const nav = useNavigate()
    const HandlerCallClick = () => {
        setVisibility(true)
    }
    const onOkClick = () => {
        setVisibility(false)
    }
    return (<Card className={Style.card}>
        <h3>{title}</h3>
        <h4 className={Style.price}>{price}тыс. руб</h4>
        <Button onClick={() => { nav(`/vacance/${_id}`) }} type='primary'>Показать</Button>
        <Button onClick={HandlerCallClick} className={Style.call}>Позвонить</Button>
        <Modal onCancel={onOkClick} visible={isVisible} onOk={onOkClick}>
            Телефон:{`${89897867576}`}
        </Modal>
    </Card>)
}

export default Vacance
