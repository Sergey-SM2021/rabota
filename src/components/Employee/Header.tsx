import styled from "styled-components";

const Header = () => {
    return (<HeaderStyle>
        <div>logo</div>
        <div>Создать резюме</div>
    </HeaderStyle>)
}

let HeaderStyle = styled.div`
    color: #fff;
    display: flex;
    justify-content: space-between;
`

export default Header