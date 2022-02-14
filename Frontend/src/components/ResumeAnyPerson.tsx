import { Col, Row, Space, Spin } from 'antd'
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
      isLoading ? <Spin size='large' /> :
        <div className={Style.card}>
          <h6>id : {state._id}</h6>
          <div className={Style.contacInfo}>
            <div className={Style.ava} />
            <div className={Style.mainInfo}>
              <p className={Style.name}>{name} {surename}</p>
              <h2>{state.data}</h2>
            </div>
          </div>
          <div className={Style.about}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quos, odio incidunt quia
            saepe laboriosam beatae excepturi, velit molestiae nam distinctio!
            Repudiandae facilis eaque assumenda atque inventore provident omnis porro!
          </div>
          {
            state.skills.map((el) => (
              <div className={Style.skill}>*{el}</div >
            ))
          }
        </div>
    }
  </>)
}

export default ResumeAnyPerson
