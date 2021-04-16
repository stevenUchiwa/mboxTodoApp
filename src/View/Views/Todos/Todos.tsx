import React, {FC} from 'react';
import { observer } from "mobx-react-lite";
import Todo from '../Todo/Todo';
import {interfaceTodo, interfaceTodos} from '../../../CustomType/todo';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import useStyles from './style';


const TodoListView:FC<{todoList: interfaceTodos }> = ({ todoList }) => {
  const classes = useStyles();
  return(
    <Card elevation={3}>
    <CardContent className={classes.cdContent}>
    {todoList.todos.map(todo => (
        <Todo todo={todo} key={todo.id} />
      ))}
    <p>
    Tasks left: {todoList.unfinishedTodoCount}
    </p>
    
    </CardContent>
  </Card>
  )
}
   

export default observer(TodoListView);