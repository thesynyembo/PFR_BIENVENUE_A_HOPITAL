import React from 'react'
import { Grid, Feed, Icon, Image } from 'semantic-ui-react'
import styled from "styled-components"
import logos from '../Img/ngaliema.jpg'
import CustomScroll from 'react-customscroll';

const Div = styled.div`
.ContainerCarte {
    background:#fff;
    width: 50%;
    position: absolute;
    top: 90px;
    left:10%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    z-index: 3;
    border: 1px solid #05F2DB;
    height:calc(70vh - 50px);
  }
  .icone{
    color:#05F2DB;    
  }
  .title{
    background-color:#FF7777;
    width:100%;
    height:20%;
    margin-top:3%;
    padding-top:3%;
    padding-bottom:3%;
    text-align:center;
  }
  h5{
    font-family: "Mont Light";
  }
  p{
    font-family:"Mont Bold";
  }
  ol{
    display:flex;
    justify-content: flex-start; 
    list-style-type: none;   
  }
  .iconE{
    font-size:1.5em; 
    color:black; 
  }
  .iconE:hover{
    color:#05F2DB;
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
  fontWeight:"200",
  fontSize:"15px",
  position:"absolute",
  zIndex:"3",
  right:"4%",
  background:"rgba(255,255,255, 0.9)",
  marginTop:'4%',
  
}

export default function CardDetailHopital ({ hopital , visible }) {  
  return (
<Div>
  {
    (visible)?
    
    < div className="ContainerCarte">
      <CustomScroll>
      <Grid>
        <Grid.Column mobile={16} tablet={16} computer={16}> 
        <Grid columns={1} >
        <a href='' target=""><div style={myStyle}>X</div></a>                     
        <h2 className='title'>{hopital.name}</h2>   
        </Grid>       
        </Grid.Column>
        <Grid.Column mobile={16} tablet={6} computer={6}>      
              <Image src={logos} style={{textAlign:"center"}} />
            </Grid.Column>
            <Grid.Column mobile={16} tablet={10} computer={10}>
              <h5><Icon name='map marker alternate' className="icone"/>Adresse : {hopital.name}</h5>              
              <h5><Icon name='map outline' className="icone"/>Commune : {hopital.name}</h5>          
              <h5><Icon name='phone' className="icone"/>Gmail : {hopital.phone}</h5>
              <h5><Icon name='info' className="icone"/>Langue(s) :{hopital.email}</h5>
              <h5><Icon name='clock outline' className="icone"/>Heure : {hopital.email}</h5>
              <h5><Icon name='info' className="icone"/>{hopital.email}</h5>            
        </Grid.Column>
        <Grid.Column mobile={16} tablet={16} computer={16}>              
          <h2>Spécialité</h2>
          <h5><ul><li>{hopital.email}</li><li>{hopital.email}</li><li>{hopital.email}</li></ul></h5>
        </Grid.Column>
        <Grid.Column mobile={16} tablet={16} computer={16}>              
          <h2>Direction de l'hôpital</h2>
          <h5>Directeur: {hopital.email}</h5>
            <ol>
              <a href='' target="target"><li><Icon name='facebook f' className='iconE'/></li></a>
              <a href='' target="target"><li><Icon name='twitter' className='iconE'/> </li></a>
              <a href='' target="target"><li><Icon name='linkedin' className='iconE'/> </li></a>
            </ol>
        </Grid.Column>
      </Grid>
      </CustomScroll>
    </div>:""
  }
</Div>
  )
}

