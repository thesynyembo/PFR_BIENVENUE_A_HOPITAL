import React from 'react'
import {Grid, Icon} from 'semantic-ui-react'
import styled from "styled-components"

const DivColumns = styled.p`
  padding-left:50px;
  ul{
    display:flex;
    justify-content: flex-start;
  }


`

export default function Footer (){

  return (
    <>
      <Grid.Column mobile={16} tablet={16} computer={16}>
        <DivColumns>
              <ul>
                <li><Icon name='facebook f' /></li>
                <li><Icon name='twitter' /> </li>
                <li><Icon name='linkedin' /> </li>
              </ul>
              </DivColumns>
      </Grid.Column>
    </>
  )
}