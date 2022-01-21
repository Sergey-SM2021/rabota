import { useDispatch, useSelector } from 'react-redux'
import Resume from './Resume'
import { getResumes } from '../../redux/selectors'

import { getResumesTC } from '../../redux/employer'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Input } from 'antd'

const { Search } = Input

const Employer = () => {
    const dispatch = useDispatch()

    const search = (value: string) => {
        dispatch({type:"test"})
    };

    let resumes = useSelector(getResumes)
    let loc = useLocation().pathname
    useEffect(() => {
        alert("loading...")
        dispatch(getResumesTC(3,1))
    }, [loc])
    return (<>
        <Search onSearch={search} />
        {resumes.map((el) => (<Resume {...el} />))}
    </>)
}

export default Employer