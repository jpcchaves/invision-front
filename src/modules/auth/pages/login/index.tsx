import { useFormik } from 'formik';
import { loginValidationSchema } from '../../../utils/validation/loginValidationSchema';
import LoginView from './view';

const LoginPage = () => {
	const validation = useFormik({
		enableReinitialize: true,
		initialValues: {
			email: '',
			password: '',
		},
		validationSchema: loginValidationSchema,
		onSubmit: (values) => alert(`Você logou com sucesso: ${values.email}`),
	});

	return <LoginView validation={validation} />;
};

export default LoginPage;
