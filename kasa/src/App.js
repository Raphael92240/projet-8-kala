import logo from '@/logo.svg';
import '@/App.css';
import Acceuil from '@/pages/Acceuil';
import Logement from '@/pages/Logement';
import Propos from '@/pages/Propos';
import Error from './_utils/Error';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <BrowserRouter>
          <Routes>
            <Route element={<Layout/>}>
              
              <Route index element={<Acceuil/>}/>

              <Route path='/acceuil' element={<Acceuil/>}/>
              <Route path='/logement' element={<Logement/>}/>
              <Route path='/propos' element={<Propos/>}/>

              <Route path='*' element={<Error/>}/>

            </Route>
          </Routes>
        </BrowserRouter>
        <Error/>
      </header>
    </div>
  );
}

export default App;
