import { BrowserRouter, Route, Switch } from 'react-router-dom';
import routes from './routes';
import notFound from "../screens/404";

const Navigation = () =>
    <BrowserRouter>
        <Switch>
            {Object.values(routes).map((route, index) =>
                <Route key={index} exact={route.path === '/'} {...route} />
            )}
            <Route path='*' component={notFound} />
        </Switch>
    </BrowserRouter>

export default Navigation