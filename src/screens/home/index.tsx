import { generatePath, useHistory } from "react-router";
import { Button } from "../../components/common/button";
import { Title } from "../../components/common/text";
import { ToDoList } from "../../components/screens/home";
import routes from "../../navigation/routes";

const Home = () => {
    const path = generatePath(routes.create.path);
    const history = useHistory();
    const onClick = () => history.push(path);
    return (
        <div className='flexCenter'>
            <div className='header'>
                <Title text='toDo_list' />
                <Button text='add_ToDo' onClick={onClick} ></Button>
            </div>
            <ToDoList />
        </div>
    )
}

export default Home