import React, { useEffect, useState } from "react"
import { Button, Header, Icon, Modal, Label, Form } from 'semantic-ui-react'
import styled from "styled-components"
import { Link, useParams } from "react-router-dom"
import axios from "axios";


const DivReservation = styled.div`
// margin-left: 8rem;
margin-top: 5rem;
  
`;
const Div = styled.div`
.icone{
  color:red;
}  
`;



function ModalRes() {
  const [open, setOpen] = React.useState(false)
  const [listeHopital, setListeHopital] = useState([]);
  let { id } = useParams();
  const params = { id };
  useEffect(() => {
    axios
      // .get(`http://localhost:5000/Map/`+id[1])
      .get(`http://localhost:5000/Map/${params.id}?`)
      .then((res) => {
        setListeHopital(res.data);;
      })
      .catch((erreur) => console.log(erreur));
  }, []);


  return (
    <Div>
    <Modal
      closeIcon
      open={open}
      trigger={
      <DivReservation>
        <Button as='div' labelPosition='right'>
          <Button color='red'>
            <Icon name='first aid' />
            Reservation
          </Button>
          <Label as='a' basic color='red' pointing='left'>
          Hôpital
          </Label> 
      </Button>
    </DivReservation>    
    }
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    >
      <Header>
      {
    listeHopital.map((e)=>   
    <Link to={"/DetailListe/" +e.id}>
            <i className="fad fa-angle-double-left iconModal" style={{fontSize:"2em"}} ></i>
        </Link>
        )}

        <div className='headerSymbol'>
        <Icon name='hospital symbol'content=''/>Reservation</div>
        </Header>
      <Modal.Content>
      <Form>
    <Form.Field>
      {/* <label className='first'>First Name</label> */}
      <input placeholder='Nom' />
    </Form.Field>
    <Form.Field>
      {/* <label>Last Name</label> */}
      <input placeholder='Prénom' />
    </Form.Field>
    <Form.Field>
      {/* <label>Last Name</label> */}
      <input placeholder='Le 01/12/2000' />
    </Form.Field>
    <Form.Field>
      {/* <label>Last Name</label> */}
      <input placeholder='Heure de reservation' />
    </Form.Field>
    <Button color='green' type='submit'>Envoyer</Button>
  </Form>
      </Modal.Content>
      <Modal.Actions>
        {/* <Button color='red' onClick={() => setOpen(false)}>
          <Icon name='remove' /> Annuler
        </Button> */}
        {/* <Button color='green' onClick={() => setOpen(false)}>
          <Icon name='checkmark' /> Envoyer
        </Button> */}
      </Modal.Actions>
    </Modal>
    </Div>
  )
}

export default ModalRes