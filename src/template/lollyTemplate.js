import React from "react";
import Lolly from '../components/lolly'


export default function LollyPage(lolly) {

  const {location, pageContext} = lolly;
  console.log(location);
  return (
    <div>

      <h5 className="sharableLinkContainer">Your sharable link: </h5>{" "}
      <span className="sharableLink">
        {" "}
        {`https://virtual-lolly-2020.netlify.app${location.pathname}/`}
      </span>
      <div className="recievedContentContainer">
        <Lolly
          fillLollyTop={pageContext.lolly.flavourTop}
          fillLollyMiddle={pageContext.lolly.flavourMid}
          fillLollyBottom={pageContext.lolly.flavourBottom}
        />

        <div className="recievedTextContainer">
          <h3>HI {pageContext.lolly.recipientName}</h3>
          <p>{pageContext.lolly.message}</p>
          <h4>From: {pageContext.lolly.sender}</h4>
        </div>
      </div>
    </div>
  );
}
