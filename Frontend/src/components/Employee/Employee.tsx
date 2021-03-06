import { Button, Input, Pagination, Spin } from 'antd'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'

import { getVacance } from '../../redux/employee'
import * as selector from '../../redux/selectors'
import Vacance from './Vacance'

const { Search } = Input

const Employee = () => {
    const handleChange = (page:number, pageSize:number) => {
        dispatch(getVacance(page, pageSize))
    }

    let nav = useNavigate()
    const loc = useLocation()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getVacance())
    }, [loc])
    const Vacances = useSelector(selector.Vacance.getVacance)
    const isLoading = useSelector(selector.Vacance.isLoading)
    const TotalCount = useSelector(selector.Vacance.getTotalCount)
    const Errors = useSelector(selector.Vacance.errors)

    return (<>
        <Search style={{ marginTop: 10, marginBottom: 10 }} />
        <Button onClick={() => { nav("/createresume") }} type='primary'>Создать резюме</Button>
        {
            <>
                {isLoading ?
                    <div><Spin size='large'></Spin></div> :
                    <>{Errors ?
                        <h2>{Errors}</h2>:
                        Vacances.map((el) => (<Vacance {...el} />))}</>}
            </>
        }
        <Pagination onChange={ handleChange } defaultPageSize={2} defaultCurrent={1} total={TotalCount} />
    </>)
}

export default Employee