import React from 'react';
import './styles.scss';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const Index = ({ title, label, width, setValue, value, data }) => {
  const handleSecondSubjectChange = (event) => {
    setValue(event.target.value);
  };


  return (
    <div>
      <h3>{title}</h3>
      <FormControl sx={{ minWidth: width }} disabled={data ? false : true} required>
        <InputLabel id="label">{label}</InputLabel>
        <Select
          labelId="label"
          id="demo-simple-select-helper"
          value={value}
          label={label}
          onChange={handleSecondSubjectChange}
        >
          {
            data && data?.data.map(item => (<MenuItem key={item.sciences_id}
            value={item.sciences_id}>{item.sciences_title}</MenuItem>))
          }
        </Select>
      </FormControl>
    </div>
  );
};

export default Index;