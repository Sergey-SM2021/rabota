import { Button, Card } from 'antd'
import { useNavigate } from 'react-router-dom'

import { IResume } from '../../../Models/types'
import Style from './Style.module.sass'

function Resume(Resume: IResume) {
    const nav = useNavigate()
    return (<>
        <Card className={Style.card} >
            <h3 className={Style.title}>{Resume.data}</h3>
            <h3>Опыт работы:{Resume.experience}</h3>
            <Button type={"primary"} onClick={() => { nav(Resume._id) }}>Показать анкету</Button>
        </Card>
    </>)
}

export default Resume
