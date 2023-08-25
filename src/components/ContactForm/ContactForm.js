import { Formik, Field, Form, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';

const phoneRegistr =
  /^\+?\d{1,4}?[ .-]?(\(\d{1,3}\))?([ .-]?\d{1,4}){1,4}([ .-]?\d{1,9})?$/;
const addContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too short!')
    .max(70, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .matches(phoneRegistr, 'Phone number is not valid')
    .required('Required'),
});
export const ContactForm = ({ onAdd }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={addContactSchema}
      onSubmit={(values, action) => {
        console.log(values);
        onAdd({ ...values, id: nanoid() });
        action.resetForm();
      }}
    >
      <Form>
        <label>
          Name
          <Field type="text" name="name" />
          <ErrorMessage name="name" />
        </label>
        <label>
          Number
          <Field type="tel" name="number" />
          <ErrorMessage name="number" />
        </label>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
