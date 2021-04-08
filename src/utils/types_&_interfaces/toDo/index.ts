export interface ToDoDataType {
    title: string,
    description?: string
}

export default interface ToDoType {
    id: any,
    data: ToDoDataType
}

export interface DeleteTodoType {
    id: any
}