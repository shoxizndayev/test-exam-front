import React from 'react';
import {
  ListSubheader,
  InputLabel,
  Select,
  FormControl,
  MenuItem,
} from '@mui/material';


export default function GroupSelect({ data, width, title, label, value, setValue }) {
  const handleChange = event => {
    setValue(event.target.value);
  };

  const renderSelectGroup = universities => {
    const items = universities.faculties.map(faculty => {
      return (
        <MenuItem key={faculty.faculty_id} value={faculty.faculty_id}>
          {faculty.faculty_title}
        </MenuItem>
      );
    });
    return [<ListSubheader
      style={{ fontWeight: 'bold', color: 'black' }}>{universities.university_title}</ListSubheader>, items];
  };

  return (
    <div>
      <h3>{title}</h3>
      <FormControl sx={{ minWidth: width }} disabled={data ? false : true} required>
        <InputLabel id="label">{label}</InputLabel>
        <Select
          id="demo-simple-select-helper"
          labelId="label"
          value={value}
          onChange={handleChange}
          defaultValue=""
        >
          {data?.data?.map(u => renderSelectGroup(u))}
        </Select>
      </FormControl>
    </div>
  );
}