import React from "react"
import { Formik, Form } from "formik"
import { Typography, TextField, Button } from "@noisytrumpet/osi-dls"
import "./ContactForm.scss"

const ContactForm = ({ title, subtitle }) => {
  return (
    <div className="form-wrapper">
      <section className="form-section background-color-primary">
        <Typography variant="headline-3" color="brand-white">
          {title}
        </Typography>
        <Typography variant="body-medium" color="brand-white">
          {subtitle}
        </Typography>
        <Formik initialValues={{ name: "", email: "", phone: "", message: "" }}>
          <Form>
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
            <TextField
              label="Message"
              name="message"
              domId="textarea-message"
              required
              type="textarea"
            />
            <Button mode="secondary">Submit</Button>
          </Form>
        </Formik>
      </section>
    </div>
  )
}

export default ContactForm
