import styled from "styled-components";
import {useNavigate} from 'react-router-dom'

const Header = () => {
    let nav =useNavigate()
    return (<HeaderStyle>
        <div>logo</div>
        <Button onClick={()=>{nav("/createresume")}}>Создать резюме</Button>
    </HeaderStyle>)
}

let HeaderStyle = styled.div`
    margin: 43px 0px;
    color: #fff;
    display: flex;
    justify-content: space-between;
`

let Button = styled.button`
    height: 45px;
    background: none;
    border-radius: 25px;
    border: solid 1px #a3daa5;
    color: #a3daa5;
`

export default Header