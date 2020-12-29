import axios from "axios";
import React, { useEffect, useState } from "react"
import { Feed, Card, Grid, Button, Input } from 'semantic-ui-react'
import styled from "styled-components"
import logo from "../Img/ngaliema.jpg"
import { Link } from "react-router-dom"
import CustomScroll from 'react-customscroll';
import Loading from './loader'

const Title = styled.p`
  font-size: 23px;
  font-weight:300;
`;
const TitleTwo = styled.p`
  font-size: 18px;
  font-weight:100;
  color:#049DD9;
`;
const TitleThree = styled.p`
  font-size: 15px;
  font-weight:300;
  font-style:italic;
  font-family: "Mont Bold";
`;

const Div = styled.div`
margin:20px 20px;
  p{
    margin-left:10%;
  }
  h2{
    color: red;
    font-weight:300;
  }
  // h4{
  //   font-family: "Mont Bold";
  //   font-size: 23px;
  //   font-weight:300;
  // }
  .carte{
    width:90%;
    margin-left:20px;
    color:black;
  }
  .icone{
  color:red;
  }
  `;
export default function MenuRight() {
  const [listeHopital, setListeHopital] = useState([]);
  const [load, setLoad] = useState(false);
  const [search, setSearch] = useState('');
  const [datasearch, setDataSearch] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/Map`)
      .then((res) => {
        setListeHopital(res.data);
        setSearch(res.data);
        console.log("jettttttttttt",search);
        setLoad(true);
      })
      .catch((erreur) => console.log(erreur));
  }, []);

  const findAgence = (data) => {
    // setSearch(data)
    // console.log(nomagence);
    let motminuscule= data.toLowerCase();
    setDataSearch(data.filter(element => element.name.toLowerCase().match(motminuscule)))    }
  return (
  <>

    <Div>
 
    {load === false ? (
                    <Loading />
                  ) : (
                        <>
                        <Grid.Column mobile={16} tablet={16} computer={16}>
                            <Title>Liste des hôpitaux</Title>
                          </Grid.Column>
                          <Grid.Column mobile={16} tablet={16} computer={16}>
                          <Input type='text' placeholder='Rechercher un hôpital' fluid icon='search' value={search}
                    onChange={(data)=>findAgence(data)}/>
                            
                          </Grid.Column>
                        
                        
      <div style={{height: '400px', overflow: 'hidden',Color:'red',marginTop:'10px'}}>
      <CustomScroll>
        <div></div>
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
              <TitleTwo style={{marginLeft:'30%'}}>Hôpital {e.name}</TitleTwo>
                <TitleThree style={{marginLeft:'30%'}}>
                  <Feed.Date>              
                    {e.adress}
                  </Feed.Date><br/>
                  <Link to={"/DetailListe/" +e.id}>
                    <Button inverted color='red'  className="ButtonIcon" ><i class="fas fa-plus-circle" style={{fontSize:"1.5em"}}/></Button>
                  </Link>
                </TitleThree>
            </Grid.Column>
          </Grid>
        </Card.Content>
      )}
      </Card>
      <div></div>
      </CustomScroll>
      </div>
    </>

                  )}
      
    </Div>

  </>
  );
}
