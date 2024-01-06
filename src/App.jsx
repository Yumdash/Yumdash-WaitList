import { Route, Routes } from 'react-router-dom';
import WaitList from './Component/Pages';
import JoinWaitList from './Component/WaitList/JoinWaitList';

function App() {
	return (
		<Routes>
			<Route path="/" element={<WaitList/>} />
			<Route path="/waitlist" element={<JoinWaitList/>} />
		</Routes>
	);
}

export default App;

