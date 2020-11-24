import React, {useState} from 'react'
import IconRight from "./IconRight"
import styled from "styled-components"


const DivBurger = styled.div`
width:2rem;
height:2rem;
position:fixed;
top:15px;
right:20px;
display:flex;
justify-content:space-around;
flex-flow:column nowrap;
z-index:2O;

@media (max-width:768px){
    display:flex;
    justify-content:space-around;
    flex-flow:column nowrap;

}

    div{
        width:2rem;
        height:0.25rem;
        background-color:${({open})=>open ?'#f1F1F1':'#333'};
        border-raduis:10px;
        transform-origin:1px;
        transition: all 0.3s linear;
 
        &:nth-child(1){
            transform: ${({open})=>open ?'rotate(45deg)':'rotate(0)'};
        }
        &:nth-child(2){
            transform: ${({open})=>open ?'translateX(100%)':'translateX(0)'};
            opacity: ${({open})=>open ? 0 : 1};
        }
        &:nth-child(3){
            transform: ${({open})=>open ?'rotate(-45deg)':'rotate(0)'};
        }
    }
`;

const Burger = () => {
    const [open,setOpen] = useState(false)
    return(
        <>
        <DivBurger open={open} onClick={()=>setOpen(!open)}>
        <div/>
        <div/>
        <div/>
    </DivBurger>
    <IconRight open={open} onClick={()=>setOpen(!open)}/>
    </>
    )
}


export default Burger
