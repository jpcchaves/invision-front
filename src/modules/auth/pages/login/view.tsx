import { Form, Formik } from 'formik';
import { FormikHelpers, FormikValues } from 'formik/dist/types';
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import GoogleLogo from '../../../../assets/google-logo.svg';
import FormInvalidFeedback from '../../components/FormInvalidFeedback';

interface LoginViewI {
	validation: FormikValues;
	showPassword: boolean;
	toggleShowPassword: () => void;
}

const LoginView = ({
	validation,
	showPassword,
	toggleShowPassword,
}: LoginViewI) => {
	document.title = 'Invision | Login';

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
					<Formik
						initialValues={{
							email: '',
							password: '',
						}}
						onSubmit={function (
							values: { email: string; password: string },
							formikHelpers: FormikHelpers<{
								email: string;
								password: string;
							}>
						): void | Promise<any> {
							throw new Error('Function not implemented.');
						}}
					>
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
										: 'border-b border-b-slate-300 focus:border focus:border-[#A9C5BA]'
								}`}
								placeholder="Enter your user name or email"
								onChange={validation.handleChange}
								value={validation.values.email || ''}
							/>
							{validation.touched.email && validation.errors.email ? (
								<FormInvalidFeedback message={validation.errors.email} />
							) : null}
							<span className="mt-1 text-sm focus:outline-none">Password</span>
							<div className="w-full relative">
								<input
									name="password"
									type={showPassword ? 'text' : 'password'}
									className={`w-full p-2 focus:outline-none rounded ${
										validation.touched.password && validation.errors.password
											? 'border border-red-500'
											: 'border-b border-b-slate-300 focus:border focus:border-[#A9C5BA]'
									}`}
									placeholder="Enter your password"
									onChange={validation.handleChange}
									value={validation.values.password || ''}
								/>
								<span
									className="absolute top-1/2 left-[97%] transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
									onClick={() => toggleShowPassword()}
								>
									{validation.values.password ? (
										<>{showPassword ? <BsEyeSlashFill /> : <BsEyeFill />}</>
									) : null}
								</span>
							</div>
							{validation.touched.password && validation.errors.password ? (
								<FormInvalidFeedback message={validation.errors.password} />
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

export default LoginView;
