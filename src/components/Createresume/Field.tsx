import { FC } from "react"
import styled from "styled-components"

interface FieldType {
    handleChange: any,
    values: string,
    name: string
}

const Field: FC<FieldType> = ({ handleChange, values, name }) => {
    return (<Container><Name>{name}</Name><Input><input onChange={handleChange} value={values} name={name}></input></Input></Container>)
}

let Container = styled.div`
    width: 450px;
    display: flex;
    justify-content: space-between;
    margin: 10px 0px;
`

let Name = styled.div`
    width: 100px;
`

let Input = styled.div`
    width: 100px;
`

export default Field