import Container from "../Container"
import Main from "../Main"
import Header from './Header'
import Content from './Content'
import employee from '../../assets/img/croppedImg_410711113.jpeg'

const Employee = () => {
    return (<Main img={employee}>
        <Container>
            <Header />
            <Content />
        </Container>
    </Main>)
}

export default Employee