import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { getResume } from '../redux/selectors'

const ResumeAnyPerson = () => {
  let { name, surename, ...state } = useSelector(getResume)
  return (<Container>
    <h6>id : {state._id}</h6>
    <h2>{name}</h2>
    <h2>{surename}</h2>
    <h2>{state.number}</h2>
    <hr />
    <h2>{state.data}</h2>
    Ключевые навыки:
    { 
      state.skills.map((el)=>(
        <h3>*{el}</h3>
      ))
    }
  </Container>
  )
}

const Container = styled.div`
  background: #fff;
`

export default ResumeAnyPerson
