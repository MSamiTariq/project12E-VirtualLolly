import React, { useState, useRef } from "react"
import Header from "../components/Header"
import Lolly from "../components/lolly"
import { useQuery, gql, useMutation } from "@apollo/client"
import { navigate } from "gatsby"

import { Formik, Form, Field, ErrorMessage } from "formik";
import ErrorMsg from '../Utils/ErrorMsg';
import * as Yup from "yup";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const shortid = require("shortid");

const createLolllyMutation = gql`
  mutation createLolly(
    $recipientName: String!
    $message: String!
    $sender: String!
    $flavourTop: String!
    $flavourMid: String!
    $flavourBottom: String!
    $lollyPath: String!

  ) {
    createLolly(
      recipientName: $recipientName
      message: $message
      sender: $sender
      flavourTop: $flavourTop
      flavourMid: $flavourMid
      flavourBottom: $flavourBottom
      lollyPath: $lollyPath
    ) {
      message
      lollyPath
    }
  }
`

const initialValues = {
  To: "",
  From: "",
  Message: ""
};

const validationSchema = Yup.object({
  To: Yup.string().required("Field is required"),
  From: Yup.string().required("Field is required"),
  Message: Yup.string().required("Field is required"),
});

const CreateLolly = () => {
  const [colorTop, setColorTop] = useState("#d52358")
  const [colorBottom, setColorBottom] = useState("#deaa43")
  const [colorMid, setColorMid] = useState("#e95946")
  const recipientNameRef = useRef()
  const messageRef = useRef()
  const senderRef = useRef()
  const [createLolly] = useMutation(createLolllyMutation)

  const submitLollyForm = async (values, actions) => {
    const id = shortid.generate()
    const result = await createLolly({
      variables: {
        recipientName: values.To,
        message: values.Message,
        sender: values.From,
        flavourTop: colorTop,
        flavourMid: colorMid,
        flavourBottom: colorBottom,
        lollyPath: id.toString(),
      },
    })

    await actions.resetForm({
      values: {
        To: "",
        Message: "",
        From : ""
      }
    })
    console.log("result from server", result)
    await navigate(`/lollyPage`)
  }

  return (
    <div className="container">
      <Header h1 = "Virtual Lolly" text = "because we all know someone who deserves some sugar"/>
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
        <Formik
              initialValues={initialValues}
              onSubmit={submitLollyForm}
              validationSchema={validationSchema}
            >
              <Form className = "form">
                <Field
                  as={TextField}
                  id="To"
                  type="text"
                  label="To"
                  variant="outlined"
                  name="To"
                  fullWidth
                  style={{ marginTop: "10px" }}
                />
                <ErrorMessage name="To" component={ErrorMsg} />


                <Field
                  as={TextField}
                  id="Message"
                  type="text"
                  label="Message"
                  variant="outlined"
                  multiline
                  rows={4}
                  name="Message"
                  fullWidth
                  style={{ marginTop: "10px" }}
                />
                <ErrorMessage name="Message" component={ErrorMsg} />
                <Field
                  as={TextField}
                  id="From"
                  type="text"
                  label="From"
                  variant="outlined"
                  name="From"
                  fullWidth
                  style={{ marginTop: "10px" }}
                />
                <ErrorMessage name="To" component={ErrorMsg} />

                <Button
                  variant="contained"
                  color="secondary"
                  fullWidth
                  type="submit"
                  style={{ marginTop: "10px", marginBottom: "10px" }}
                  // disabled = {!Formik.dirty || !Formik.isValid}
                >
                  Create Lolly
                </Button>
              </Form>
            </Formik>
        </div>
      </div>
    </div>
  )
}

export default CreateLolly
