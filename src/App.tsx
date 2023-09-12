import './App.css';
import Router from './components/router/router';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        < Router />
      </BrowserRouter>
    </>
  );
}

export default App;
