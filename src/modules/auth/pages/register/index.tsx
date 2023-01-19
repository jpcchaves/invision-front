import { useFormik } from 'formik';
import * as Yup from 'yup';
import RegisterView from './view';

const RegisterPage = () => {
	const validation = useFormik({
		enableReinitialize: true,
		initialValues: {
			fullName: '',
			email: '',
			password: '',
		},
		validationSchema: Yup.object().shape({
			fullName: Yup.string().required('Full name is a required field'),
			email: Yup.string()
				.required('Email is a required field')
				.email('Please, use a valid email'),
			password: Yup.string().required('Password is a required field'),
		}),
		onSubmit: (values) => alert(values),
	});

	return <RegisterView validation={validation} />;
};

export default RegisterPage;
