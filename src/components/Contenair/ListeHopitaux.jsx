import axios from "axios";
import React, { useEffect, useState } from "react"
import { Feed, Card, Grid, Icon, Button, Pagination } from 'semantic-ui-react'
import styled from "styled-components"
import logo from "../Img/ngaliema.jpg"
import { Link } from "react-router-dom"
import Header2 from "../Nav/Header2"
import SimpleBarReact from "simplebar-react";
import "simplebar/src/simplebar.css";
import ReactScrollbar from 'react-scrollbar-js';


const Div = styled.div`
margin:20px 20px;
overflow-x:hidden;
p{
  margin-left:10%;
}
h2{
  font-family: "Mont Light";
}
h5{
  font-family: "Mont Bold";
}
.carte{
  width:90%;
  margin-left:20px;
  color:black;
}
.icone{
 color:red;
}
.pagination{
  margin-left:10%;
}
`;
export default function ListeHopitaux() {
  const [listeHopital, setListeHopital] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/Map`)
      .then((res) => {
        setListeHopital(res.data);
        console.log('meme',res.data[0].name);
      })
      .catch((erreur) => console.log(erreur));
  }, []);
 
  
  return (
  <>
    <Div>
      <h2>Liste des hôpitaux</h2>
      <ReactScrollbar>
      <Card className="carte">
        {
      listeHopital.map((e)=>
        <Card.Content>
          <Grid>
            <Grid.Column mobile={6} tablet={6} computer={6} className="DivBar">
              <Feed.Extra images>          
                <img src={logo} style={{height:"100px",width:"100px"}} />          
              </Feed.Extra>
            </Grid.Column>
            <Grid.Column mobile={10} tablet={10} computer={10}>
                <h4>{e.name}</h4>
                <p style={{marginLeft:'5%'}}>
                <Feed.Date>              
                  {e.adress}
                </Feed.Date>
            <Link to="/DetailListe">
              <Button inverted color='red'  className="ButtonIcon" >Plus d'infos</Button>
            </Link>
            </p>
            </Grid.Column>
          </Grid>
        </Card.Content>
      )}
      </Card>
      <Card className="carte">
        {
      listeHopital.map((e)=>
        <Card.Content>
          <Grid>
            <Grid.Column mobile={6} tablet={6} computer={6} className="DivBar">
              <Feed.Extra images>          
                <img src={logo} style={{height:"100px",width:"100px"}} />          
              </Feed.Extra>
            </Grid.Column>
            <Grid.Column mobile={10} tablet={10} computer={10}>
              <h4>{e.name}</h4>
              <p style={{marginLeft:'5%'}}>
                <Feed.Date>              
                  {e.adress}
                </Feed.Date>
            <Link to="/DetailListe">
              <Button inverted color='red'  className="ButtonIcon" >Plus d'infos</Button>
            </Link>
            </p>
            </Grid.Column>
          </Grid>
        </Card.Content>
      )}
      </Card>
      <Card className="carte">
        {
      listeHopital.map((e)=>
        <Card.Content>
          <Grid>
            <Grid.Column mobile={6} tablet={6} computer={6} className="DivBar">
              <Feed.Extra images>          
                <img src={logo} style={{height:"100px",width:"100px"}} />          
              </Feed.Extra>
            </Grid.Column>
            <Grid.Column mobile={10} tablet={10} computer={10}>
              <h4>{e.name}</h4>
              <p style={{marginLeft:'5%'}}>
                <Feed.Date>              
                  {e.adress}
                </Feed.Date>
            <Link to="/DetailListe">
              <Button inverted color='red'  className="ButtonIcon" >Plus d'infos</Button>
            </Link>
            </p>
            </Grid.Column>
          </Grid>
        </Card.Content>
      )}
      </Card>
      </ReactScrollbar>
    </Div>

  </>
  );
}
