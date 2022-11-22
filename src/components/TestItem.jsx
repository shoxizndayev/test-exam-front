import React from 'react';
import './index.scss';
import { Divider, FormControlLabel, Radio, RadioGroup } from '@mui/material';

const TestItem = ({ data, setAnswers, answers }) => {
  const handleChange = (evt) => {
    const obj = {
      tests_id: data.tests_id,
      answers_id: evt.target.value,
    };
    console.log(obj);
    const findAnswer = answers.find(answer => answer.tests_id === data.tests_id);
    if (findAnswer) {
      findAnswer.answers_id = evt.target.value;
      setAnswers([...answers]);
    } else {
      setAnswers(prev => [...prev, obj]);
    }
  };
  return (
    <li className="test-item">
      {/* <h4>{data.title}</h4> */}
      <p>{data.test_title}</p>

      <RadioGroup
        style={{ marginBottom: 35 }}
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
        onChange={handleChange}
      >
        {
          data.answers && data.answers.map(answer => <FormControlLabel key={answer.answers_id} value={answer.answers_id}
                                                                       control={<Radio />}
                                                                       label={answer.answers_title} />)
        }
      </RadioGroup>
      <Divider />
    </li>
  );
};

export default TestItem;