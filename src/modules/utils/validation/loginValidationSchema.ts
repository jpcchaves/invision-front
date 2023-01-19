import * as Yup from 'yup';

export const loginValidationSchema = Yup.object().shape({
	email: Yup.string()
		.required('Email is a required field')
		.email('Please, use a valid email'),
	password: Yup.string().required('Password is a required field'),
});
