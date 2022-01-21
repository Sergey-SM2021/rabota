import { Button, Card } from 'antd'
import { useNavigate } from 'react-router-dom'

import { IResume } from '../../types'

function Resume(Resume: IResume) {
    const nav = useNavigate()
    return (<>
        <Card style={{ marginBottom: 10, marginTop: 10 }} title={Resume.data}>
            <h3>Опыт работы:{Resume.experience}</h3>
            <h3>{Resume.skills}</h3>
            <Button type={"primary"} onClick={() => { nav(Resume._id) }}>Показать анкету</Button>
        </Card>
    </>)
}

export default Resume
