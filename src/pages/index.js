import React from "react";
import Header from "../components/Header";
import Lolly from '../components/lolly';
import {navigate} from 'gatsby'

export default function Home() {
  return( 
  <div className = "container">
    <Header h1 = "Virtual Lolly" text = "because we all know someone who deserves some sugar"/>
    <div className="lolly">
      <Lolly fillLollyTop= "#d52358" fillLollyBottom= "#deaa43" fillLollyMiddle= "#e95946" />
      <Lolly fillLollyTop= "#d52358" fillLollyBottom= "#deaa43" fillLollyMiddle= "#e95946" />
      <Lolly fillLollyTop= "#d52358" fillLollyBottom= "#deaa43" fillLollyMiddle= "#e95946" />
      <Lolly fillLollyTop= "#d52358" fillLollyBottom= "#deaa43" fillLollyMiddle= "#e95946" />
      <Lolly fillLollyTop= "#d52358" fillLollyBottom= "#deaa43" fillLollyMiddle= "#e95946" />
      
      </div>
      <input className= "create-button" type="button" value = "Add a new Lolly" onClick={
        () => {
          navigate('/createLolly')
        }
      } />
    </div>)
}
