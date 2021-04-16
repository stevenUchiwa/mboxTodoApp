import React from 'react';

import Todos from './Views/Todos/Todos';
import {Todo,TodoList} from '../Store/mainstore';
import Addtodo from './Views/Addtodo/Addtodo';


const todosListe = new TodoList([
    new Todo('tache first'),
    new Todo('second tache')
])

const Testmobx = () => {
    return(
        <>
            <Addtodo todoList={todosListe}/>
           <Todos todoList={todosListe}/>
        </>
    )
}

export default Testmobx;