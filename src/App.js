import React,{useState} from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

/* need install react-router-dom with npm install -S react-router-dom */

function App() {
  
  //React.lazy it helps us to import the components

  const NewTodo = React.lazy(() => import('./components/NewTodo'))

  const TodoList = React.lazy(() => import('./components/TodoList'))
 
  /* Suspense fallback 
  It helps us to render when we want our components,
  while rendering with fallback shows us a message
 */

  
  return (

    <Router>
        <React.Suspense fallback={<p>Please wait...</p>}>
            <Switch>
                <Route exact path = "/" render={() =>(
                  <TodoList 
                    TodoList = "TodoList"
                   
                  />
                )} 
                />
                <Route path="/new" render={() =>(
                  <NewTodo 
                    NewTodo = "NewTodo"
                  />
                )}  />
            </Switch>
        </React.Suspense>
    </Router>   

  );

}

export default App;
