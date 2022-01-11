import styled from "styled-components"

interface mainType {
    img: string
}

let Main = styled.div<mainType>`
    box-sizing: border-box;
    padding: 1px;
    background-image: ${(props) => (`url(${props.img})`)};
    width: 100%;
    height: 95vh;
    background-size: cover;
`

export default Main