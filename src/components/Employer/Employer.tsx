import { useDispatch, useSelector } from 'react-redux'
import Resume from './Resume'
import { getResumes } from '../../redux/selectors'

import { getResumesTC } from '../../redux/employer'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'


const Employer = () => {
    const dispatch = useDispatch()
    let resumes = useSelector(getResumes)
    let loc = useLocation().pathname
    useEffect(() => {
        alert("loading...")
        dispatch(getResumesTC())
    }, [loc])
    return (<>
        {resumes.map((el) => (<Resume {...el} />))}
    </>)
}

export default Employer