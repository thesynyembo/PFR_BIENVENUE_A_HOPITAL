import React from 'react'
import { Grid } from 'semantic-ui-react'
import Map from './Map'
import ListeHopitaux from '../Contenair/ListeHopitaux';
import Header from '../Nav/Header2'
import Footer from '../Footer/Footer'

const MapHopital = () => (
  <>
    <Header/>
    <Grid>   
      <Grid.Column mobile={16} tablet={10} computer={10}>
        <Map/>
      </Grid.Column>
      <Grid.Column mobile={16} tablet={6} computer={6}>
        <ListeHopitaux/>
      </Grid.Column>
    </Grid><br/><br/><br/><br/>
    <Footer/> 
  </>
)

export default MapHopital
