import { useFormik } from 'formik';
import { useState } from 'react';
import { registerValidationSchema } from '../../../utils/validation/registerValidationSchema';
import RegisterView from './view';

const RegisterPage = () => {
	const [showPassword, setShowPassword] = useState(false);
	const toggleShowPassword = () => setShowPassword((prevState) => !prevState);

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

	return (
		<RegisterView
			validation={validation}
			showPassword={showPassword}
			toggleShowPassword={toggleShowPassword}
		/>
	);
};

export default RegisterPage;
