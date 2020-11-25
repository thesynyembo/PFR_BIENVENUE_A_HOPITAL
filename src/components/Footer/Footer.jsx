import React from 'react'
import {Grid, Icon} from 'semantic-ui-react'
import styled from "styled-components"

const DivColumns = styled.p`
  ul{
    display:flex;
    justify-content: flex-start;
    margin-left:40%;
  }
  p{
    margin-left:5%;
  }

`

export default function Footer (){

  return (
    <>
      <Grid.Column mobile={16} tablet={16} computer={16} style={{background:'silver'}}>
    <DivColumns>
        <Grid columns={2}>

          <Grid.Column>
                <p>jhgfvkg</p>
                <p>jhgfvkg</p>
          </Grid.Column>
          <Grid.Column> 
            <ul>
              <li><Icon name='facebook f' /></li>
              <li><Icon name='twitter' /> </li>
              <li><Icon name='linkedin' /> </li>
            </ul>
          </Grid.Column>
        </Grid>
        </DivColumns>

      </Grid.Column>
    

    </>
  )
}