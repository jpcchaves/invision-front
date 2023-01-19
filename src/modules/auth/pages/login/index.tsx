import { useState } from 'react';
import { useFormik } from 'formik';
import { loginValidationSchema } from '../../../utils/validation/loginValidationSchema';
import LoginView from './view';

const LoginPage = () => {
	const [showPassword, setShowPassword] = useState(false);
	const toggleShowPassword = () => setShowPassword((prevState) => !prevState);

	const validation = useFormik({
		enableReinitialize: true,
		initialValues: {
			email: '',
			password: '',
		},
		validationSchema: loginValidationSchema,
		onSubmit: (values) => alert(`Você logou com sucesso: ${values.email}`),
	});

	return (
		<LoginView
			validation={validation}
			showPassword={showPassword}
			toggleShowPassword={toggleShowPassword}
		/>
	);
};

export default LoginPage;
