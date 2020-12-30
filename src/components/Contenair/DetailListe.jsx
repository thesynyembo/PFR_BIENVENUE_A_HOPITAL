import axios from "axios";
import React, { useEffect, useState } from "react"
import { Grid, Image, Icon, GridColumn} from 'semantic-ui-react'
import logo from '../Img/ngaliema.jpg'
import styled from "styled-components"
import Header from '../Nav/Header1'
import Footer from '../Footer/Footer'
import Map from '../Cartes/MapBYOneHopital'
import {  useParams} from "react-router-dom";

const Title = styled.p`
  font-size: 23px;
  font-weight:300;
  
`;
const Div = styled.div`
margin-top:5%;
margin-left:10%;
margin-right:10%;
  h5{
    font-family: "Mont Light";
  }
//  p{
//     font-family:"Mont Bold";
//   } 
  .icone{
    color:#E60719;    
  }
  .title{
    background-color:#E6E6E6;
    width:100%;
    height:20%;  
    font-size: 23px;
    font-weight:300;
  }
  .adress{
    font-size: 15px;
    font-weight:150;
  }
  .NewAdress{
    color:#E60719; 
    font-style:italic;
  }
  .direction{
    font-size: 15px;
    font-weight:150;
  }
`

export default function DetailListe() {
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
          <Grid columns={2}>
            <Grid.Column>        
              <Image src={logo} style={{ height: "150px", width:"350px"}}/>
            </Grid.Column>
            <Grid.Column>
            {
    listeHopital.map((e)=>
    <>          
              <p className='adress'><Icon name='map marker alternate' className="icone"/><span className='NewAdress'>Adresse :</span> {e.name}</p>              
              <p className='adress'><Icon name='map outline' className="icone"/><span className='NewAdress'>Commune : </span>{e.name}</p>          
              <p className='adress'><Icon name='phone' className="icone"/><span className='NewAdress'>Gmail : </span> {e.phone}</p>
              <p className='adress'><Icon name='info' className="icone"/><span className='NewAdress'>Langue(s) : </span>{e.email}</p>
              <p className='adress'><Icon name='clock outline' className="icone"/><span className='NewAdress'>Heure : </span>{e.email}</p>
              <p className='adress'><Icon name='info' className="icone"/><span className='NewAdress'>fffff : </span>{e.email}</p> 
              </>
              )}
            </Grid.Column>
          </Grid>
        </Grid.Column>
        <Grid.Column mobile={10} tablet={5} computer={5}> 
          <Map/>           
        </Grid.Column>
        <Grid.Column mobile={16} tablet={16} computer={16}> 
          <Grid columns={1} >
            <p className='title'>Spécialités</p>
          </Grid> 
          <Grid columns={1}>
            <Grid.Column> 
              {
                listeSpecialite.map((e)=>
                    <ul className='adress'>
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
                listeSpecialite.map((e)=>
                <>
                  <p className='adress'><span>Directeur : </span>{e.nom}</p>
                  <p className='adress'><span>Président du conseil de surveillance : </span>{e.nom}</p>
                  <p className='adress'>{e.nom}</p>
                </>
                    )}
            </Grid.Column>
          </Grid>
        </Grid.Column>
      </Grid>

        </Div><br/><br/><br/><br/><br/>
        {/* <Footer/> */}

  </>
  )
}
