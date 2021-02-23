import axios from "axios";
import React, { useEffect, useState } from "react"
import { Grid, Image, Icon, GridColumn} from 'semantic-ui-react'
import styled from "styled-components"
import Header from '../Nav/Header1'
import Footer from '../Footer/Footer'
import Map from '../Cartes/MapBYOneHopital'
import { useParams} from "react-router-dom"


const Div = styled.div`
font-family: 'Merriweather', serif;
line-height:20px;
font-weight:300;
margin-top:5%;
margin-left:10%;
margin-right:10%;
  h5{
    font-family: "Mont Light";
  }
  .icone{
    color:#D90718;    
  }
  .title{
    background-color:#A6A6A6;
    color:#0511F2;
    width:100%;
    height:20%;  
    font-size: 24px;
    font-weight:bold;
    // font-weight:300;
  }
  .content{
    font-family: 'Open Sans', sans-serif !important;
    font-size: 20px;
    font-weight:100;
    padding: 5px;
  }
  .NewsContent{
    color:#D90718; 
    font-style:italic;
  }
  .direction{
    font-size: 15px;
    font-weight:150;
  }
`

export default function DetailListe(changementDisplay) {
  const [listeHopital, setListeHopital] = useState([]);
  const [listeSpecialite, setListeSpecialite] = useState([]);
  // let {id} = useParams();
  // const params = window.location.href;
  // const id=params.split('DetailListe/');
  // console.log("je suis params",id[1])
  let { id } = useParams();
  const params = { id };
  console.log(params.id);
  useEffect(() => {
    axios
      // .get(`http://localhost:5000/Map/`+id[1])
      .get(`http://localhost:5000/Map/${params.id}?`)
      .then((res) => {
        setListeHopital(res.data);
        console.log('DetailListe',res.data);
      })
      .catch((erreur) => console.log(erreur));

    axios
      .get(`http://localhost:5000/Map/Specialites/${params.id}?`)
      .then((res) => {
        setListeSpecialite(res.data);
        console.log('listeSpecialite thesiaaa',res.data);
      })
      .catch((erreur) => console.log(erreur));
  }, []);

return (
  <>
    <Header/>
    <Div>
  
    
      <Grid>
        <Grid.Column mobile={16} tablet={16} computer={16}> 
          <Grid columns={1} >   
          {
      listeHopital.map((e,index)=>          
          <p className='title' key={index}>{e.name}</p>
          )}
          </Grid>
        </Grid.Column>

        <Grid.Column mobile={16} tablet={11} computer={11}>
          {
      listeHopital.map((e)=>
              <Image src={e.images} style={{height: "300px", width:"100%",objectFit:"cover"}}/>
            )}

        </Grid.Column>

        <Grid.Column mobile={14} tablet={5} computer={5}> 
          <Map/>           
        </Grid.Column>

        <Grid.Column mobile={16} tablet={16} computer={16}>
          <Grid columns={1} >
              <p className='title'>Description & Localisation</p>
          </Grid>
          </Grid.Column>

        {
      listeHopital.map((e)=>
            <Grid.Column mobile={16} tablet={8} computer={8}>
              <p className='content'>
                {e.description} 
              </p>
            </Grid.Column>  
            
      )}

            {
      listeHopital.map((e)=>
      <Grid.Column mobile={16} tablet={8} computer={8}>
  <>      
              <p className='content'>
                <Icon name='map marker alternate' className="icone"/>
                  <span className='NewsContent'>Adresse :</span> {e.adress}
              </p> 
              <p className='content'><a href='tel:{e.phone}'>
                <Icon name='phone' className="icone"/></a>
                <span className='NewsContent'>Téléphone : </span>{e.phone} 
              </p>
              <p className='content'><a href='mailto:{e.name}'>
                <Icon name='envelope' className="icone"/></a>
                  <span className='NewsContent'>Gmail : </span>{e.email} 
              </p>
              <p className='content'>
                <Icon name='clock outline' className="icone"/>
                  <span className='NewsContent'>Heure : </span>{e.heure_de_service}
              </p>
              <p className='content'>
                <Icon name='info' className="icone"/>
                  <span className='NewsContent'>Langue(s) : </span>{e.email}
              </p>

              </>
          </Grid.Column>
              )}

<Grid.Column mobile={16} tablet={16} computer={16}>
          <Grid columns={1} >
            <p className='title'>Spécialités</p>
          </Grid> 
          <Grid columns={1}>
            <Grid.Column> 
              {
                listeSpecialite.map((e)=>
                    <ul className='content'>
                      <li>{e.nom}</li>
                    </ul>
                    )}
            </Grid.Column>
          </Grid>
          <Grid columns={1} >
            <p className='title'>Direction de l'hôpital</p>
          </Grid>
          <Grid columns={1}>
            <Grid.Column> 
              {
                listeHopital.map((e)=>
                <>
                  <p className='content'>
                    <span>Directeur : </span>{e.directeur}
                  </p>
                </>
                    )}
            </Grid.Column>
          </Grid>
          </Grid.Column>
 
        {/* <ModalRes/> */}

      </Grid>

    </Div><br/><br/><br/><br/><br/>
    <Footer/>

  </>
  )
}
