export interface interfaceTodo {
    id: number;
    title: string;
    finished: boolean
    toggle: () => void;
}

export interface interfaceTodos {
    todos: Array<interfaceTodo>;
    unfinishedTodoCount:  number;
    addTd: (value:interfaceTodo) => void;
}
export interface interfaceIconStore {
    incomeBeforeTax: number;
    setIncome: (incomeAmount: string) => void;
}


