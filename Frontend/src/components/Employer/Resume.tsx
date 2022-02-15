import { Button, Card } from 'antd'
import { useDispatch } from 'react-redux'

import { IResume } from '../../Models/types'
import { getResume } from '../../redux/reducers/myResume'
import Style from './Resume.module.sass'

function Resume(Resume: IResume) {
    const dispatch = useDispatch()
    const HandlerResumeSelected = () => {
        dispatch(getResume(Resume._id))
    }

    return (<>
        <Card style={{ marginBottom: 10, marginTop: 10 }}>
            <h2 className={Style.title}>{Resume.data}</h2>
            <p>100$ - 786$</p>
            <p>Опыт работы:{Resume.experience}</p>
            <Button type={"primary"} onClick={HandlerResumeSelected}>Показать анкету</Button>
        </Card>
    </>)
}

export default Resume