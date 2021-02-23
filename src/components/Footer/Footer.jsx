import React from "react"
import styled from "styled-components"
import { Grid, Icon} from 'semantic-ui-react'

const Div = styled.div`
  background-color:#A6A6A6 !important;
  height: 30%;
  // padding-bottom: 10%;
  color: white;
  padding-left:2%;
  font-size: 10px;
  font-weight:100;
  font-style:italic;
  .logo{
    width:50%;
    height:50%;
  }
`;
const Footer = () => (
  <Div>
    <Grid>
    <Grid.Column mobile={10} tablet={10} computer={10}>
      Copyright ©2020 Thesy NYEMBO <br/> 
      - Dev Web et Mobile
    </Grid.Column>
    {/* <Grid.Column mobile={6} tablet={6} computer={6}>       
      <img className='logo' src={logo}/>
    </Grid.Column> */}
    </Grid>

  </Div>
);

export default Footer