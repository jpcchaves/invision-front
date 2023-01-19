import { useFormik } from 'formik';
import * as Yup from 'yup';
import LoginView from './view';

const LoginPage = () => {
	const validation = useFormik({
		enableReinitialize: true,
		initialValues: {
			email: '',
			password: '',
		},
		validationSchema: Yup.object().shape({
			email: Yup.string()
				.required('Email is a required field')
				.email('Please, use a valid email'),
			password: Yup.string().required('Password is a required field'),
		}),
		onSubmit: (values) => alert(`Você logou com sucesso: ${values.email}`),
	});

	return <LoginView validation={validation} />;
};

export default LoginPage;
