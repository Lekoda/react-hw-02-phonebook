import { Formik } from 'formik';

import * as Yup from 'yup';

export const ContactForm = () => {
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={values => {
        console.log(values);
      }}
    >
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={values.name}
        />

        <input
          type="tel"
          name="number"
          onChange={handleChange}
          value={values.number}
        />
        <button type="submit">Add contact</button>
      </form>
    </Formik>
  );
};
