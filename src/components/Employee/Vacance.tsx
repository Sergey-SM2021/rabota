import React, { FC } from 'react'
import { Button, Card } from 'antd'
import { IVacance } from '../../redux/newVacance'

const Vacance: FC<IVacance> = ({ vacance, description, price, skills }) => {
    return (<Card style={{marginTop:10,marginBottom:10}}>
        <h3>{vacance}</h3>
        <div>{description}</div>
        <div>Оплата:{price}</div>
        <div>{skills.map((el) => (<div>*{el}</div>))}</div>
        <Button type='primary'>Откликнуться</Button>
    </Card>)
}

export default Vacance
