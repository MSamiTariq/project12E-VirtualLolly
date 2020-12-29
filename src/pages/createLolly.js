import React, { useState, useRef } from "react"
import Header from "../components/Header"
import Lolly from "../components/Lolly"
import { useQuery, gql, useMutation } from "@apollo/client"
import { navigate } from "gatsby"

const shortid = require("shortid")

const createLolllyMutation = gql`
  mutation createLolly(
    $recipientName: String!
    $message: String!
    $sender: String!
    $flavourTop: String!
    $flavourMid: String!
    $flavourBottom: String!
  ) {
    createLolly(
      recipientName: $recipientName
      message: $message
      sender: $sender
      flavourTop: $flavourTop
      flavourMid: $flavourMid
      flavourBottom: $flavourBottom
    ) {
      message
      lollyPath
    }
  }
`
const CreateLolly = () => {
  const [colorTop, setColorTop] = useState("#d52358")
  const [colorBottom, setColorBottom] = useState("#deaa43")
  const [colorMid, setColorMid] = useState("#e95946")
  const recipientNameRef = useRef()
  const messageRef = useRef()
  const senderRef = useRef()
  const [createLolly] = useMutation(createLolllyMutation)

  const submitLollyForm = async () => {
    const id = shortid.generate()
    const result = await createLolly({
      variables: {
        recipientName: recipientNameRef.current.value,
        message: messageRef.current.value,
        sender: senderRef.current.value,
        flavourTop: colorTop,
        flavourMid: colorMid,
        flavourBottom: colorBottom,
        lollyPath: id,
      },
    })
    console.log("result from server", result)
    await navigate(`/lolly/${id}`)
  }

  return (
    <div className="container">
      <Header />
      <div className="lollyFormDiv">
        <div>
          <Lolly
            fillLollyTop={colorTop}
            fillLollyBottom={colorBottom}
            fillLollyMiddle={colorMid}
          />
        </div>
        <div className="lollyFlavorDiv">
          <label htmlFor="colorTop" className="colorPickerLabel">
            <input
              type="color"
              className="colorPicker"
              value={colorTop}
              name="colorTop"
              id="colorTop"
              onChange={e => {
                setColorTop(e.target.value)
              }}
            />
          </label>
          <label htmlFor="colorMiddle" className="colorPickerLabel">
            <input
              type="color"
              className="colorPicker"
              value={colorMid}
              name="colorMid"
              id="colorMid"
              onChange={e => {
                setColorMid(e.target.value)
              }}
            />
          </label>
          <label htmlFor="colorBottom" className="colorPickerLabel">
            <input
              type="color"
              className="colorPicker"
              value={colorBottom}
              name="colorBottom"
              id="colorBottom"
              onChange={e => {
                setColorBottom(e.target.value)
              }}
            />
          </label>
        </div>
        <div className="createLollyForm">
          <label htmlFor="recipientName">To</label>
          <input
            type="text"
            id="recipientName"
            name="recipientName"
            ref={recipientNameRef}
          />
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="15"
            columns="10"
            ref={messageRef}
          />
          <label htmlFor="senderName">From</label>
          <input
            type="text"
            id="senderName"
            name="senderName"
            ref={senderRef}
          />
        </div>
        <input type="button" value="Create Lolly" onClick={submitLollyForm} />
      </div>
    </div>
  )
}

export default CreateLolly
