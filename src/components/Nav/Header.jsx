import React from 'react'
import logo from "../../components/Img/logoBAH2.png"
import { Image} from 'semantic-ui-react'
import styled from "styled-components"


const DivNavBar = styled.nav`
.logo{
  margin:10px;
  width:100%;
  height:100%;
}
`;

const Header = () => (
  <DivNavBar>
    <div className="logo"><Image src={logo}  /><br></br>
    </div>
  </DivNavBar>
)

export default Header
