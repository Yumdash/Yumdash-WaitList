import { Route, Routes } from 'react-router-dom';
import WaitList from './Component/Pages';
import { ToastContainer } from 'react-toastify';

function App() {
	return (
		<div>
			<ToastContainer />
			<Routes>
				<Route path="/" element={<WaitList />} />
			</Routes>
		</div>
	);
}

export default App;
