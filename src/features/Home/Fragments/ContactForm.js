import React, { useState } from "react"
import * as Yup from "yup"
import axios from "axios"
import { Formik, Form } from "formik"
import {
  Typography,
  TextField,
  TextFieldMultiline,
  Button,
  Dialog,
  DialogManager,
} from "@noisytrumpet/osi-dls"

import "./ContactForm.scss"

const FormDialogContext = React.createContext(null)

const ContactForm = ({ title, subtitle }) => {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  })
  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    })
    if (ok) {
      form.reset()
    }
  }

  const FormDialog = () => {
    const { isOpen, close } = React.useContext(FormDialogContext)
    return (
      <Dialog
        accentIcon="check-default-bold"
        accentIconColor="brand-white"
        type="feature-modal"
        hasGrayBackground
        isOpen={isOpen}
        onClose={() => {
          setServerState({ status: null })
          close()
        }}
        id="dialog-form"
        title="Thank You for your submission!"
      >
        <Typography variant="body-medium">
          Someone from our team will reach out shortly.
        </Typography>
      </Dialog>
    )
  }

  // Before rendering, call `DialogManager` to handle state and to wrap it in the ContextProvider
  const TriggerableDialog = DialogManager(FormDialog, FormDialogContext)

  const handleOnSubmit = e => {
    const form = e
    setServerState({ submitting: true })

    axios({
      method: "post",
      url: "https://formspree.io/f/xnqoknvr",
      data: form,
    })
      .then(r => {
        handleServerResponse(true, "", form)
      })
      .catch(r => {
        handleServerResponse(false, r, form)
      })
  }

  const DialogTrigger = (ok, msg) => {
    const { open } = React.useContext(FormDialogContext)
    if (serverState.status) {
      open()
    }
    return (
      <Button mode="secondary" type="submit">
        Submit
      </Button>
    )
  }
  return (
    <TriggerableDialog>
      <div className="form-wrapper">
        <section className="form-section background-color-primary" id="form">
          <Typography variant="headline-2" color="brand-white">
            {title}
          </Typography>
          <Typography variant="body-medium" color="brand-white">
            {subtitle}
          </Typography>
          <Formik
            initialValues={{
              name: null,
              email: null,
              phone: null,
              message: null,
            }}
            validationSchema={Yup.object({
              name: Yup.string()
                .min(2, "Please enter your first name")
                .max(40, "Must be 40 characters or less")
                .required("Please enter your name")
                .nullable(),
              email: Yup.string()
                .max(50)
                .email("Please enter a valid email address.")
                .required("Please enter a valid email address.")
                .nullable(),
              phone: Yup.string()
                .required("Please enter a phone number")
                // .matches(/^[6-9]\d{9}$/, {
                //   message: "Please enter valid number.",
                //   excludeEmptyString: false,
                // })
                .nullable(),
            })}
            onSubmit={handleOnSubmit}
          >
            <Form method="post">
              <TextField
                name="name"
                label="Name"
                domId="textfield-name"
                addClass="input-name"
                // helperText="Optional helper text"
                required
              />
              <div className="two-field-wrapper">
                <TextField
                  name="email"
                  label="E-Mail"
                  domId="textfield-email"
                  addClass="input-email"
                  // helperText="Optional helper text"
                  required
                  type="email"
                />
                <TextField
                  name="phone"
                  label="Phone Number"
                  domId="textfield-phone"
                  addClass="input-phone"
                  // helperText="Optional helper text"
                  required
                />
              </div>
              <TextFieldMultiline
                label="Message"
                name="message"
                domId="textarea-message"
                minRows={3}
              />

              <DialogTrigger />
            </Form>
          </Formik>
        </section>
      </div>
    </TriggerableDialog>
  )
}

export default ContactForm
