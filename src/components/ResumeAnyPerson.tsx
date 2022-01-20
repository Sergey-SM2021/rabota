import { Card } from 'antd'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useParams } from 'react-router-dom'

import { getResume } from '../redux/myResume'
import * as selectors from '../redux/selectors'

const ResumeAnyPerson = () => {
  const loc = useLocation()
  const dispatch = useDispatch()
  const { id } = useParams()
  useEffect(() => {
    alert("loading...")
    dispatch(getResume(id!))
  }, [loc])
  let { name, surename, ...state } = useSelector(selectors.getResume)
  return (
    <Card>
      <h6>id : {state._id}</h6>
      <h2>{name}</h2>
      <h2>{surename}</h2>
      <h2>{state.number}</h2>
      <h2>{state.data}</h2>
      Ключевые навыки:
      {
        state.skills.map((el) => (
          <h3>*{el}</h3>
        ))
      }
    </Card>
  )
}

export default ResumeAnyPerson
