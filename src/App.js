import './App.css';
import {useDispatch, useSelector} from 'react-redux';
import { getUsers } from './redux/actions';
import React , {useEffect} from 'react'
import Userscomponent from './components/users'



function App() {
  
  const dispatch = useDispatch();
  const Users = useSelector(state => state)

  useEffect(() => {
      dispatch(getUsers())
  }, [])



  return (
    <div className="App">
      {Users.length > 0 && (
        Users.map(item => {
          return(
            <Userscomponent 
              name={item.name}
              email={item.email}
              gender={item.gender}
            />
          )
        })
      )}
    </div>
  );
}

export default App;
