import { FC, useState } from 'react'
import { Button, Card } from 'antd'
import { useNavigate } from 'react-router-dom'
import { IVacance } from '../../Models/types'
import Style from './Style.module.sass'
import { Modal } from 'antd'

const Vacance: FC<IVacance> = ({ vacance, description, price, skills }) => {
    const [isVisible,setVisibility] = useState(false)
    const nav = useNavigate()
    const HandlerCallClick = () => {
        setVisibility(true)
    }
    const onOkClick = () => {
        setVisibility(false)
    }
    return (<Card className={Style.card}>
        <h3>{vacance}</h3>
        <h4 className={Style.price}>{price}тыс. руб</h4>
        <p>{description}</p>
        <Button onClick={() => { nav("/vacance") }} type='primary'>Показать</Button>
        <Button onClick={HandlerCallClick} className={Style.call}>Позвонить</Button>
        <Modal onCancel={onOkClick} visible={isVisible} onOk={onOkClick}>
            Телефон:{`${89897867576}`}
        </Modal>
    </Card>)
}

export default Vacance
