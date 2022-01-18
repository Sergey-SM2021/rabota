import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import { IResume } from '../../types'

function Resume(Resume: IResume) {
    const nav = useNavigate()
    return (<>
        <Container>
            <h3>Опыт работы:{Resume.experience}</h3>
            <h2>{Resume.data}</h2>
            <h3>{Resume.skills}</h3>
            <button onClick={()=>{nav(Resume._id)}}>Показать анкету</button>
        </Container>
        <hr />
    </>)
}

const Container = styled.div`
    background: #fff; 
`

export default Resume
