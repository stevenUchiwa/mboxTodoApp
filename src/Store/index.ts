import {Todo, TodoList } from './mainstore';
import IncomeDomainStore from './icomDomaineStore';
import { interfaceTodo, interfaceTodos, interfaceIconStore} from '../CustomType/todo';




class Mstore{ 
    todeStore: interfaceTodo;
    listeTodoStore: interfaceTodos;
    icomStore: interfaceIconStore;

    constructor() {
        this.todeStore = new Todo();
        this.listeTodoStore = new TodoList();
        this.icomStore = new IncomeDomainStore();
    }
    
}

export default Mstore;