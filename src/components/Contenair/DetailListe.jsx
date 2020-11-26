import axios from "axios";
import React, { useEffect, useState } from "react"
import { Grid, Image, Icon, GridColumn} from 'semantic-ui-react'
import logo from '../Img/ngaliema.jpg'
import styled from "styled-components"
import Header from '../Nav/Header1'
import Footer from '../Footer/Footer'
import Map from '../Cartes/MapBYOneHopital'

const Div = styled.div`
margin-top:5%;
margin-left:10%;
margin-right:10%;
  h5{
    font-family: "Mont Light";
  }
  p{
    font-family:"Mont Bold";
  }
  .icone{
    color:#05F2DB;    
  }
  .title{
    background-color:#FF7777;
    width:100%;
    height:20%;
  }
`

export default function DetailListe() {
  const [listeHopital, setListeHopital] = useState([]);
  const [listeSpecialite, setListeSpecialite] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/Map`)
      .then((res) => {
        setListeHopital(res.data);
        console.log('DetailListe',res.data);
      })
      .catch((erreur) => console.log(erreur));
  }, []);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/Specialite`)
      .then((res) => {
        setListeSpecialite(res.data);
        console.log('listeSpecialite',res.data);
      })
      .catch((erreur) => console.log(erreur));
  }, []);

return (
  <>
    <Header/>
    <Div>
  {
    listeHopital.map((e)=>
    
      <Grid>
        <Grid.Column mobile={16} tablet={16} computer={16}> 
          <Grid columns={1} >             
          <h2 className='title'>{e.name}</h2>
          </Grid>
        </Grid.Column>
        <Grid.Column mobile={16} tablet={13} computer={13}>
          <Grid columns={2}>
            <Grid.Column>        
              <Image src={logo} style={{ height: "150px", width:"350px"}}/>
            </Grid.Column>
            <Grid.Column>
              <h5><Icon name='map marker alternate' className="icone"/>Adresse : {e.name}</h5>              
              <h5><Icon name='map outline' className="icone"/>Commune : {e.name}</h5>          
              <h5><Icon name='phone' className="icone"/>Gmail : {e.phone}</h5>
              <h5><Icon name='info' className="icone"/>Langue(s) :{e.email}</h5>
              <h5><Icon name='clock outline' className="icone"/>Heure : {e.email}</h5>
              <h5><Icon name='info' className="icone"/>{e.email}</h5> 
            </Grid.Column>
          </Grid>
        </Grid.Column>
        <Grid.Column mobile={10} tablet={3} computer={3}> 
          <Map/>           
        </Grid.Column>
        <Grid.Column mobile={16} tablet={16} computer={16}> 
        <Grid columns={1} >
            <h2 className='title'>Spécialités</h2>
        </Grid>
        <Grid columns={1}>
          <Grid.Column> 
              {
                listeSpecialite.map((e)=>
                  <h5><ul><li>{e.nom}</li></ul></h5>
                  )}
          </Grid.Column>
        </Grid>
        <Grid columns={1} >
            <h2 className='title'>Direction de l'hôpital</h2>
        </Grid>
        <Grid columns={1}>
          <Grid.Column> 
              {
                listeSpecialite.map((e)=>
                <>
                  <h5>Directeur:{e.nom}</h5>
                  <h5>Président du conseil de surveillance:{e.nom}</h5>
                  <h5>{e.nom}</h5>
                </>
                  )}
          </Grid.Column>
        </Grid>
        </Grid.Column>
      </Grid>
    )}
        </Div><br/><br/><br/><br/><br/>
        <Footer/>

  </>
  )
}
