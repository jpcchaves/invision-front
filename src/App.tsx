import { Route, Routes } from 'react-router-dom';
import Carousel from './components/Carousel';
import LoginPage from './modules/auth/pages/login';
import RegisterPage from './modules/auth/pages/register';

const App = () => {
	return (
		<div className="w-screen h-screen max-w-full max-h-full">
			<Routes>
				<Route path="/" element={<Carousel />}>
					<Route index element={<LoginPage />} />
					<Route path="/register" element={<RegisterPage />} />
				</Route>
			</Routes>
		</div>
	);
};

export default App;
