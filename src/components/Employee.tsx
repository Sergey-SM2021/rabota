import Container from "./Container"
import Main, { Type } from "./Main"

const Employee = () => {
    return (<Main type={Type.employee}><Container>Employee</Container></Main>)
}

export default Employee