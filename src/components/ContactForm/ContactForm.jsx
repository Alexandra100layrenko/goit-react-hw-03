import * as Yup from 'yup'
import { ErrorMessage, Field, Form, Formik } from 'formik';
import s from './ContactForm.module.css'

const ContactForm = ({ addContact }) => {
    
    const handleSubmit = (values, options) => {
        addContact(values);
        options.resetForm();
    }
    
    const initialValues = {
        name: '',
        number: '',
      };

    const orderSchema = Yup.object().shape({
        name: Yup.string()
            .min(3, 'Name must be at least 3 characters')
            .max(50, 'Name cannot exceed 50 characters')
            .required('Name is required'),
        number: Yup.string()
            .matches(/^\+?[0-9]{10,14}$/, 'Only numeric characters are allowed')
            .min(10, 'Minimum 10 characters required')
            .max(14, 'Maximum 14 characters allowed')
            .required('Number is required'),
    })

    return(
        <div className={s.wraper}>
            <Formik validationSchema={orderSchema} onSubmit={handleSubmit} initialValues={initialValues} >
                <Form className={s.form}>
                    <label className={s.label}>
                        <span>Name</span>
                        <Field className={s.input} name='name' />
                        <ErrorMessage name = 'name' component='span' className={s.errorMessage} />
                    </label>
                    <label className={s.label}>
                        <span>Number</span>
                        <Field className={s.input} name='number' />
                        <ErrorMessage name='number' component='span' className={s.errorMessage} />
                    </label>
                    <button className={s.btnAdd} type='submit'>Add contact</button>
                </Form>
            </Formik>
        </div>
    )
}

export default ContactForm