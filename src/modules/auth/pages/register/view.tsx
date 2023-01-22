import { Form, Formik } from 'formik';
import { FormikHelpers, FormikValues } from 'formik/dist/types';
import { Link } from 'react-router-dom';
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';
import GoogleLogo from '../../../../assets/google-logo.svg';
import FormInvalidFeedback from '../../components/FormInvalidFeedback';

interface RegisterViewI {
	validation: FormikValues;
	showPassword: boolean;
	toggleShowPassword: () => void;
}

const RegisterView = ({
	validation,
	showPassword,
	toggleShowPassword,
}: RegisterViewI) => {
	document.title = 'Invision | Register';
	return (
		<div className="w-[100%] max-w-full md:w-[50%] md:h-screen pb-48">
			<div className="font-black text-black text-3xl h-[80px] flex items-center justify-end pr-6">
				<div>Invision</div>
			</div>
			<div>
				<div className="flex items-center justify-center w-[100%]">
					<h3>Getting Started</h3>
				</div>
				<div>
					<Formik
						initialValues={{
							fullName: '',
							email: '',
							password: '',
						}}
						onSubmit={function (
							values: { fullName: string; email: string; password: string },
							formikHelpers: FormikHelpers<{
								fullName: string;
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
							<span className="text-sm">Full name</span>
							<input
								type="text"
								name="fullName"
								className={`p-2 focus:outline-none rounded ${
									validation.touched.fullName && validation.errors.fullName
										? 'border border-red-500'
										: 'border-b border-b-slate-300 focus:border focus:border-[#A9C5BA]'
								}`}
								placeholder="Enter your full name"
								onChange={validation.handleChange}
								value={validation.values.fullName || ''}
							/>
							{validation.touched.fullName && validation.errors.fullName ? (
								<FormInvalidFeedback message={validation.errors.fullName} />
							) : null}

							<span className="text-sm mt-1">Users name or Email</span>
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
							<span className="text-sm mt-1">Create Password</span>
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

							<div className="flex items-center justify-center mt-4">
								<button
									type="submit"
									className="border-none bg-[#707070] text-white py-3 px-12 rounded-full"
								>
									Sign up
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
									Sign up with Google
								</button>
							</div>
							<div className="flex flex-col gap-4 items-center justify-center mt-8 w-[100%] tracking-widest text-center m-auto">
								<p className="text-sm">
									By signing up, you agree to <strong>Invision</strong>{' '}
									<Link to="/register" className="underline text-[#A9C5BA]">
										Terms Of Conditions
									</Link>{' '}
									and{' '}
									<Link to="/register" className="underline text-[#A9C5BA]">
										Privacy Policy
									</Link>{' '}
									<Link to="/register" className="underline text-[#A9C5BA]">
										Create Account
									</Link>
								</p>
								<p className="text-sm">
									Already <strong>Invision</strong> on?{' '}
									<Link to="/" className="underline text-[#A9C5BA]">
										Log in
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

export default RegisterView;
