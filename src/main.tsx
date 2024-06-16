import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FormState from './pages/FormState.tsx';
import Home from './pages/Home.tsx';
import Validation from './pages/Validation.tsx';
import TypeData from './pages/TypeData.tsx';
import WatchMode from './pages/WatchMode.tsx';
import FieldValue from './pages/FieldValue.tsx';
import Controller from './pages/Controller.tsx';
import StateManagement from './pages/StateManagement.tsx';
import PageNotfound from './pages/PageNotfound.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route path='/' element={<Home />}/>
        <Route path='/form-state' element={<FormState />}/>
        <Route path='/validation' element={<Validation />}/>
        <Route path='/type-data' element={<TypeData />}/>
        <Route path='/watch-mode' element={<WatchMode />}/>
        <Route path='/field-value' element={<FieldValue />}/>
        <Route path='/controller' element={<Controller />}/>
        <Route path='/state-management' element={<StateManagement />}/>
        <Route path='/*' element={<PageNotfound />}/>
      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
