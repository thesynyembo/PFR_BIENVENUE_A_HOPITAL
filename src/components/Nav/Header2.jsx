import React from 'react'
import logo from "../../components/Img/logoBAH2.png"
import { Image, Grid, Icon, Input} from 'semantic-ui-react'
import styled from "styled-components"
import { Link } from "react-router-dom"


const DivNavBar = styled.nav`
background-color:#FBF6F6;
height:20%;
  .icone{
    color:red;
  }
  .logo{
    margin:10px;
    width:30%;
    height:30%;
    margin-left:10%;
  }
`;

const Header = () => (
  <DivNavBar>
    <Grid>
      <Grid.Column mobile={16} tablet={16} computer={16}>
          <Link to="/"><i class="fad fa-angle-double-left icone" style={{fontSize:"3em"}}></i></Link>
        <p className="logo">
          <Image  src={logo} alt=''/>
        </p>
      </Grid.Column>
    </Grid>
  </DivNavBar>
)

export default Header
