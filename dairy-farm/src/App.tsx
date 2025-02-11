import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AppRoutes from './routes/index';

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;