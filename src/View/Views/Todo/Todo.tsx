import React, {FC} from 'react';
import { observer } from "mobx-react-lite";
import { interfaceTodo } from '../../../CustomType/todo';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';


const Todo:FC<{todo:interfaceTodo}> = ({ todo }) => (
  <FormControlLabel
  control={
    <Checkbox
    checked={todo.finished}
    onChange={() => todo.toggle() }
    color="primary"
  />
  }
  label={todo.title}
/>
);
export default observer(Todo);