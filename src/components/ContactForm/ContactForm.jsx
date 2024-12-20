import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import styles from './ContactForm.module.css';

const validationSchema = Yup.object().shape({
  name: Yup.string().min(3).max(50).required('Required'),
  number: Yup.string().min(3).max(20).required('Required'),
});

const ContactForm = ({ onAddContact }) => {
  const handleSubmit = (values, { resetForm }) => {
    const newContact = { id: nanoid(), ...values };
    onAddContact(newContact);
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form className={styles.form}>
          <label>
            Name
            <Field name="name" type="text" />
            <ErrorMessage name="name" component="div" className={styles.error} />
          </label>
          <label>
            Number
            <Field name="number" type="text" />
            <ErrorMessage name="number" component="div" className={styles.error} />
          </label>
          <button type="submit">Add contact</button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
