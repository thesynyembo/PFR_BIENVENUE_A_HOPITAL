import axios from "axios";
import React, { useEffect, useState } from "react"
import { Feed, Card, Grid, Icon, Button, Pagination } from 'semantic-ui-react'
import styled from "styled-components"
import logo from "../Img/ngaliema.jpg"
import { Link } from "react-router-dom"
import CustomScroll from 'react-customscroll';


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
      <div style={{height: '450px', overflow: 'hidden',Color:'red'}}>
      <CustomScroll>
      <Card className="carte">
        {
      listeHopital.map((e)=>
        <Card.Content>
          <Grid>
            <Grid.Column mobile={5} tablet={5} computer={5} className="DivBar">
              <Feed.Extra images>          
                <img src={logo} style={{height:"100px",width:"100px"}} />          
              </Feed.Extra>
            </Grid.Column>
            <Grid.Column mobile={11} tablet={11} computer={11}>
                <h4 style={{marginLeft:'30%'}}>{e.name}</h4>
                <p style={{marginLeft:'30%'}}>
                <Feed.Date>              
                  {e.adress}
                </Feed.Date>
            <Link to="/DetailListe">
              <Button inverted color='red'  className="ButtonIcon" ><i class="fas fa-plus-circle" style={{fontSize:"1.5em"}}/></Button>
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
            <Grid.Column mobile={5} tablet={5} computer={5} className="DivBar">
              <Feed.Extra images>          
                <img src={logo} style={{height:"100px",width:"100px"}} />          
              </Feed.Extra>
            </Grid.Column>
            <Grid.Column mobile={11} tablet={11} computer={11}>
                <h4 style={{marginLeft:'30%'}}>{e.name}</h4>
                <p style={{marginLeft:'30%'}}>
                <Feed.Date>              
                  {e.adress}
                </Feed.Date>
            <Link to="/DetailListe">
              <Button inverted color='red'  className="ButtonIcon" ><i class="fas fa-plus-circle" style={{fontSize:"1.5em"}}/></Button>
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
            <Grid.Column mobile={5} tablet={5} computer={5} className="DivBar">
              <Feed.Extra images>          
                <img src={logo} style={{height:"100px",width:"100px"}} />          
              </Feed.Extra>
            </Grid.Column>
            <Grid.Column mobile={11} tablet={11} computer={11}>
                <h4 style={{marginLeft:'30%'}}>{e.name}</h4>
                <p style={{marginLeft:'30%'}}>
                <Feed.Date>              
                  {e.adress}
                </Feed.Date>
            <Link to="/DetailListe">
              <Button inverted color='red'  className="ButtonIcon" ><i class="fas fa-plus-circle" style={{fontSize:"1.5em"}}/></Button>
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
            <Grid.Column mobile={5} tablet={5} computer={5} className="DivBar">
              <Feed.Extra images>          
                <img src={logo} style={{height:"100px",width:"100px"}} />          
              </Feed.Extra>
            </Grid.Column>
            <Grid.Column mobile={11} tablet={11} computer={11}>
                <h4 style={{marginLeft:'30%'}}>{e.name}</h4>
                <p style={{marginLeft:'30%'}}>
                <Feed.Date>              
                  {e.adress}
                </Feed.Date>
            <Link to="/DetailListe">
              <Button inverted color='red'  className="ButtonIcon" ><i class="fas fa-plus-circle" style={{fontSize:"1.5em"}}/></Button>
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
            <Grid.Column mobile={5} tablet={5} computer={5} className="DivBar">
              <Feed.Extra images>          
                <img src={logo} style={{height:"100px",width:"100px"}} />          
              </Feed.Extra>
            </Grid.Column>
            <Grid.Column mobile={11} tablet={11} computer={11}>
                <h4 style={{marginLeft:'30%'}}>{e.name}</h4>
                <p style={{marginLeft:'30%'}}>
                <Feed.Date>              
                  {e.adress}
                </Feed.Date>
            <Link to="/DetailListe">
              <Button inverted color='red'  className="ButtonIcon" ><i class="fas fa-plus-circle" style={{fontSize:"1.5em"}}/></Button>
            </Link>
            </p>
            </Grid.Column>
          </Grid>
        </Card.Content>
      )}
      </Card>
      </CustomScroll>
      </div>
    </Div>

  </>
  );
}
