import { ToDoDataType, ToDoType } from "../../../../utils/types_&_interfaces";
import { AnyObject, AnyFunction, ObjectType } from "../../../../utils/types_&_interfaces/basics";
import { pipeFromObj as pipe, getFromObj as get } from "../../../../utils/utilities";

const list = get('lists');

const fromListGet = (key: string): AnyFunction => pipe(
    list,
    get(key)
)

const selectTodoList = fromListGet('toDoList');

const formatTodoList = (toDoList: ObjectType<ToDoDataType> = {}): Array<ToDoType> => Object.keys(toDoList).map(id => ({ id, data: toDoList[id] }));

export const selectTodoListArray = pipe(
    selectTodoList,
    formatTodoList
);

export const getSelectToDoById = pipe(
    selectTodoList,
    (toDoList = {}) => ({ id }: AnyObject): ToDoType => toDoList[id] || {}
);