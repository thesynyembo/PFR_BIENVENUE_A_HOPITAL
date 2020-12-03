import React, {useState} from 'react'
import { Grid, Feed, Icon, Image } from 'semantic-ui-react'
import styled from "styled-components"
import logos from '../Img/ngaliema.jpg'
import CustomScroll from 'react-customscroll';

const Div = styled.div`
padding-left:20%;
padding-right:20%;
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
    color:#D90718;    
  }
  .title{
    background-color:#009fe3;
    width:100%;
    height:20%;
    margin-top:3%;
    padding-top:3%;
    padding-bottom:3%;
    text-align:center;
  }
  h5{
    font-family: ;
  }
  h2{
    font-family:"Mont Bold";
    color:#D90718;
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
    color:#9D9D9C; 
  }
  .iconE:hover{
    color:#D90718;
  }
  .annuler{
    cursor:pointer;
    position:absolute;
    z--index:3;
    right:4%;
    margin-top:4%;
    font-size:2em;
    color:#fff;
  }
  .annuler:hover{
    color:#D90718;
  }
  span{
    color:#9D9D9C;
    font-family:"Mont Bold";
  }
  h3{
    color:#9D9D9C;
    font-family:"Mont Bold";
    padding-left:4%;
  }
`;
const DivB = styled.p`
    width:100%;
    border-bottom-style: dotted;
`;

export default function CardDetailHopital ({ hopital , visible, changementDisplay }) { 

  return (
<Div>
  {
    (visible)?
    
    < div className="ContainerCarte">
      <CustomScroll>
      <Grid>
        <Grid.Column mobile={16} tablet={16} computer={16}> 
          <Grid columns={1} >        
            <div className='annuler' onClick={()=>changementDisplay()}><i class="far fa-window-close"></i></div>
            <h2 className='title'>{hopital.name}</h2>   
          </Grid>       
        </Grid.Column>
        <Grid.Column mobile={16} tablet={6} computer={6}>      
          <Image src={logos} style={{textAlign:"center"}} />
        </Grid.Column>
        <Grid.Column mobile={16} tablet={10} computer={10}>
          <h5><Icon name='map marker alternate' className="icone"/><span>Adresse</span> : {hopital.name}</h5>              
          <h5><Icon name='map outline' className="icone"/><span>Commune</span> : {hopital.name}</h5>          
          <h5><Icon name='phone' className="icone"/><span>Téléphone</span> : {hopital.phone}</h5>
          <h5><Icon name='info' className="icone"/><span>Langue(s)</span> :{hopital.email}</h5>
          <h5><Icon name='clock outline' className="icone"/><span>Heure</span> : {hopital.email}</h5>
          <h5><Icon name='info' className="icone"/><span>Gmail</span> : {hopital.email}</h5>            
        </Grid.Column>
        <Grid.Column mobile={16} tablet={16} computer={16}>              
          <h3>Spécialité</h3>
          <h5><ul><li>{hopital.email}</li><li>{hopital.email}</li><li>{hopital.email}</li></ul></h5>
        </Grid.Column>
        <Grid.Column mobile={16} tablet={16} computer={16}>              
          <h3>Direction de l'hôpital</h3>
          <h5><ol><li><span>Directeur</span> : {hopital.email}</li></ol></h5>
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

