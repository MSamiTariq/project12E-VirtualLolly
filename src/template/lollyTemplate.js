import React from "react";
import Lolly from '../components/lolly';
import '../styles/global.css';


export default function LollyPage(lolly) {

  const {location, pageContext} = lolly;
  console.log(location);
  return (
    <div className = "tempLolly">

      <h5 style= {{textAlign: 'center'}}>Your sharable link: </h5>{" "}
      <span style= {{textAlign: 'center'}}>
        {" "}
        {`https://virtual-lolly-2020.netlify.app${location.pathname}/`}
      </span>
      <div className = "vlolly">
        <Lolly
          fillLollyTop={pageContext.lolly.flavourTop}
          fillLollyMiddle={pageContext.lolly.flavourMid}
          fillLollyBottom={pageContext.lolly.flavourBottom}
        />

        <div>
          <h3 style= {{textAlign: 'center'}}>HI {pageContext.lolly.recipientName}</h3>
          <p style= {{textAlign: 'center'}}>{pageContext.lolly.message}</p>
          <h4 style= {{textAlign: 'center'}}>From: {pageContext.lolly.sender}</h4>
        </div>
      </div>
    </div>
  );
}
