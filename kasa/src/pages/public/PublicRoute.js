import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '@/pages/public/Layout';
import Acceuil from '@/pages/public/Acceuil';
import Logement from '@/pages/public/Logement';
import Propos from '@/pages/public/Propos';
import Error from '@/_utils/public/Error';




const PublicRoute = () => {
    return (
        <Routes>
            <Route element={<Layout/>}>
              
              <Route index element={<Acceuil/>}/>

              <Route path='/acceuil' element={<Acceuil/>}/>
              <Route path='/logement' element={<Logement/>}/>
              <Route path='/propos' element={<Propos/>}/>

              <Route path='*' element={<Error/>}/>

            </Route>
          </Routes>
    );
};

export default PublicRoute;