import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory, useParams } from "react-router";
import { ToDoForm } from "../../../components/screens/toDo";
import routes from "../../../navigation/routes";
import { addOrModifyTodo, deleteTodo } from "../../../redux/states/lists";
import { getSelectToDoById } from "../../../redux/states/lists/selecters";
import { AnyObject, ToDoDataType } from "../../../utils/types_&_interfaces";
import { Alert } from "../../../utils/utilities";

interface ToDoBase {
    id?: any
}

const ToDo = () => {
    let { id } = useParams<ToDoBase>();
    const toDo = useSelector(getSelectToDoById)({ id });
    const history = useHistory();
    const dispatch = useDispatch();
    const [data, setData] = useState<ToDoDataType>(toDo);

    if (id && !Object.values(toDo).length) return <Redirect to={'/404'} />

    const redirect = () => history.push(routes.home.path);

    const addOrModify = () => {
        if (!data.title) return Alert('title_required')
        dispatch(addOrModifyTodo({ id, data }));
        redirect();
    }
    const eraseTodo = () => {
        dispatch(deleteTodo({ id }));
        redirect();
    }

    const onChange = ({ target: { name, value } }: AnyObject) => {
        setData({ ...data, [name]: value });
    }
    return (
        <div className='flexCenter'>
            <ToDoForm id={id} data={data} onChange={onChange} addOrModify={addOrModify} eraseTodo={eraseTodo} />
        </div>
    )
}

export default ToDo;