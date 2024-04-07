export interface Authentication {
    username: string,
    password: string,
    confirm_password?: string
}

export interface TodoList {
    title: string,
    id: string | number,
    created_at?: string 
}

export interface Demo {
    data: TodoList,
    deleteTodo: Function
}

export interface UserTodo {
    todo: TodoList,
    refetch: Function
}