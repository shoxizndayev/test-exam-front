import './App.scss';
import { Context as AuthContext } from './context/auth';
import { useContext } from 'react';
import Authonticated from './Authonticated';
import Unauthonticated from './Unauthonticated';


function App() {
  const { token } = useContext(AuthContext);
  if (token) {
    return <Authonticated />;
  } else {
    return <Unauthonticated />;
  }

}

export default App;
