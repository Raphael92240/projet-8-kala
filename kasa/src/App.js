import logo from '@/logo.svg';
import '@/App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PublicRouter from '@/pages/public/PublicRouter';





function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <BrowserRouter>
          <PublicRouter/>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
