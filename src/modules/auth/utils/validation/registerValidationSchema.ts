import * as Yup from 'yup';

export const registerValidationSchema = Yup.object().shape({
	fullName: Yup.string().required('Full name is a required field'),
	email: Yup.string()
		.required('Email is a required field')
		.email('Please, use a valid email'),
	password: Yup.string().required('Password is a required field'),
});
