import './App.css';
import {useDispatch, useSelector} from 'react-redux';
import { getUsers } from './redux/actions';
import React , {useEffect} from 'react'
import Userscomponent from './components/users'
import UsersSinglePage from './components/usersSinglePage'
import NoMatch from './components/noMatch'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import {useTranslation} from 'react-i18next'


function App() {
  
  const dispatch = useDispatch();
      const {Users} = useSelector(state => state)

  useEffect(() => {
      dispatch(getUsers())
      console.log(Users)
  }, [])
  useEffect(() => {
      console.log(Users)
  }, [Users])

const {t} = useTranslation()

  return (
    <Router>
    <div className="App">
      {/* <h2>{t('title')}</h2> */}
      <Switch>
        <Route path="/" exact>
          {Users.length > 0 && (
            Users.map(item => {
              return(
                <Userscomponent 
                  name={item.name}
                  email={item.email}
                  gender={item.gender}
                  id={item.id}
                />
              )
            })
          )}
        </Route>
        <Route path="/single/:id"  component={UsersSinglePage}/>
        <Route path="*">
            <NoMatch />
        </Route>
      </Switch>
      </div>
      
    </Router>
  );
}

export default App;
