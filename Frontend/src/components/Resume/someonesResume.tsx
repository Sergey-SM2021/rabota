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
      dispatch(getResume("621257df96c38414467a4877"))
      // #FIXME: hardcode resume id default
    }
  }, [loc])
  let { personalDate, gitHub, skills, _id } = useSelector(selector.Resume.getResume)
  return (<>
    {
      isLoading ? <Spin size='large' /> : <Card className={Style.card}>
        <h6>id : {_id}</h6>
        <div className={Style.header}>
          <div className={Style.ava} />
          <div className={Style.contactInfo}>
            <p className={Style.title}>{personalDate.name} {personalDate.surename}</p>
            <h2>{skills.profession}</h2>
            <p>Опыт работы:<Checkbox defaultChecked disabled className={Style.checkbox} /></p>
          </div>
        </div>
        <p>{skills.description}</p>
        <h2>Телефон: {personalDate.phone}</h2>
        <h2>Gmail: {personalDate.mail}</h2>
        <h2>Город: {personalDate.sity}</h2>
        <h2>Страна: {personalDate.country}</h2>
        {
          skills.technologyStack.map((el) => (
            <span className={Style.skill}>{el}</span>
          ))
        }
      </Card>
    }
  </>)
}

export default ResumeAnyPerson
