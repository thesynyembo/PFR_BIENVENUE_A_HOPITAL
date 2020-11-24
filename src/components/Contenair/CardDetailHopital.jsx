import React from 'react'
import { Grid, Feed, Icon } from 'semantic-ui-react'
import styled from "styled-components"
import logos from '../Img/hopital.png'

const Div = styled.div`
.ContainerCarte {
    width: 50%;
    position: absolute;
    top: 50px;
    left:10%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    z-index: 3;
    border: 1px solid #FFF;
    .descrip{
      text-align:justify;
    }

  }
`;
const DivB = styled.p`
    width:100%;
    border-bottom-style: dotted;
`;
const myStyle={
  height:"30px",
  width:"30px",
  border:"1px solid #cccccc",
  borderRadius:"50px",
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
  color:"red",
  cursor:"pointer",
  fontWeight:"300",
  fontSize:"15px",
  position:"absolute",
  top:"2px",
  zIndex:"3",
  right:"0",
  background:"rgba(255,255,255, 0.9)",
  
}

export default function CardDetailHopital ({ hopital , visible }) {  
  return (
<Div>
  {
    (visible)?
    
    <div className="ContainerCarte">
      <Grid columns={1}>
        <Grid.Row >
          <Grid.Column style={{backgroundColor:"#FBF6F6"}}><br/><br/>
            <img src={logos} style={{textAlign:"center"}} /><br></br><br/>
              <h6 className="descrip">Hôpital Géolocalisé afin d'aider la population dans la Santé.</h6><br/>
              <DivB/>
              <Feed>
                <Feed.Event>
                  <Feed.Content>
                    <h5>{hopital.name}</h5> 
                    <h6 className="descrip">Hôpital Géolocalisé afin d'aider la population dans la Santé.</h6><br/>
                  </Feed.Content>
                </Feed.Event>
              </Feed>
              <DivB/>
              <Feed.Content>
                <h5 className="descrip"><Icon name='map marker alternate'/>Adresse:{hopital.adress}</h5>&nbsp;
              </Feed.Content>
                <h5 className="descrip"><Icon name='info' />Langues parlées:{hopital.adress}</h5>&nbsp;
                <h5 className="descrip"><Icon name='phone' />Adresse:{hopital.adress} {visible.name}</h5>&nbsp;  
            </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>:""
  }
</Div>
  )
}

