export interface interfaceTodo {
    id: number;
    title: string;
    finished: boolean;
    toggle: () => void;
    addTodo: (s: string) => void;
}

export interface interfaceTodos {
    todos: Array<interfaceTodo>;
    unfinishedTodoCount:  number;
    addTd: (value:string) => void;
}
export interface interfaceIconStore {
    incomeBeforeTax: number;
    setIncome: (incomeAmount: string) => void;
}
export interface interfaceMainStore {
    todeStore: interfaceTodo;
    listeTodoStore: interfaceTodos;
    icomStore: interfaceIconStore;
}


