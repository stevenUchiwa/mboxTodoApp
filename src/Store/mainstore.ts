import {observable,action,makeObservable,computed} from "mobx";
import {interfaceTodo} from '../CustomType/todo';


class Todo {
    id = Math.random();
    title = "";
    finished = false;

    constructor(){
        makeObservable(this, {
            title: observable,
            finished: observable,
            toggle: action,
            addTodo: action
          });
    }
    toggle() {
        this.finished = !this.finished;
    }
    addTodo(value: string){
      this.title = value;
    }
}


class TodoList {
    todos: Array<interfaceTodo> = [];
    get unfinishedTodoCount() {
      return this.todos.filter(todo => !todo.finished).length;
    }
    constructor() {
      makeObservable(this, {
        todos: observable,
        unfinishedTodoCount: computed,
        addTd: action
      });
    }
    addTd(value: string){
      const tmpTodo = new Todo();
      tmpTodo.addTodo(value)
      this.todos.push(tmpTodo)
    }
  }

  export {
      Todo,
      TodoList
  }