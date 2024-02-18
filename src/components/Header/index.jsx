import styled from "styled-components";

const HeaderContainer = styled.header`
    background-color: #EDEDED;
    padding: 16px 60px;
    .logo{

    }
`;

const Header = () => {
    return(
        <HeaderContainer>
            <div className="logo">
                <h1>LOGO</h1>
            </div>
            
        </HeaderContainer>
    );

}

export default Header;