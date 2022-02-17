import { Card, Checkbox, Spin } from 'antd'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useParams } from 'react-router-dom'

import { getResume } from '../../redux/reducers/myResume'
import * as selector from '../../redux/selectors'
import Style from './someonesResume.module.sass'

const ResumeAnyPerson = () => {
  let isLoading = useSelector(selector.Resume.isLoading)
  const loc = useLocation()
  const dispatch = useDispatch()
  const { id } = useParams()
  useEffect(() => {
    if (id) {
      dispatch(getResume(id))
    } else {
      dispatch(getResume("61ea5a7b581bb61f0c33e9d1"))
    }
  }, [loc])
  let { name, surename, profession, ...state } = useSelector(selector.Resume.getResume)
  return (<>
    {
      isLoading ? <Spin size='large' /> : <Card className={Style.card}>
        <h6>id : {state._id}</h6>
        <div className={Style.header}>
          <div className={Style.ava} />
          <div className={Style.contactInfo}>
            <p className={Style.title}>{name} {surename}</p>
            <h2>{profession}</h2>
            <p>Опыт работы:<Checkbox defaultChecked disabled className={Style.checkbox} /></p>
          </div>
        </div>
        <p>{state.description}</p>
        <h2>Телефон: {state.number}</h2>
        <h2>Gmail: {state.gmail}</h2>
        <h2>Город: {state.sity}</h2>
        <h2>Страна: {state.country}</h2>
        {
          state.skills.map((el) => (
            <span className={Style.skill}>{el}</span>
          ))
        }
      </Card>
    }
  </>)
}

export default ResumeAnyPerson
