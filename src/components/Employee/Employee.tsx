import { Button } from 'antd'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { getVacance } from '../../redux/employee'
import { VacanceApi } from '../../redux/selectors'

const Employee = () => {
    let nav = useNavigate()
    const loc = useLocation()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getVacance())
    }, [loc])
    let Vacance = useSelector(VacanceApi.getVacance)
    return (<>
        <Button onClick={() => { nav("/createresume") }} type='primary'>Создать резюме</Button>
        <>
            {Vacance.map((el) => (<div>
                <h3>{el.vacance}</h3>
                <div>{el.description}</div>
                <div>Оплата:{el.price}</div>
                <div>{el.skills.map((el) => (<div>*{el}</div>))}</div>
                <Button type='primary'>Откликнуться</Button>
            </div>))}
        </>
    </>)
}

export default Employee