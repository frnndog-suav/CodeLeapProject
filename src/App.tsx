import {
	QueryClientProvider
} from '@tanstack/react-query';
import { REACT_QUERY_CLIENT } from './api/react-query';
import { AppRoutes } from "./routes/AppRoutes";

function App() {
	return <QueryClientProvider client={REACT_QUERY_CLIENT}><AppRoutes /></QueryClientProvider>
}

export default App;
