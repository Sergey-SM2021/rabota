import { Card } from 'antd'
import { useNavigate } from 'react-router-dom'

import { IResume } from '../../types'

function Resume(Resume: IResume) {
    const nav = useNavigate()
    return (<>
        <Card title={Resume.data}>
            <h3>Опыт работы:{Resume.experience}</h3>
            <h3>{Resume.skills}</h3>
            <button onClick={() => { nav(Resume._id) }}>Показать анкету</button>
        </Card>
    </>)
}

export default Resume
