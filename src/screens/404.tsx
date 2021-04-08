import { generatePath, useHistory } from "react-router"
import { ErrorComponent } from "../components/common/error"
import routes from "../navigation/routes";

const PageNotFound = () => {
    const path = generatePath(routes.home.path);
    const history = useHistory();
    const onClick = () => history.push(path);
    return (
        <div className='flexCenter'>
            <ErrorComponent message='page_not_found' buttonText='go_home' onClick={onClick} />
        </div>
    )
}

export default PageNotFound