import React from "react"
import Header from "../components/Header"
// import { navigate } from 'gatsby';
import gql from "graphql-tag"
import { useQuery } from "@apollo/client"
import Lolly from "../components/lolly";

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

// import "./xyz.css"

const GET_QUERY = gql`
  {
    getAllLollies {
      recipientName
      sender
      message
      flavourTop
      flavourMid
      flavourBottom
      lollyPath
    }
  }
`
console.log("GETQUERY", GET_QUERY);

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

export default function LollyPage() {
  const classes = useStyles();
  const { loading, error, data } = useQuery(GET_QUERY)
  if (loading) {
    return( 
    <div className = {[classes.root, "circular"].join(" ")}>
    <CircularProgress color="secondary" />
    </div>
    )
  }
  if (error) {
    return <p>error</p>
  }
  if (data) {
    console.log("xyzData", data.getAllLollies)
    console.log("xyzDataIndex", data.getAllLollies.lastIndexOf())
  }
  const arr = data.getAllLollies
  console.log("arr", arr)
  const index = arr.length - 1
  console.log("index", index)

  return (
    <div className = "lollyPage">
      <Header />
      <div className="xyzLolly">
        <div className = "vlolly">
          <Lolly
            fillLollyTop={data.getAllLollies[index].flavourTop}
            fillLollyMiddle={data.getAllLollies[index].flavourMid}
            fillLollyBottom={data.getAllLollies[index].flavourBottom}
          />
        </div>
        <div>
          <h2 style = {{textAlign: 'center'}}>
            To: {data.getAllLollies[index].recipientName}
          </h2>
          <h2 style = {{textAlign: 'center'}}>
            Message: {data.getAllLollies[index].message}
          </h2>
          <h2 style = {{textAlign: 'center'}}>From: {data.getAllLollies[index].sender}</h2>
          <h2 style = {{textAlign: 'center'}}>
            Link: <a href = {`https://virtual-lolly-2020.netlify.app/lolly/${data.getAllLollies[index].lollyPath}`} >https://virtual-lolly-2020.netlify.app/lolly/
            {data.getAllLollies[index].lollyPath}</a>
          </h2>
        </div>
      </div>
    </div>
  )
}
