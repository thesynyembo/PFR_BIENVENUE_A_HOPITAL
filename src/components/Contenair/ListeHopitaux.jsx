import axios from "axios";
import React, { useEffect, useState } from "react"
import { Feed, Card, Grid, Button, Input } from 'semantic-ui-react'
import styled from "styled-components"
import { Link, useParams } from "react-router-dom"
import CustomScroll from 'react-customscroll'
import Loading from './loader'

const Title = styled.p`
  font-size: 23px;
  font-weight:300;
  margin-left: 5% !important;
`;
const TitleTwo = styled.p`
  font-size: 18px;
  font-weight:100;
  color:#049DD9;
`;
const TitleThree = styled.div`
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
    color: #D90718;
    font-weight:300;
  }

// Blog Carte

  .carte{
    width:90%;
    min-height: 200px !important;
    margin-left:20px;
    color:black;
  }

  button.ui.red.inverted.button.ButtonIcon {
    font-weight: bold;
    text-transform: uppercase;
    transition: transform 500ms $ease-in-out-back, background-position 800ms $ease-in-out-back, box-shadow 500ms linear;
  }
  button.ui.red.inverted.button.ButtonIcon:hover{
      transform: scale(1.1);
      background-position: -60px;
      box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  }
  

.icone{
  color: #D90718;

  }


  // scroll

  .react-customscroll-scrollbar {
    background-color:#D90718!important;
  }
  .react-customscroll-scrollbar-area {
    background-color: rgb(174, 174, 174) !important;
  }
  

  `;
export default function MenuRight() {
  const [listeHopital, setListeHopital] = useState([])
  const [recherche, setRecherche] = useState([])
  const [load, setLoad] = useState(false)
  const [search, setSearch] = useState([])
  const [dataSearch, setDataSearch] = useState('')
  const [searchTerm, setSearchTerm] = useState("")
  const handleChange = event => {
    setSearchTerm(event.target.value);
  };


  const results = !searchTerm
  ? listeHopital
  : listeHopital.filter(person =>
      person.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
    );

    let { id } = useParams();
    const params = { id };
    console.log(params.id);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/Map`)
      .then((res) => {
        setListeHopital(res.data)
        // setRecherche(res.data);
        setLoad(true);
        // setSearch(res.data);
        console.log('je suis search',res.data)
      })
      .catch((erreur) => console.log(erreur))
  }, []);
  

const rechercheHopital=(e)=>{
  setDataSearch(e.target.value.toLowerCase());  
  let marecherche = listeHopital.filter(hopital=> hopital.name.toLowerCase().includes(dataSearch.toLowerCase()))
  let thisSearch = listeHopital.filter(searchHopital=>searchHopital.name.toLowerCase().includes(dataSearch.toLowerCase()))
  setListeHopital(marecherche)
  setRecherche(marecherche)
  console.log('barre',marecherche)
}


  return (

    <Div>
 
    {load === false ? (
                    <Loading />
                  ) : (
                        <>
                        <Grid.Column mobile={16} tablet={16} computer={16}>
                            <Title>Liste des hôpitaux</Title>
                          </Grid.Column>
                          <Grid.Column mobile={16} tablet={16} computer={10} style={{width:"93.5%",paddingLeft: "1.4rem"}}>
                          <Input type='text' placeholder='Rechercher un hôpital' fluid icon='search' value={searchTerm} onChange={handleChange}/>                            
                          </Grid.Column>
                        
                        
      <div style={{height: '400px', overflow: 'hidden',Color:'red',marginTop:'10px'}}>
      <CustomScroll>
        <div></div>
        {
      results.map((e,index)=>
      <Card className="carte">        
        <Card.Content>
          <Grid>
            <Grid.Column mobile={5} tablet={5} computer={5} className="DivBar">
              <Feed.Extra images key={index}>          
                <img src={e.image} style={{height:"200px",width:"150%", objectFit:"contain"}} />          
              </Feed.Extra>
            </Grid.Column>
            <Grid.Column mobile={11} tablet={11} computer={11}>
              <TitleTwo key={index} style={{marginLeft:'30%'}}>{e.name}</TitleTwo>
              <TitleThree style={{marginLeft:'30%'}}>
                <Feed.Date key={index}>              
                    {e.adress}
                </Feed.Date><br/>
                <Feed.Date key={index} style={{color:'red'}}>              
                    {e.heure_de_service}
                </Feed.Date><br/>
                <Link to={"/DetailListe/" +e.id}>
                  <Button inverted color='red' className="ButtonIcon" >VOIR PLUS</Button>
                </Link>
            </TitleThree>
            </Grid.Column>
          </Grid>
        </Card.Content>
      </Card>
      
      )}
      <div></div>
      </CustomScroll>
      </div>
    </>

                  )}
      
    </Div>

  );
}
