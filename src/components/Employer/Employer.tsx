import { useDispatch, useSelector } from 'react-redux'
import Resume from './Resume'
import { getResumes } from '../../redux/selectors'

import { getResumesTC } from '../../redux/employer'
import styled from 'styled-components'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'


const Employer = () => {
    const dispatch = useDispatch()
    let resumes = useSelector(getResumes)
    let loc = useLocation().pathname
    useEffect(() => {
        dispatch(getResumesTC())
    }, [loc])
    return (<>
        <BG>{resumes.map((el) => (<Resume {...el} />))}</BG>
    </>)
}

const BG = styled.div`
    background: #eeeeee;
`

export default Employer