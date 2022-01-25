import { Button, Input, Pagination, Spin } from 'antd'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'

import { getVacance } from '../../redux/employee'
import { VacanceApi } from '../../redux/selectors'
import Vacance from './Vacance'

const { Search } = Input

const Employee = () => {
    let nav = useNavigate()
    const loc = useLocation()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getVacance())
    }, [loc])
    const Vacances = useSelector(VacanceApi.getVacance)
    const isLoading = useSelector(VacanceApi.isLoading)
    // FIXME: Это не API - Это селектор
    return (<>
        <Search style={{marginTop:10,marginBottom:10}}/>
        <Button onClick={() => { nav("/createresume") }} type='primary'>Создать резюме</Button>
        <>
            {isLoading ? <div><Spin size='large'></Spin></div> : Vacances.map((el) => (<Vacance {...el} />))}
        </>
        <Pagination /> 
    </>)
}

export default Employee