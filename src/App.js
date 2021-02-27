import './App.css';
import {useDispatch} from 'react-redux';
import { getUsers } from './redux/actions';
import React , {useEffect} from 'react'


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(getUsers())
  }, [])
  return (
    <div className="App">
    
    </div>
  );
}

export default App;
