import Container from '../Container'
import { useSelector } from 'react-redux'
import { getResumes } from '../../redux/selectors'
import Resume from './Resume'
import styled from 'styled-components'

const Employer = () => {
    let resumes = useSelector(getResumes)
    return (<>
        <BG><Container>{resumes.map((el, i) => (<Resume {...el} />))}</Container></BG>
    </>)
}

const BG = styled.div`
    background: #eeeeee;
`

export default Employer