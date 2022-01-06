import styled from "styled-components"
import Employee from '../assets/img/croppedImg_410711113.jpeg'
import Employer from '../assets/img/8095794-1592926814.jpg'

export enum Type { "employer", "employee" }

interface mainType {
    type:Type
}

let Main = styled.div<mainType>`
    background-image: ${(props) => (props.type === Type.employer ? `url(${Employee})` : `url(${Employer})`)};
    width: 100%;
    height: 95vh;
    background-size: cover;
`

export default Main