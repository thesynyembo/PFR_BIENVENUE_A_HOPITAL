import React from 'react'
import {Grid, Icon} from 'semantic-ui-react'
import styled from "styled-components"

const DivColumns = styled.div`

  ul{
    display:flex;
    justify-content: flex-start;
    margin-left:50%; 
    list-style-type: none;   
  }
  .icone{
    font-size:2em;
    padding-top:50%;
    color:#05F2DB;    
  }
  h6{
    margin-left:15%;
  }
`

export default function Footer (){

  return (
    <>
      <Grid.Column mobile={16} tablet={16} computer={16} style={{background:'silver',borderTopLeftRadius: '15px 15px',borderTopRightRadius: '15px 15px',height:'100px'}}>
        <DivColumns>
          <Grid columns={2}>
            <Grid.Column>
              <h6>A propos</h6>
              <h6>Copyright 2020 
    Créer par Kinshasa Digital Academy</h6>
            </Grid.Column>
            <Grid.Column> 
              <ul>
                <a href='' target="target"><li><Icon name='facebook f' className='icone'/></li></a>
                <a href='' target="target"><li><Icon name='twitter' className='icone'/> </li></a>
                <a href='' target="target"><li><Icon name='linkedin' className='icone'/> </li></a>
              </ul>
            </Grid.Column>
          </Grid>
        </DivColumns>
      </Grid.Column>
    

    </>
  )
}