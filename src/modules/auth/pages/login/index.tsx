import { useFormik, Form, Formik } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import GoogleLogo from '../../../../assets/google-logo.svg';

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

	return (
		<div className="w-[100%] max-w-full md:w-[50%] md:h-screen pb-48">
			<div className="font-black text-black text-3xl h-[80px] flex items-center justify-end pr-6">
				<div>Invision</div>
			</div>
			<div>
				<div className="flex items-center justify-center w-[100%]">
					<h3>Welcome to Invision</h3>
				</div>
				<div>
					<Formik>
						<Form
							onSubmit={(e) => {
								e.preventDefault();
								validation.handleSubmit();
								return false;
							}}
							className="flex flex-col w-[100%] md-[80%] px-12 py-2"
						>
							<span className="text-sm">Users name or Email</span>
							<input
								type="text"
								name="email"
								className={`p-2 focus:outline-none rounded ${
									validation.touched.email && validation.errors.email
										? 'border border-red-500'
										: 'border-b border-b-slate-300 '
								}`}
								placeholder="Enter your user name or email"
								onChange={validation.handleChange}
								value={validation.values.email || ''}
							/>
							{validation.touched.email && validation.errors.email ? (
								<span className="text-red-500 mb-1">
									{validation.errors.email}
								</span>
							) : null}
							<span className="mt-1 text-sm focus:outline-none">Password</span>
							<input
								name="password"
								type="password"
								className={` p-2 focus:outline-none rounded ${
									validation.touched.password && validation.errors.password
										? 'border border-red-500'
										: 'border-b border-b-slate-300 '
								}`}
								placeholder="Enter your password"
								onChange={validation.handleChange}
								value={validation.values.password || ''}
							/>
							{validation.touched.password && validation.errors.password ? (
								<span className="text-red-500 mb-1">
									{validation.errors.password}
								</span>
							) : null}
							<div className="text-end">
								<span>Forgot password?</span>
							</div>
							<div className="flex items-center justify-center mt-4">
								<button
									type="submit"
									className="border-none bg-[#707070] text-white py-3 px-12 rounded-full"
								>
									Sign in
								</button>
							</div>
							<div className="flex items-baseline justify-center mt-4">
								<span className="border-b border-b-slate-300 inline-block w-[100px]"></span>
								<small className="px-2">or</small>
								<span className="border-b border-b-slate-300 inline-block w-[100px]"></span>
							</div>
							<div className="flex items-center justify-center mt-4">
								<button className="border-none bg-[#FFFFFF] text-black font-semibold py-3 px-12 rounded-full flex gap-2 items-center justify-center shadow-lg">
									<img src={GoogleLogo} width={20} height={20} />
									Sign in with Google
								</button>
							</div>
							<div className="flex items-center justify-center mt-8">
								<p>
									New <strong>Invision</strong>?{' '}
									<Link to="/register" className="underline text-[#A9C5BA]">
										Create Account
									</Link>
								</p>
							</div>
						</Form>
					</Formik>
				</div>
			</div>
		</div>
	);
};

export default LoginPage;
