import React from 'react'
import style from '../../style.css'
import Button from 'react-bootstrap/Button';
import PropTypes from "prop-types";



export default function 
(props) {
    const { firstname = "NGUESSAN" } = props;
    const { lastname = "Kouassi Jean-Joel" } = props;
    const { profession = "Web-developpeur & Infographe Graphiste" } = props;
    const { bio = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." } = props;
    
    const handleName = () => alert(`${props.firstname} ${props.lastname}`);
  return (
      <>
    <div className="profile">
            <p className="name">{props.firstname} {props.lastname}
            <br/>
            <p style={{width:500, fontWeight:"initial", fontSize:22, marginLeft:22}}>{props.profession} <br/>{props.bio}</p>
            <Button variant="outline-dark" style={{width:300, fontWeight:600}} onClick={handleName}>Dark</Button>
            </p>

            <div ><img className="imgprofile" src={props.children}/> </div>
    </div>
    
    </>
  )
}