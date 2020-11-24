import React from 'react'
import styled from "styled-components"


const DivRight = styled.ul`
    display:flex;
    flex-flow:row nowrap;
    list-style:none;
    
    li{
        padding: 18px 10px;
        list-style:none;
        color:#fff;
    }

@media (max-width:768px){
    flex-flow:column nowrap;
    background-color:silver;
    position: fixed;
    top:0;
    right:0;
    height:50vh;
    width:300px;
    padding-top:3.5rem;
    color:#fff;
    transform: ${({open})=>open ?'translateX(100%)':'tanslateX(0)'};
    transition: transform 0.3s ease-in-out;

}


`;

const IconRight = ({open}) => (
  <DivRight open={open}>
        <li>Hôpital</li>
        <li>Spécialité</li>
        <li>Apropos</li>
  </DivRight>
)

export default IconRight
