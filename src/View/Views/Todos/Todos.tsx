import React, {FC, useContext} from 'react';
import { observer } from "mobx-react-lite";
import Todo from '../Todo/Todo';
import {interfaceTodo, interfaceTodos} from '../../../CustomType/todo';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import useStyles from './style';
import {StoreContext} from '../../../App';

const TodoListView:FC = () => {
  const MyContext = useContext(StoreContext);
  const classes = useStyles();
  return(
    <Card elevation={3}>
    <CardContent className={classes.cdContent}>
    {MyContext.listeTodoStore.todos.map(todo => (
        <Todo todo={todo} key={todo.id} />
      ))}
    <p>
    Tasks left: {MyContext.listeTodoStore.unfinishedTodoCount}
    </p>
    
    </CardContent>
  </Card>
  )
}
   

export default observer(TodoListView);