import styled from 'styled-components'
import { FormType } from '../../types'

function Resume(Resume: FormType) {
    return (<>
        <Container>
            <h2>{Resume.data}</h2>
            <h3>{Resume.skills}</h3>
            <button>Показать анкету</button>
        </Container>
        <hr />
    </>)
}

const Container = styled.div`
    background: #fff;
`

export default Resume
