import React from 'react';

import Todos from './Views/Todos/Todos';
import {Todo,TodoList} from '../Store/mainstore';
import Addtodo from './Views/Addtodo/Addtodo';

const Testmobx = () => {
    return(
        <>
            <Addtodo />
           <Todos />
        </>
    )
}

export default Testmobx;