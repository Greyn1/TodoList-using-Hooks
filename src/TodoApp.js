import React,{useState} from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

/* TodoApp
 -TodoForm
 -TodoList
   - TodoItem */

function TodoApp(props) {
    const initialTodos = [
        {id:1,task:"complete hooks project",completed:false},
        {id:2,task:"start hash maps",completed:true},
        {id:3,task:"start MERN stck project",completed:false}
    ];
    const [todos, setTodos] = useState(initialTodos);
    const addTodo = (newTodo) => {
        setTodos([...todos,{id:4, task:newTodo, completed:false}]);
    };
    return (
        <Paper style={{
            padding: 0,
            margin: 0,
            height: "100vh",
            backgroundColor: "#fafafa"
                }}
            elevation={0} >
            <AppBar color='primary' position='static' style={{ height: "64px" }} >
                <Toolbar>
                    <Typography color='inherit'>TODOS WITH HOOKS</Typography>
                </Toolbar>
            </AppBar>
            <TodoForm addTodo={addTodo} />
            <TodoList todos={todos} />
        </Paper>
    );
}

export default TodoApp;