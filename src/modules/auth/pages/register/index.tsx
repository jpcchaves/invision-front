import { useFormik } from 'formik';
import { registerValidationSchema } from '../../../utils/validation/registerValidationSchema';
import RegisterView from './view';

const RegisterPage = () => {
	const validation = useFormik({
		enableReinitialize: true,
		initialValues: {
			fullName: '',
			email: '',
			password: '',
		},
		validationSchema: registerValidationSchema,
		onSubmit: ({ email, fullName, password }) =>
			alert(`Nome: ${fullName}, Email: ${email}, Password: ${password}`),
	});

	return <RegisterView validation={validation} />;
};

export default RegisterPage;
