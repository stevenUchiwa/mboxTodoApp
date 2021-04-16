import React, {FC,useState,ChangeEvent} from 'react';
import { observer } from "mobx-react-lite";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Todo,TodoList} from '../../../Store/mainstore';
import { interfaceTodos} from '../../../CustomType/todo';
import Paper from '@material-ui/core/Paper';
import useStyles from './style';




const AddTodo:FC<{todoList: interfaceTodos }> = ({todoList}) => {
   const classes = useStyles()
   const [textfi, settextfi] = useState('')
   const handleAddTodo = () => {

    if(textfi === ''){
        alert('text vide')
        
    }else{
        const td = new Todo(textfi)
        todoList.addTd(td)
        settextfi('')
    }
      
   }
   const handleTextChange = (e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { value } = e.target;
    if(value !== ''){
        settextfi(value)
    }
   }
   return(
    <div className={classes.root}>
    <h1 className={classes.addhi}>Ajouter un todo</h1>
    <Paper elevation={3} className={classes.clpaper}>
    <form noValidate autoComplete="off">
         <TextField id="standard-basic" label="Todo" onChange={handleTextChange} value={textfi}/>
         <Button variant="contained" color="primary" onClick={handleAddTodo}>
             Ajouter
         </Button>
    </form>
    </Paper>
    </div>
   )
};

export default observer(AddTodo);