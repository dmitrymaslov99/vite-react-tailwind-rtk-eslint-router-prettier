import { Route, Routes } from 'react-router-dom';
import React from 'react';
import ErrorPage from './routes/error-page.jsx';
import SharedLayout from './layout/SharedLayout.jsx';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SharedLayout />} errorElement={<ErrorPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
