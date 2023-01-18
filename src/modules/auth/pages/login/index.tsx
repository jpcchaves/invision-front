import { Link } from 'react-router-dom';
import GoogleLogo from '../../../../assets/google-logo.svg';

const LoginPage = () => {
	return (
		<div className="w-[100%] max-w-full md:w-[50%] h-screen">
			<div className="font-black text-black text-3xl h-[80px] flex items-center justify-end pr-6">
				<div>Invision</div>
			</div>
			<div>
				<div className="flex items-center justify-center w-[100%]">
					<h3>Welcome to Invision</h3>
				</div>
				<div>
					<form className="flex flex-col w-[100%] md-[80%] px-12 py-2">
						<span className="text-sm">Users name or Email</span>
						<input
							type="text"
							className="mb-5 border-b border-b-slate-300 p-2 focus:outline-none"
							placeholder="Enter your user name or email"
						/>
						<span className="text-sm focus:outline-none">Password</span>
						<input
							type="password"
							className="mb-5 border-b border-b-slate-300 p-2 focus:outline-none"
							placeholder="Enter your password"
						/>
						<div className="text-end">
							<span>Forgot password?</span>
						</div>

						<div className="flex items-center justify-center mt-4">
							<button className="border-none bg-[#707070] text-white py-3 px-12 rounded-full">
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
					</form>
				</div>
			</div>
		</div>
	);
};

export default LoginPage;
