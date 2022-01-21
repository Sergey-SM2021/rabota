import { useDispatch, useSelector } from 'react-redux'
import Resume from './Resume'
import { getResumes, gettotalCountCount } from '../../redux/selectors'

import { getResumesTC } from '../../redux/employer'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Input, Pagination } from 'antd'

const { Search } = Input

const Employer = () => {
    const pageSize = 2
    const count = 1

    const MyPagination = (page: number, pageSize: number) => {
        dispatch(getResumesTC(pageSize, page))
    };

    const dispatch = useDispatch()
    let totalCountCaunt = useSelector(gettotalCountCount)

    const search = (value: string) => {
        console.log(totalCountCaunt)
    };

    let resumes = useSelector(getResumes)
    let loc = useLocation().pathname
    useEffect(() => {
        alert("loading...")
        dispatch(getResumesTC(pageSize,count))
    }, [loc])
    return (<>
        <Search onSearch={search} />
        {resumes.map((el) => (<Resume {...el} />))}
        <Pagination defaultCurrent={count} defaultPageSize={pageSize} total={totalCountCaunt} onChange={MyPagination} />
    </>)
}

export default Employer