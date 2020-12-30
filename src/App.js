import React from "react";
import MapHopital from "./components/Cartes/MapHopital"
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  BrowserRouter
} from "react-router-dom"
// import ListeHopitaux from "./components/Contenair/ListeHopitaux"
import DetailListe from "./components/Contenair/DetailListe"




function App() {
  return (    
<Router>
  <Switch>
   <Route exact path="/">
    <MapHopital/>
   </Route>
   {/* <Route path="/DetailList">
    <ListeHopitaux/>
   </Route> */}
   <Route path="/DetailListe/:id">
    <DetailListe/>
   </Route>
  </Switch>
</Router>
  );
}

export default App;
