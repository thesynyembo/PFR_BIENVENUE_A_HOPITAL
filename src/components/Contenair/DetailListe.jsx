import axios from "axios";
import React, { useEffect, useState } from "react"
import { Grid, Image, Icon} from 'semantic-ui-react'
import logo from '../Img/ngaliema.jpg'
import styled from "styled-components"
import Header from '../Nav/Header1'
import Footer from '../Footer/Footer'
import Map from '../Cartes/MapBYOneHopital'

const Div = styled.div`
  h5{
    font-family: "Mont Light";
  }
  p{
    font-family:"Mont Bold";
  }
  .iconE{
    color:#009FE3;
    
  }
`
const DivColumn = styled.div`
  padding-left:50px;
`
const DivColumns = styled.div`
  padding-left:50px;
  padding-top:700px;
`

export default function DetailListe() {
  const [listeHopital, setListeHopital] = useState([]);
  const [listeSpecialite, setListeSpecialite] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:4000/Map`)
      .then((res) => {
        setListeHopital(res.data);
        console.log('DetailListe',res.data);
      })
      .catch((erreur) => console.log(erreur));
  }, []);
  useEffect(() => {
    axios
      .get(`http://localhost:4000/Specialite`)
      .then((res) => {
        setListeSpecialite(res.data);
        console.log('listeSpecialite',res.data);
      })
      .catch((erreur) => console.log(erreur));
  }, []);

return (
  <>
<Div>
  {
    listeHopital.map((e)=>
  <Grid>
    <Grid.Column mobile={16} tablet={16} computer={16}>
      <Header/><br/>
      <Grid.Column mobile={16} tablet={16} computer={16}>        
        <Grid columns={2}>
          <Grid.Column>
            <DivColumn>
              <Image src={logo} />
            </DivColumn>
          <Grid.Row columns={1}>
            <Grid.Column ><br/>
              <DivColumn> 
                <h5><Icon name='map marker alternate' className="iconE"/>Adresse : {e.name}</h5>              
                <h5><Icon name='map outline' className="iconE"/>Commune : {e.name}</h5>          
                <h5><Icon name='phone' className="iconE"/>Gmail : {e.phone}</h5>
                <h5><Icon name='info' className="iconE"/>Langue(s) :{e.email}</h5>
                <h5><Icon name='clock outline' className="iconE"/>Heure : {e.email}</h5>
                <h5><Icon name='info' className="iconE"/>{e.email}</h5>
                  {
                    listeSpecialite.map((e)=>
                <h5>Spécialités:<ul><li>{e.name}</li></ul></h5>
                  )}
              </DivColumn>
            </Grid.Column>
          </Grid.Row> 
            </Grid.Column>
              <Grid.Column>
                  <Map/>
              </Grid.Column>
            </Grid>
     
          </Grid.Column>
        
        
        <DivColumn>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. 
            Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae,
             consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. 
             Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et 
             ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.</p>
        </DivColumn>
    </Grid.Column>
    <Footer/>
  </Grid>
)}
</Div>
</>
)

}
