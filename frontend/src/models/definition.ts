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

export interface InputModalInterface {
    action: string,
    value: string,
    setState: Function,
    handleClick: Function,
    loading: boolean,
    setEditedTitle: Function
}

export interface ModalInterface {
    action: string,
    setState: Function,
    handleClick: Function,
    loading: boolean,
}

export interface PasswordModalInterface {
    action: string,
    currentPassword: string,
    newPassword: string,
    setState: Function,
    handleClick: Function,
    loading: boolean,
    setCurrentPassword: Function,
    setNewPassword: Function
}