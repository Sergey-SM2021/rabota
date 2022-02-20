import { Button, Card } from 'antd'
import { useDispatch } from 'react-redux'

import { TIResume } from '../../Models/Models'
import { getResume } from '../../redux/reducers/myResume'
import Style from './Resume.module.sass'

function Resume(Resume: TIResume) {
    const dispatch = useDispatch()
    const HandlerResumeSelected = () => {
        dispatch(getResume(Resume._id))
    }

    return (<>
        <Card style={{ marginBottom: 10, marginTop: 10 }}>
            <h2 className={Style.title}>{Resume.personalDate.name}</h2>
            <p>100$ - 786$</p>
            <p>Опыт работы:{Resume.skills.experience}</p>
            <Button type={"primary"} onClick={HandlerResumeSelected}>Показать анкету</Button>
        </Card>
    </>)
}

export default Resume