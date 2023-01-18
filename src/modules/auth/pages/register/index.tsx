import React from 'react';
import { Link } from 'react-router-dom';
import GoogleLogo from '../../../../assets/google-logo.svg';

const RegisterPage = () => {
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
					<form className="flex flex-col w-[100%] md-[80%] px-12 py-2">
						<span className="text-sm">Full name</span>
						<input
							type="text"
							className="mb-5 border-b border-b-slate-300 p-2 focus:outline-none"
							placeholder="Enter your full name"
						/>
						<span className="text-sm">Users name or Email</span>
						<input
							type="text"
							className="mb-5 border-b border-b-slate-300 p-2 focus:outline-none"
							placeholder="Enter your user name or email"
						/>
						<span className="text-sm focus:outline-none">Create Password</span>
						<input
							type="password"
							className="mb-5 border-b border-b-slate-300 p-2 focus:outline-none"
							placeholder="Enter your password"
						/>

						<div className="flex items-center justify-center mt-4">
							<button className="border-none bg-[#707070] text-white py-3 px-12 rounded-full">
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
								<Link to="/login" className="underline text-[#A9C5BA]">
									Log in
								</Link>
							</p>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default RegisterPage;
