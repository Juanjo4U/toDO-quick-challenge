import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { generatePath } from "react-router";
import routes from '../../../navigation/routes';
import { ToDoType } from "../../../utils/types_&_interfaces";

const DefaultItem: FunctionComponent<ToDoType> = ({ id, data }) => {
    const path = generatePath(routes.toDo.path, { id });
    return <Link to={path} className='listItem'>{data.title}</Link>
}

export default DefaultItem