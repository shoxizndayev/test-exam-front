import React, { useContext, useState } from 'react';
import './styles.scss';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

import { Context as AuthContext } from '../../context/auth';
import { api } from '../../lib/api';

const Index = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const { setToken } = useContext(AuthContext);

  const handleSubmit = async () => {
    const { data } = await api().post('login', { name, password });
    const { token } = data
    if(token) {
      setToken(token)
    }else {
      alert('parol yoki name xato kiritildi')
    }
  };
  return (
    <div className="container">
      <div className="form-container">
        <Box
          component="form"
          noValidate
          sx={{
            width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
          }}
        >
          <h3>
            Akkauntga kirish
          </h3>
          <Box sx={{
            margin: '0 0 25px', width: '100%',
          }}>
            <TextField fullWidth label="name" variant="standard"
                       onChange={(evt) => setName(evt.target.value)} />
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
          <Button variant="outlined" size="large" onClick={handleSubmit}>Kirish</Button>

          <Link to="/register" style={{ marginTop: 20 }}>Ro`yxatdan o`tish</Link>
        </Box>
      </div>
    </div>
  );
};

export default Index;