import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import { v4 as uuidv4 } from 'uuid';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

/* TodoApp
 -TodoForm
 -TodoList
   - TodoItem */

function TodoApp(props) {
    const initialTodos = [
        { id: 1, task: "complete hooks project", completed: false },
        { id: 2, task: "start hash maps", completed: true },
        { id: 3, task: "start MERN stck project", completed: false }
    ];

    const [todos, setTodos] = useState(initialTodos);

    const addTodo = (newTodo) => {
        setTodos([...todos, { id: uuidv4(), task: newTodo, completed: false }]);
    };

    const removeTodo = (id) => {
        const updatedTodos = todos.filter(todo => todo.id !== id);
        setTodos(updatedTodos);
    }

    const toggleCompletion = id => {
        const updatedTodos = todos.map(todo => todo.id === id ? {...todo, completed:!todo.completed} : todo);
        setTodos(updatedTodos);
    }

    const editTodo = (id, newTask) => {
        const updatedTodos = todos.map(todo => todo.id === id ? {...todo, task:newTask} : todo);
        setTodos(updatedTodos);
    }

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
            <Grid container justifyContent="center" style={{marginTop:'1rem'}} >
                <Grid item xs={11} md={8} lg={4} >
                    <TodoForm addTodo={addTodo} />
                    <TodoList todos={todos} removeTodo={removeTodo} toggleCheckBox={toggleCompletion} editTodo={editTodo} />
                </Grid>
            </Grid>
        </Paper>
    );
}

export default TodoApp;