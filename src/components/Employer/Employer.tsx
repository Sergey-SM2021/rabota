import { useDispatch, useSelector } from 'react-redux'
import { getResumesTC } from '../../redux/employer'
import Resume from './Resume'
import styled from 'styled-components'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getResumes } from '../../redux/selectors'

const Employer = () => {
    const dispatch = useDispatch()
    let resumes = useSelector(getResumes)
    let loc = useLocation().pathname
    useEffect(()=>{
        dispatch(getResumesTC())
    },[loc])
    return (<>
        <BG>{resumes.map((el, i) => (<Resume {...el} />))}</BG>
    </>)
}

const BG = styled.div`
    background: #eeeeee;
`

export default Employer