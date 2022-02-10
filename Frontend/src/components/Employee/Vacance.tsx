import { FC } from 'react'
import { Button, Card } from 'antd'
import { useNavigate } from 'react-router-dom'
import { IVacance } from '../../Models/types'

const Vacance: FC<IVacance> = ({ vacance, description, price, skills }) => {
    const nav = useNavigate()
    return (<Card style={{ marginTop: 10, marginBottom: 10 }}>
        <h3>{vacance}</h3>
        <div>{description}</div>
        <div>Оплата:{price}</div>
        <div>{skills.map((el) => (<div>*{el}</div>))}</div>
        <Button onClick={()=>{nav("/")}} type='primary'>Откликнуться</Button>
    </Card>)
}

export default Vacance
