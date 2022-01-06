import Container from "../Container"
import Main, { Type } from "../Main"
import Header from './Header'
import Content from './Content'

const Employee = () => {
    return (<Main type={Type.employee}>
        <Container>
            <Header />
            <Content />
        </Container>
    </Main>)
}

export default Employee