import { Button, Card } from 'antd'
import { useNavigate } from 'react-router-dom'

import { IResume } from '../../Models/types'
import Style from './Resume.module.sass'

function Resume(Resume: IResume) {
    const nav = useNavigate()
    return (<>
        <Card style={{ marginBottom: 10, marginTop: 10 }}>
            <h2 className={Style.title}>{Resume.data}</h2>
            <p>100$ - 786$</p>
            <p>Опыт работы:{Resume.experience}</p>
            <Button type={"primary"} onClick={() => { nav(Resume._id) }}>Показать анкету</Button>
        </Card>
    </>)
}

export default Resume