import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { setResume } from '../redux/myResume'

import { getResume } from '../redux/selectors'

const ResumeAnyPerson = () => {
  const loc = useLocation()
  const dispatch = useDispatch()
  useEffect(() => {
    alert("loading...")
    dispatch(setResume({
      _id: "ghbd9hher78w78wee8932",
      data: "Php developer",
      experience: "есть",
      name: "Александр",
      number: "+79168518338",
      skills: ["Java", "Php", "mySQL"],
      surename: "Ткачёв"
    }))
  }, [loc])
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
      state.skills.map((el) => (
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
