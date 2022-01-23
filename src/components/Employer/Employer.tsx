import { useDispatch, useSelector } from 'react-redux'
import Resume from './Resume'
import { ResumesApi } from '../../redux/selectors'

import { getResumesTC } from '../../redux/employer'
import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Button, Input, Pagination, Spin } from 'antd'

const { Search } = Input

const Employer = () => {
    let resumes = useSelector(ResumesApi.getResumes)
    let isLoading = useSelector(ResumesApi.checkLoading)
    let totalCount = useSelector(ResumesApi.gettotalCountCount)
    let nav = useNavigate()
    let loc = useLocation().pathname
    const dispatch = useDispatch()
    const pageSize = 2
    const count = 1

    const MyPagination = (page: number, pageSize: number) => {
        dispatch(getResumesTC(pageSize, page))
    }

    const search = (value: string) => {
        console.log(totalCount)
    }

    useEffect(() => {
        dispatch(getResumesTC(pageSize, count))
    }, [loc])

    return (<>
        <Search style={{marginTop:10,marginBottom:10}} onSearch={search} />
        <Button onClick={()=>{nav("/newvacance")}} type='primary'>Добавить вакансию</Button>
        {isLoading ? <Spin size='large' /> : resumes.map((el) => (<Resume {...el} />))}
        <Pagination defaultCurrent={count} defaultPageSize={pageSize} total={totalCount} onChange={MyPagination} />
    </>)
}

export default Employer