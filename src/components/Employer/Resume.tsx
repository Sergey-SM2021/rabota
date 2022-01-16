import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { FormType } from '../../types'

function Resume(Resume: FormType) {
    let location = useLocation().pathname
    useEffect(()=>{},)
    return (<>
        <Container>
            <h2>{Resume.data}</h2>
            <h3>{Resume.skills}</h3>
            <button onClick={()=>{console.log(location)}}>Показать анкету</button>
        </Container>
        <hr />
    </>)
}

const Container = styled.div`
    background: #fff; 
`

export default Resume
