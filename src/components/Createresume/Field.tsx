import { FC } from "react"
import styled from "styled-components"

interface FieldType {
    handleChange: any,
    values: string,
    name: string,
    error: any,
    touched: any
}

const Field: FC<FieldType> = ({ handleChange, values, name, error, touched }) => {
    console.log(error)
    return (<Container>
        <Name>{name}</Name>
        <Input>
            <input width={100} onChange={handleChange} value={values} name={name}></input>
            {touched?<Error>{error.name}</Error>:null}
        </Input>
    </Container>)
}

let Container = styled.div`
    width: 450px;
    display: flex;
    justify-content: space-between;
    margin: 10px 0px;
`

const Error = styled.div`
    color: red;
    height: 20px;
`

let Name = styled.div`
    width: 100px;
`

let Input = styled.div`
    width: 200px;
`

export default Field