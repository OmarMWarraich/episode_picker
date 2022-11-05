
import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'
import { StoreProvider } from './Store'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import FavPage from './components/FavPage'


ReactDOM.render(
  <StoreProvider>
    <BrowserRouter>
      <Routes>
        <Route element={<HomePage />} path='/' />
        <Route element={<FavPage />} path='/faves' />
      </Routes>
    </BrowserRouter>
  </StoreProvider>,
  document.getElementById('root')
)