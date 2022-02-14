import { Button, Card } from 'antd'
import { useDispatch } from 'react-redux'

import { IResume } from '../../../Models/types'
import { getResume } from '../../../redux/reducers/myResume'
import Style from './Style.module.sass'

function Resume(Resume: IResume) {
    const dispatch = useDispatch()
    const HandlerResumeQuery = () => {
        dispatch(getResume(Resume._id))
    }

    return (<>
        <Card className={Style.card} >
            <h3 className={Style.title}>{Resume.data}</h3>
            <h3>Опыт работы:{Resume.experience}</h3>
            <Button type={"primary"} onClick={HandlerResumeQuery}>Показать анкету</Button>
        </Card>
    </>)
}

export default Resume
