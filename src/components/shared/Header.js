import styled from "styled-components"

export default function Header(){
    return (
        <HeaderGeneral>
            <p class= "textHeader">TrackIt</p>
        </HeaderGeneral>
    )
}

const HeaderGeneral = styled.div`
    width: 100%;
    min-height: 70px;
    background-color: #126BA5;
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Playball';
    font-weight: 400;
    font-size: 40px;
    color: #FFFFFF;
    padding: 10px;
  `