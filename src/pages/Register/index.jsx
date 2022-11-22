import React, { useContext, useState } from 'react';
import './styles.scss';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Button, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { Link } from 'react-router-dom';
import { Context as AuthContext } from '../../context/auth';
import { api } from '../../lib/api';


const Index = () => {
  const { setToken } = useContext(AuthContext);
  const [name, setname] = useState();
  const [password, setPassword] = useState();

  const handleBtnClick = async (evt) => {
    evt.preventDefault();
    const { data } = await api().post('/register', { name, password });
    if (data.token) {
      setToken(data.token);
    } else {
      alert('ma`lumotlar xato kiritildi');
    }

  };
  
  return (<div className="container">
    <div className="register">
        <form className='register__form'>
        <h3 className='register__heading'>
          Royhatdan otish
        </h3>
        <Box sx={{
          margin: '0 0 25px', width: '100%',
        }}>
          <TextField fullWidth label="name" variant="standard" onChange={(evt) => setname(evt.target.value)} />
        </Box>
        <Box sx={{
          margin: '0 0 25px', width: '100%',
        }}>
          <TextField
            fullWidth
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="standard"
            onChange={(evt) => setPassword(evt.target.value)}
          />
        </Box>
        <Button variant="outlined" size="large" onClick={handleBtnClick}>Ro`yhatdan o`tish</Button>
        <Link to="/login" style={{ marginTop: 20 }}>Kirish</Link>
        </form>
    </div>
  </div>);
};

export default Index;