import './App.css';
import {useDispatch, useSelector} from 'react-redux';
import { 
  getUsers,
  getPosts,
  getComments,
  getTodos,
  getCategories,
  getProducts,
} from './redux/actions';
import React , {useEffect} from 'react'
import Userscomponent from './components/users'
import UsersSinglePage from './components/usersSinglePage'
import NoMatch from './components/noMatch/noMatch'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {useTranslation} from 'react-i18next'
import PostsComponent from './components/posts'
import Nav from './components/nav/nav';
import MainPage from './components/mainPage/mainPage';
import CommentsComponent from './components/comments';
import TodosComponent from './components/todos';
import CategoriesComponent from './components/categories';
import ProductsComponent from './components/products/products';
import Footer from './components/footer'


function App() {
  
  const dispatch = useDispatch();
      const {Users} = useSelector(state => state)
      const {Posts} = useSelector(state => state)
      const {Comments} = useSelector(state => state)
      const {Todos} = useSelector(state => state)
      const {Categories} = useSelector(state => state)
      const {Products} = useSelector(state => state)

  useEffect(() => {
      dispatch(getUsers())
      dispatch(getPosts())
      dispatch(getComments())
      dispatch(getTodos())
      dispatch(getCategories())
      dispatch(getProducts())
  }, [])



const {t} = useTranslation()

  return (
    <Router>
      <div>
        <Nav/>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <MainPage/>
            </Route>
            <Route path="/users" >
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
            <Route path="/posts" >
              {Posts.length > 0 && (
                Posts.map(item => {
                  return(
                    <PostsComponent 
                      title={item.title}
                      body={item.body}
                    />
                  )
                })
              )}
            </Route>
            <Route path="/comments">
              {Comments.length > 0 && (
                Comments.map(item => {
                  return(
                    <CommentsComponent 
                    name={item.name}
                    email={item.email}
                    body={item.body}
                    created={item.created_at}
                    />
                  )
                })
              )}
            </Route>
            <Route path="/todos">
              {Todos.length > 0 && (
                Todos.map(item => {
                  return(
                    <TodosComponent 
                    title={item.title}
                    completed={item.completed}
                    />
                  )
                })
              )}
            </Route>
            <Route path="/categories">
              {Categories.length > 0 && (
                Categories.map( item => {
                  return(
                    <CategoriesComponent
                    name={item.name}
                    description={item.description}
                    />
                  )
                })
              )}
            </Route>
            <Route path="/products">
              {Products.length > 0 && (
                Products.map( item => {
                  return( 
                    <ProductsComponent
                    name={item.name}
                    description={item.description}
                    image={item.image}
                    price={item.price}
                    />
                  )
                })
              )}
            </Route>
            <Route path="/users/single/:id"  component={UsersSinglePage}/>
            <Route path="*">
                <NoMatch />
            </Route>
          </Switch>
          </div>
          <Footer/>
        </div>
    </Router>
  );
}

export default App;
