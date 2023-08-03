import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout, Acceuil, Logement, Propos } from '@pages/public';
import Error from '@/_utils/public/Error';




const PublicRouter = () => {
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

export default PublicRouter;