import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { getResume } from '../redux/selectors'

const ResumeAnyPerson = () => {
    let state = useSelector(getResume)
    return (<Container>
        {state._id}
    </Container>
    )
}

const Container = styled.div`
    background: #fff;
`

export default ResumeAnyPerson
