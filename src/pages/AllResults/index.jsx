import React, { useEffect, useState } from 'react';
import './styles.scss';
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { api } from '../../lib/api';
import dayjs from 'dayjs';


const Index = () => {
  const navigate = useNavigate();
  const [results, setResults] = useState();

  useEffect(() => {
    api().get('/result').then(({ data }) => {
      if (data?.data) {
        setResults(data.data);
      }
    });
  }, []);
  console.log(results);
  return (
    <div className="all-results">
      <div className="container">
        <h2 className="all-results__title">Imtihon natijalari</h2>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align="right">Ismi</TableCell>
                <TableCell align="right">Yo`nalish</TableCell>
                <TableCell align="right">Sana</TableCell>
                <TableCell align="right">Ball</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {results && results.map((row, index) => (
                <TableRow
                  key={row.result_id}
                  style={{ background: row.result === 'rad etildi' ? 'red' : 'white' }}
                >
                  <TableCell>
                    {index + 1}
                  </TableCell>
                  <TableCell align="right">{row.name}</TableCell>
                  <TableCell align="right">{row.faculty_title}</TableCell>
                  <TableCell align="right">{dayjs(row.created_at).format('DD.MM.YYYY')}</TableCell>
                  <TableCell align="right">{row.result_finish}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <div style={{ marginTop: 50, display: 'flex', gap: 30 }}>
          <Button variant="contained" onClick={() => navigate('/blocks')}>Qayta urinish</Button>
        </div>
      </div>
    </div>
  );
};

export default Index;