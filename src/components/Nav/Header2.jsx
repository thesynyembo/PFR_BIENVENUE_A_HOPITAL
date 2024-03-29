import React from 'react'
import logo from "../../components/Img/logoBAH2.png"
import { Image, Grid} from 'semantic-ui-react'
import styled from "styled-components"


const DivNavBar = styled.nav`
background-color:#FBF6F6;
margin-top:1%;
width:100%;
height:10%;
  .icone{
    color:red;
  }
  .logo{
    margin:10px;
    width:10%;
    height:10%;
    margin-left:5%;
  }
  P{
    margin-left:18%;
  }
`;

const Header = () => (
  <DivNavBar>
    <Grid>
      <Grid.Column mobile={16} tablet={16} computer={16}>
        <p className="logo">
          <Image  src={logo} alt=''/> 
        </p>
        {/* <p className='P'>Plus proche de vous</p> */}
      </Grid.Column>
    </Grid>
  </DivNavBar>
)

export default Header
