import React from 'react';
import './index.scss';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';


const Back = () => {
  const navigate = useNavigate();
  return (
    <div className="container-back" onClick={() => navigate(-1)}>
      <HiArrowNarrowLeft />
      <p>Orqaga</p>
    </div>
  );
};

export default Back;