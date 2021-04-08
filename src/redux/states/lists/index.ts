import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AnyObject } from '../../../utils/types_&_interfaces/basics';
import { ToDoType, DeleteTodoType } from '../../../utils/types_&_interfaces';

interface Lists {
    toDoList: AnyObject,
    nextID: number
}
const initialState: Lists = {
    toDoList: {},
    nextID: 0
}
export const { actions, reducer } = createSlice({
    name: 'lists',
    initialState,
    reducers: {
        addOrModifyTodo: (state, { payload }: PayloadAction<ToDoType>) => {
            if (!payload.id) state.nextID++;
            state.toDoList[payload.id || `${state.nextID}`] = payload.data;
        },
        deleteTodo: (state, { payload }: PayloadAction<DeleteTodoType>) => {
            delete state.toDoList[payload.id];
        },
    }
});

export const { addOrModifyTodo, deleteTodo } = actions;
export default reducer;