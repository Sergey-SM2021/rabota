import Container from '../Container'
import Main from '../Main'
import employer from '../../assets/img/8095794-1592926814.jpg'
import { useSelector } from 'react-redux'
import {getResumes} from '../../redux/selectors'
import Resume from './Resume'
import styled from 'styled-components'

const Employer = () => {
    let resumes = useSelector(getResumes)
    return (<>
        <Main img={employer}><Container><div >Employer</div></Container></Main>
        <BG><Container>{resumes.map((el,i)=>(<Resume {...el}/>))}</Container></BG>
    </>)
}

const BG = styled.div`
    background: #eeeeee;
`

export default Employer