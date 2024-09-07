import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  FirstName: Yup.string().required("This field is required"),
  LastName: Yup.string().required("This field is required"),
  EmailAddress: Yup.string()
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      "Please enter a valid email address"
    )
    .required("This field is required"),
  QueryRadio: Yup.string().required("Select field is required"),
  TextField: Yup.string().required("This field is required"),
  Checkbox: Yup.boolean().oneOf(
    [true],
    "To submit this form, please consent to being contacted"
  ),
});

const ContactForm = () => {
  const [successMessage, setSuccessMessage] = useState("");

  return (
    <>
      <div className="bg-lightGreen p-8">
        {successMessage && (
          <div className="bg-GReen px-10 mb-4 mx-auto max-w-md mt-4 py-3 rounded-md">
            <h4 className="text-white">✅Message Sent!</h4>
            <p className="max-w-lg text-white">
              Thanks for completing the form. We'll be in touch soon!
            </p>
          </div>
        )}

        <Formik
          initialValues={{
            FirstName: "",
            LastName: "",
            EmailAddress: "",
            QueryRadio: "",
            TextField: "",
            Checkbox: false,
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            setSuccessMessage("Message Sent!");
            resetForm();
          }}
        >
          {() => (
            <Form className="bg-white rounded-md p-9 mx-auto max-w-lg">
              <h1 className="text-left mb-4 text-green-700 text-3xl">
                Contact Us
              </h1>
              <div className="flex flex-col md:flex-row md:space-x-3 mb-4">
                <div className="flex-1">
                  <label>First Name *</label>
                  <Field
                    type="text"
                    name="FirstName"
                    className="w-full border p-2 rounded-md"
                  />
                  <ErrorMessage
                    name="FirstName"
                    component="div"
                    className="text-Red"
                  />
                </div>
                <div className="flex-1">
                  <label>Last Name *</label>
                  <Field
                    type="text"
                    name="LastName"
                    className="w-full border p-2 rounded-md"
                  />
                  <ErrorMessage
                    name="LastName"
                    component="div"
                    className="text-Red"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="text-left">Email Address *</label>
                <Field
                  type="email"
                  name="EmailAddress"
                  className="w-full border p-2 rounded-md"
                />
                <ErrorMessage
                  name="EmailAddress"
                  component="div"
                  className="text-Red"
                />
              </div>
              <div className="mb-4">
                <label className="text-left">Query Type *</label>
                <div className="flex flex-col md:flex-row justify-center mt-2 space-y-2 md:space-y-0 md:space-x-8">
                  <div className="bg-GReen px-6 rounded-md flex items-center">
                    <Field
                      type="radio"
                      name="QueryRadio"
                      value="General Enquiry"
                    />
                    <label className="flex items-center cursor-pointer p-3 text-white rounded-md">
                      General Enquiry
                    </label>
                  </div>
                  <div className="bg-GReen px-6 rounded-md flex items-center">
                    <Field
                      type="radio"
                      name="QueryRadio"
                      value="Support Request"
                    />
                    <label className="flex items-center cursor-pointer p-3 text-white rounded-md">
                      Support Request
                    </label>
                  </div>
                </div>
                <ErrorMessage
                  name="QueryRadio"
                  component="div"
                  className="text-Red mt-4"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="TextField">Message *</label>
                <Field
                  as="textarea"
                  name="TextField"
                  className="w-full border p-2 rounded-md"
                />
                <ErrorMessage
                  name="TextField"
                  component="div"
                  className="text-Red"
                />
              </div>
              <div className="mb-4">
                <label className="flex items-center">
                  <Field type="checkbox" name="Checkbox" className="mr-2" />I
                  consent to being contacted by the team
                </label>
                <ErrorMessage
                  name="Checkbox"
                  component="div"
                  className="text-Red"
                />
              </div>
              <div className="flex justify-center">
                <button
                  className="bg-GReen text-white px-10 py-2 rounded w-full"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      <footer className="bg-GReen p-10 ">
        <h1 className="text-lightGrey text-white">
          Developed by Dagmawi Milkias
        </h1>
        <p className="text-lightGrey text-white">
          Uses Formik, react Library for Handling forms
        </p>
      </footer>
    </>
  );
};

export default ContactForm;
