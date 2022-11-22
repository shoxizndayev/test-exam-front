import React, { useEffect, useState } from 'react';
import './styles.scss';
import TestItem from '../../components/TestItem';
import { Button, Divider } from '@mui/material';
import { host } from '../../lib/api';
import { useNavigate } from 'react-router-dom';


const Index = () => {
  const navigate = useNavigate();
  const [tests, setTests] = useState();
  const [first_sciences, setfirstsciences] = useState([]);
  const [second_sciences, setsecondsciences] = useState([]);


  const user_id = JSON.parse(localStorage.getItem('userInfo'));
  

  useEffect(() => {
    host().get('/tests').then(({ data }) => {
      setTests(data?.data);
      console.log(data);
    });
  }, []);
  const handleClick = () => {
    host().post('/tests', { first_sciences, second_sciences, user_id }).then(({ data }) => {
      navigate('/result/' + data.data.result_id);
    });
  };
  return (
    <div className="test">
      <div className="container">
        <h2 className="test__title">Omad !</h2>
        <ul className="test__list">
          {
            tests && tests.first_sciences.map(test => <TestItem key={test.tests_id}
                                                                   data={test}
                                                                   setAnswers={setfirstsciences}
                                                                   answers={first_sciences} />)
          }
          <li><Divider color="danger" /></li>
          {
            tests && tests.second_sciences.map(test => <TestItem key={test.tests_id}
                                                                    data={test}
                                                                    setAnswers={setsecondsciences}
                                                                    answers={second_sciences} />)
          }
        </ul>

        <Button variant="contained"
                disabled={first_sciences.length === 10 && second_sciences.length === 10 ? false : true}
                onClick={handleClick}>Yakunlash</Button>
      </div>
    </div>
  );
};

export default Index;