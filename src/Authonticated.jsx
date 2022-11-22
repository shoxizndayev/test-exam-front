import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Blocks from './pages/Blocks';
import Result from './pages/Result';
import AllResults from './pages/AllResults';
import Test from './pages/Test';

const Authonticated = () => {
  return (
    <>
      <Routes>
        <Route path={'/login'} element={<Navigate to="/blocks" replace />} />
        <Route path={'/'} element={<Navigate to="/blocks" replace />} />
        <Route path={'/register'} element={<Navigate to="/blocks" replace />} />
        <Route path="/blocks" element={<Blocks />} />
        <Route path="/result/:resultId" element={<Result />} />
        <Route path="/all-results" element={<AllResults />} />
        <Route path="/test" element={<Test />} />
        <Route path="*" element={<h1>404 not Found</h1>} />
      </Routes>
    </>
  );
};

export default Authonticated;