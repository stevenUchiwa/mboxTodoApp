import {observable,action,makeObservable,computed} from "mobx";
import {interfaceTodo} from '../CustomType/todo';


class Todo {
    id = Math.random();
    title = "";
    finished = false;

    constructor(title: string){
        makeObservable(this, {
            title: observable,
            finished: observable,
            toggle: action
          });
          this.title = title;
    }
    toggle() {
        this.finished = !this.finished;
    }
}


class TodoList {
    todos: Array<interfaceTodo> = [];
    get unfinishedTodoCount() {
      return this.todos.filter(todo => !todo.finished).length;
    }
    constructor(todos: Array<interfaceTodo>) {
      makeObservable(this, {
        todos: observable,
        unfinishedTodoCount: computed,
        addTd: action
      });
      this.todos = todos;
    }
    addTd(value:any){
      this.todos.push(value)
    }
  }

  export {
      Todo,
      TodoList
  }