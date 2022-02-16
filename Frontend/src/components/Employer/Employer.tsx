import { useDispatch, useSelector } from 'react-redux'
import Resume from './Resume'
import * as selector from '../../redux/selectors'
import { getResumes } from '../../redux/reducers/employer'
import Style from './Employer.module.sass'

import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Button, Input, Pagination, Spin } from 'antd'
import ResumeAnyPerson from '../someonesResume/someonesResume'

const { Search } = Input

const Employer = () => {
    let resumes = useSelector(selector.Resumes.getResumes)
    let isLoading = useSelector(selector.Resumes.checkLoading)
    let totalCount = useSelector(selector.Resumes.gettotalCountCount)
    const Errors = useSelector(selector.Resumes.errors)
    let nav = useNavigate()
    let loc = useLocation().pathname
    const dispatch = useDispatch()

    const MyPagination = (page: number, pageSize: number) => {
        dispatch(getResumes(pageSize, page))
    }

    const search = (value: string) => {
        console.log(totalCount)
    }

    useEffect(() => {
        dispatch(getResumes())
    }, [loc])

    return (<div className={Style.wrapper}>
        <div className={Style.resumes}>
            <Search style={{ marginTop: 10, marginBottom: 10 }} onSearch={search} />
            <Button onClick={() => { nav("/newvacance") }} type='primary'>Добавить вакансию</Button>
            {isLoading ?
                <div><Spin size='large' /></div> : Errors ? <h2>{Errors}</h2> :
                    resumes.map((el) => (<Resume {...el} />))}
            <Pagination defaultCurrent={1} defaultPageSize={6} total={totalCount} onChange={MyPagination} />
        </div>
        <div className={Style.resumeAnyPerson}>
            <ResumeAnyPerson />
        </div>
    </div>)
}

export default Employer