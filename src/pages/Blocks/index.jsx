import React, { useEffect, useState } from 'react';

import './styles.scss';
import Back from '../../components/Back';
import { Button } from '@mui/material';
import Select from '../../components/Select';
import { api, host } from '../../lib/api';
import GroupSelect from '../../components/GroupSelect';
import { useNavigate } from 'react-router-dom';
import { logDOM } from '@testing-library/react';

const Index = () => {
  const [firstSubjectId, setFirstSubjectId] = React.useState('');
  const [secondSubjectId, setSecondSubjectId] = React.useState('');
  const [universityId, setUniversityId] = useState('');
  const [firstSubjects, setFirstSubjects] = useState();
  const [secondSubjects, setSecondSubjects] = useState();
  const [universities, setUniversities] = useState();
  const [faculty, setFaculty] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    api().get('/sciences').then(({ data }) => {
      setFirstSubjects(data);
    });
  }, []);

  useEffect(() => {
    if (firstSubjectId) {
      api().get('/sciences/' + firstSubjectId).then(({ data }) => {
        setSecondSubjects(data);
      });
    }
  }, [firstSubjectId]);

  useEffect(() => {
    if (secondSubjectId) {
      api().get(`/universities?first_choose_sciences_id=${firstSubjectId}&second_choose_sciences_id=${secondSubjectId}`).then(({ data }) => {
        setUniversities(data);
      });
    }
  }, [secondSubjectId]);
  useEffect(() => {
    if (universityId) {
      api().get('/faculty/' + universityId).then(({ data }) => {
        setFaculty(data?.data);
      });
    }
  }, [universityId]);

  const handleClick = (evt) => {
    evt.preventDefault();

    host().post('/info', {
      first_sciences_id: firstSubjectId,
      second_sciences_id: secondSubjectId,
      faculty_id: faculty.faculty_id,
    }).then(({ data }) => {
      console.log(data)
      if (data?.data) {
        localStorage.setItem('userInfo', JSON.stringify(data.data.user_result_id));
        navigate('/test');
      }
    })
  };

  return (
    <div className="blocks">
      <div className="container">
        <Back />
        <h2 className="blocks__title">Asosiy Imtihonga hush kelibsiz</h2>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div className="blocks__select-collection">
              <Select title="Birinchi fan" label="Blok 1" value={firstSubjectId} setValue={setFirstSubjectId}
                      width={540} data={firstSubjects} />
              <Select title="Ikkinchi fan" label="Blok 2" value={secondSubjectId} setValue={setSecondSubjectId}
                      width={540} data={secondSubjects} />
            </div>
            <div className="university">
              <div className="university__body">
                <div className="university__selection">
                  <GroupSelect title="OTM nomi" setValue={setUniversityId} value={universityId} label="OTM" width={540}
                               data={universities} />
                </div>

              </div>
            </div>
          </div>
          <div>
            <div className="university__info">
              <div className="university__score">
                {
                  faculty && <>
                    <h3>{faculty.university}</h3>
                    <ul>
                      <li><p>Grant</p><span>{faculty.grand_place}</span><span>{faculty.grand_border}</span></li>
                      <li><p>Sharnoma</p><span>{faculty.contract_place}</span><span>{faculty.contract_border}</span></li>
                    </ul>
                  </>
                }
              </div>
            </div>
          </div>
        </div>

        <Button style={{ display: 'block', marginTop: 50 }} variant="contained" disabled={universityId ? false : true}
                onClick={handleClick}>Testni
          boshlash</Button>

      </div>
    </div>
  );
};

export default Index;