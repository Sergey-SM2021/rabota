import { Card, Spin } from 'antd'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useParams } from 'react-router-dom'

import { getResume } from '../redux/reducers/myResume'
import Style from './ResumeAnyPerson.module.sass'
import * as selector from '../redux/selectors'

const ResumeAnyPerson = () => {
  let isLoading = useSelector(selector.Resume.isLoading)
  const loc = useLocation()
  const dispatch = useDispatch()
  const { id } = useParams()
  useEffect(() => {
    dispatch(getResume(id!))
  }, [loc])
  let { name, surename, ...state } = useSelector(selector.Resume.getResume)
  return (<>
    {
      isLoading ? <Spin size='large' /> : <Card className={Style.card}>
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
    }
  </>)
}

export default ResumeAnyPerson
