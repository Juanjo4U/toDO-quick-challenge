import { useSelector } from "react-redux";
import { selectTodoListArray } from "../../../../redux/states/lists/selecters";
import { ToDoType } from "../../../../utils/types_&_interfaces";
import { ListGenerator } from "../../../lists/generator";

const ToDoList = () => {
    const elements: Array<ToDoType> = useSelector(selectTodoListArray);
    return <ListGenerator elements={elements} />
}

export default ToDoList;