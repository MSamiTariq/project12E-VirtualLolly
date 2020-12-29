import React from "react";
import Header from "../components/Header";
import Lolly from '../components/lolly';
import {navigate} from 'gatsby'

export default function Home() {
  return( 
  <div className = "container">
    <Header />
    <div className="lolly">
      <Lolly fillLollyTop= "#d52358" fillLollyBottom= "#deaa43" fillLollyMiddle= "#e95946" />
      <Lolly fillLollyTop= "#d52358" fillLollyBottom= "#deaa43" fillLollyMiddle= "#e95946" />
      
      </div>
      <input type="button" value = "Add a new Lolly" onClick={
        () => {
          navigate('/createLolly')
        }
      } />
    </div>)
}
