import { Route, Routes } from 'react-router-dom';
import WaitList from './Component/Pages';

function App() {
	return (
		<Routes>
			<Route path="/" element={<WaitList />} />
		</Routes>
	);
}

export default App;
