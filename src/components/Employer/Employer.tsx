import { useDispatch, useSelector } from 'react-redux'
import Resume from './Resume'
import { ResumesApi } from '../../redux/selectors'

import { getResumesTC } from '../../redux/employer'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Input, Pagination, Spin } from 'antd'

const { Search } = Input

const Employer = () => {
    const pageSize = 2
    const count = 1

    const MyPagination = (page: number, pageSize: number) => {
        dispatch(getResumesTC(pageSize, page))
    };

    const dispatch = useDispatch()
    let totalCount = useSelector(ResumesApi.gettotalCountCount)

    const search = (value: string) => {
        console.log(totalCount)
    };

    let resumes = useSelector(ResumesApi.getResumes)
    let isLoading = useSelector(ResumesApi.checkLoading)
    let loc = useLocation().pathname
    useEffect(() => {
        dispatch(getResumesTC(pageSize, count))
    }, [loc])
    return (<>
        <Search onSearch={search} />
        {isLoading ? <Spin size='large' /> : resumes.map((el) => (<Resume {...el} />))}
        <Pagination defaultCurrent={count} defaultPageSize={pageSize} total={totalCount} onChange={MyPagination} />
    </>)
}

export default Employer